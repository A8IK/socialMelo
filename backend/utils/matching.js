/**
 * Matching scorer: scoreMatch(brand, creator) → { score, tier, breakdown }
 *
 * Output ranges:
 *   score: 0..100 (higher = better match)
 *   tier: 'strong' (≥70) | 'consider' (40-69) | 'below' (<40, hide in UI)
 *   breakdown: per-dimension subscores + human-readable reasons
 *
 * Tunable knobs at the bottom of the file (WEIGHTS, NICHE_GROUPS, REGION_GROUPS).
 */

// Adjacency map for fuzzy niche matching.
// If a brand wants "Beauty" and a creator only has "Fashion", that's still a
// 0.5 partial credit instead of 0. Edit groups freely; multiple groups can
// share members (e.g., Lifestyle is in two groups intentionally).
const NICHE_GROUPS = [
  ['Beauty', 'Fashion', 'Lifestyle'],
  ['Tech', 'Gaming'],
  ['Fitness', 'Sports'],
  ['Food', 'Travel'],
  ['Education', 'Finance'],
  ['Music', 'Entertainment', 'Comedy'],
  ['Art'],
  ['Parenting', 'Lifestyle']
];

function adjacentNiches(niche) {
  const adj = new Set();
  for (const group of NICHE_GROUPS) {
    if (group.includes(niche)) {
      for (const g of group) if (g !== niche) adj.add(g);
    }
  }
  return adj;
}

// Backward-compat readers — fall back to legacy singular fields if the new
// plural arrays are empty (some users were registered before the schema split).
function readBrandDesiredNiches(brand) {
  const arr = brand?.brandDetails?.desiredInfluencerNiches;
  if (Array.isArray(arr) && arr.length) return arr;
  const single = brand?.brandDetails?.desiredInfluencerNiche;
  return single ? [single] : [];
}

function readBrandNiches(brand) {
  const arr = brand?.brandDetails?.niches;
  if (Array.isArray(arr) && arr.length) return arr;
  const single = brand?.brandDetails?.niche;
  return single ? [single] : [];
}

function readCreatorNiches(creator) {
  const arr = creator?.creatorDetails?.niches;
  if (Array.isArray(arr) && arr.length) return arr;
  const single = creator?.creatorDetails?.niche;
  return single ? [single] : [];
}

// Region groups for geo proximity (inexhaustive — extend as needed).
const REGION_GROUPS = {
  saarc: ['India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Nepal', 'Bhutan', 'Maldives', 'Afghanistan'],
  northAmerica: ['United States', 'Canada', 'Mexico'],
  euUk: ['Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Belgium', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Austria', 'Ireland', 'Portugal', 'Greece', 'Poland', 'Czech Republic', 'United Kingdom'],
  latam: ['Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Ecuador', 'Bolivia', 'Paraguay', 'Uruguay'],
  mena: ['Saudi Arabia', 'United Arab Emirates', 'Egypt', 'Morocco', 'Algeria', 'Tunisia', 'Jordan', 'Lebanon', 'Iraq', 'Iran', 'Israel', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Yemen'],
  sea: ['Indonesia', 'Vietnam', 'Thailand', 'Philippines', 'Malaysia', 'Singapore', 'Myanmar', 'Cambodia', 'Laos'],
  eastAsia: ['China', 'Japan', 'South Korea', 'Taiwan', 'Hong Kong'],
  ssa: ['Nigeria', 'South Africa', 'Kenya', 'Ghana', 'Ethiopia', 'Uganda', 'Tanzania']
};

function regionsOf(country) {
  const out = [];
  for (const [name, list] of Object.entries(REGION_GROUPS)) {
    if (list.includes(country)) out.push(name);
  }
  return out;
}

function maxFollowers(creator) {
  const platforms = creator?.creatorDetails?.platforms || [];
  if (platforms.length === 0) return 0;
  return Math.max(0, ...platforms.map(p => Number(p.followers) || 0));
}

const TIER_ORDER = ['nano', 'micro', 'macro', 'mega'];

function tierFromFollowers(n) {
  if (n >= 1e6) return 'mega';
  if (n >= 1e5) return 'macro';
  if (n >= 1e4) return 'micro';
  return 'nano';
}

function tierFromBrandLabel(label) {
  if (!label) return null;
  const l = String(label).toLowerCase();
  for (const t of TIER_ORDER) if (l.includes(t)) return t;
  return null;
}

// ---- Per-dimension scorers ---------------------------------------------------

function scoreNiche(brand, creator) {
  // Brand's own niches also count as a hint of who they want to partner with —
  // so combine "what they're looking for" + "what they are".
  const desiredSet = new Set([...readBrandDesiredNiches(brand), ...readBrandNiches(brand)]);
  const desired = Array.from(desiredSet);
  const have = readCreatorNiches(creator);
  if (desired.length === 0 || have.length === 0) return { score: 0, exact: [], adjacent: [] };

  const exact = [];
  const adjacent = [];
  const seen = new Set();

  for (const want of desired) {
    if (have.includes(want) && !seen.has(want)) {
      exact.push(want);
      seen.add(want);
      continue;
    }
    for (const a of adjacentNiches(want)) {
      if (have.includes(a) && !seen.has(a)) {
        adjacent.push(a);
        seen.add(a);
      }
    }
  }

  const raw = exact.length + 0.5 * adjacent.length;
  const score = Math.min(1, raw / desired.length);
  return { score, exact, adjacent };
}

function scoreBudget(brand, creator) {
  const b = brand?.brandDetails?.budgetRangePerCampaign;
  const c = creator?.creatorDetails?.rateRange;
  if (!b || !c) return { score: 0.5, overlap: false, status: 'unknown' };
  const validBoth = b.min != null && b.max != null && c.min != null && c.max != null;
  if (!validBoth) return { score: 0.5, overlap: false, status: 'unknown' };

  const overlap = Math.max(b.min, c.min) <= Math.min(b.max, c.max);
  if (overlap) return { score: 1, overlap: true, status: 'overlap' };

  if (b.max < c.min) {
    const gap = c.min - b.max;
    const ref = c.min || 1;
    let score = Math.max(0, 1 - gap / ref);
    if (c.openToNegotiation) score = Math.min(1, score + 0.2);
    return { score, overlap: false, status: 'budget-low' };
  }
  // brand budget above creator's rate
  const gap = b.min - c.max;
  const ref = (c.max || 1) * 2;
  return { score: Math.max(0, 1 - gap / ref), overlap: false, status: 'budget-high' };
}

function scoreTier(brand, creator) {
  const preferred = brand?.brandDetails?.preferredCreatorTiers || [];
  const followers = maxFollowers(creator);
  const creatorTier = tierFromFollowers(followers);

  if (preferred.length === 0) return { score: 0.7, creatorTier, exact: false };

  const preferredCanonical = preferred.map(tierFromBrandLabel).filter(Boolean);
  if (preferredCanonical.length === 0) return { score: 0.7, creatorTier, exact: false };

  if (preferredCanonical.includes(creatorTier)) return { score: 1, creatorTier, exact: true };

  const creatorIdx = TIER_ORDER.indexOf(creatorTier);
  let minDist = Infinity;
  for (const t of preferredCanonical) {
    const idx = TIER_ORDER.indexOf(t);
    const d = Math.abs(idx - creatorIdx);
    if (d < minDist) minDist = d;
  }
  let score = 0;
  if (minDist === 1) score = 0.5;
  else if (minDist === 2) score = 0.2;
  return { score, creatorTier, exact: false };
}

function scoreAudienceGeo(brand, creator) {
  const targetGeos = brand?.brandDetails?.targetAudience?.geos || [];
  const audience = creator?.creatorDetails?.audienceDemographics?.topCountries || [];
  if (targetGeos.length === 0 || audience.length === 0) return 0.5;

  const exact = audience.filter(c => targetGeos.includes(c));
  let region = 0;
  for (const ac of audience) {
    if (exact.includes(ac)) continue;
    const acRegions = regionsOf(ac);
    if (acRegions.length === 0) continue;
    const inSameRegion = targetGeos.some(tg => regionsOf(tg).some(r => acRegions.includes(r)));
    if (inSameRegion) region += 1;
  }
  return Math.min(1, (exact.length + 0.4 * region) / Math.max(1, targetGeos.length));
}

function scoreAudienceAge(brand, creator) {
  const target = brand?.brandDetails?.targetAudience;
  const ageSplit = creator?.creatorDetails?.audienceDemographics?.ageSplit;
  if (!target || target.ageMin == null || target.ageMax == null) return 0.5;
  if (!ageSplit) return 0.5;

  const buckets = {
    '13-17': [13, 17],
    '18-24': [18, 24],
    '25-34': [25, 34],
    '35-44': [35, 44],
    '45+': [45, 100]
  };
  let inRange = 0;
  for (const [name, [lo, hi]] of Object.entries(buckets)) {
    const v = Number(ageSplit[name]) || 0;
    if (lo <= target.ageMax && hi >= target.ageMin) inRange += v;
  }
  return Math.min(1, inRange / 100);
}

function scoreAudienceGender(brand, creator) {
  const targetGenders = brand?.brandDetails?.targetAudience?.genders || [];
  const split = creator?.creatorDetails?.audienceDemographics?.genderSplit || {};
  if (targetGenders.length === 0 || targetGenders.includes('All')) return 1;
  let total = 0;
  if (targetGenders.includes('Male')) total += Number(split.male) || 0;
  if (targetGenders.includes('Female')) total += Number(split.female) || 0;
  if (targetGenders.includes('Non-binary')) total += Number(split.other) || 0;
  return Math.min(1, total / 100);
}

function scoreAudience(brand, creator) {
  const geo = scoreAudienceGeo(brand, creator);
  const age = scoreAudienceAge(brand, creator);
  const gender = scoreAudienceGender(brand, creator);
  return { score: (geo + age + gender) / 3, geo, age, gender };
}

function scoreEngagement(creator) {
  const r = Number(creator?.creatorDetails?.averageEngagementRate);
  if (!Number.isFinite(r) || r <= 0) return 0;
  // 5% engagement is treated as max — boost above is capped.
  return Math.min(1, r / 5);
}

const WEIGHTS = {
  niche: 0.35,
  budget: 0.22,
  tier: 0.16,
  audience: 0.17,
  engagement: 0.10
};

function classifyTier(score) {
  if (score >= 70) return 'strong';
  if (score >= 40) return 'consider';
  return 'below';
}

function buildReasons(parts, niche, budget, tier, audience, engagement) {
  const out = [];
  if (niche.exact.length) out.push(`${niche.exact.length} niche match: ${niche.exact.join(', ')}`);
  if (niche.adjacent.length) out.push(`${niche.adjacent.length} related niche: ${niche.adjacent.join(', ')}`);
  if (budget.status === 'overlap') out.push('budget fits creator rate');
  else if (budget.status === 'budget-low' && parts.budget > 0.5) out.push('budget close to creator rate');
  else if (budget.status === 'budget-high' && parts.budget > 0.5) out.push('budget exceeds creator rate');
  if (tier.exact) out.push(`creator tier (${tier.creatorTier}) is preferred`);
  else if (parts.tier >= 0.5) out.push(`${tier.creatorTier} tier is adjacent to preferred`);
  if (audience.geo >= 0.5) out.push('audience well-aligned with target regions');
  if (audience.age >= 0.5) out.push('audience age aligned with target');
  if (audience.gender >= 0.7) out.push('audience gender mix aligned');
  if (engagement >= 0.6) out.push(`engagement ~${(engagement * 5).toFixed(1)}%`);
  return out;
}

function scoreMatch(brand, creator) {
  const niche = scoreNiche(brand, creator);
  const budget = scoreBudget(brand, creator);
  const tier = scoreTier(brand, creator);
  const audience = scoreAudience(brand, creator);
  const engagement = scoreEngagement(creator);

  const parts = {
    niche: niche.score,
    budget: budget.score,
    tier: tier.score,
    audience: audience.score,
    engagement
  };

  const total = Math.round(
    (parts.niche * WEIGHTS.niche +
      parts.budget * WEIGHTS.budget +
      parts.tier * WEIGHTS.tier +
      parts.audience * WEIGHTS.audience +
      parts.engagement * WEIGHTS.engagement) * 100
  );

  return {
    score: total,
    tier: classifyTier(total),
    breakdown: {
      ...parts,
      reasons: buildReasons(parts, niche, budget, tier, audience, engagement)
    }
  };
}

module.exports = { scoreMatch, tierFromFollowers, maxFollowers };
