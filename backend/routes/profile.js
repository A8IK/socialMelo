const express = require('express');
const User = require('../models/User');
const { protect } = require('../middleware/auth');
const { publicProfile } = require('../utils/publicProfile');

const router = express.Router();

router.use(protect);

router.get('/me', async (req, res) => {
  try {
    const user = await User.findById(req.user._id).lean();
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, user });
  } catch (err) {
    console.error('Profile /me error:', err);
    res.status(500).json({ success: false, message: 'Failed to load profile' });
  }
});

const sanitizeNumber = (v, { min = 0, max = Number.POSITIVE_INFINITY, fallback = null } = {}) => {
  const n = Number(v);
  if (!Number.isFinite(n)) return fallback;
  if (n < min || n > max) return fallback;
  return n;
};

const sanitizeStringArr = (v) => Array.isArray(v) ? v.map(s => String(s).trim()).filter(Boolean) : [];

function buildBrandPatch(input) {
  if (!input || typeof input !== 'object') return null;
  const out = {};
  if (input.industry !== undefined) out['brandDetails.industry'] = String(input.industry || '').trim();
  if (input.budgetRangePerCampaign && typeof input.budgetRangePerCampaign === 'object') {
    const b = input.budgetRangePerCampaign;
    out['brandDetails.budgetRangePerCampaign'] = {
      min: sanitizeNumber(b.min, { min: 0 }),
      max: sanitizeNumber(b.max, { min: 0 }),
      currency: String(b.currency || 'USD').trim()
    };
  }
  if (input.campaignGoals !== undefined) out['brandDetails.campaignGoals'] = sanitizeStringArr(input.campaignGoals);
  if (input.targetAudience && typeof input.targetAudience === 'object') {
    const t = input.targetAudience;
    out['brandDetails.targetAudience'] = {
      ageMin: sanitizeNumber(t.ageMin, { min: 0, max: 120 }),
      ageMax: sanitizeNumber(t.ageMax, { min: 0, max: 120 }),
      genders: sanitizeStringArr(t.genders),
      geos: sanitizeStringArr(t.geos)
    };
  }
  if (input.preferredCreatorTiers !== undefined) out['brandDetails.preferredCreatorTiers'] = sanitizeStringArr(input.preferredCreatorTiers);
  if (input.preferredContentFormats !== undefined) out['brandDetails.preferredContentFormats'] = sanitizeStringArr(input.preferredContentFormats);
  out['brandDetails.profileCompleted'] = true;
  return out;
}

function buildCreatorPatch(input) {
  if (!input || typeof input !== 'object') return null;
  const out = {};
  if (input.rateRange && typeof input.rateRange === 'object') {
    const r = input.rateRange;
    out['creatorDetails.rateRange'] = {
      min: sanitizeNumber(r.min, { min: 0 }),
      max: sanitizeNumber(r.max, { min: 0 }),
      currency: String(r.currency || 'USD').trim(),
      openToNegotiation: Boolean(r.openToNegotiation)
    };
  }
  if (input.audienceDemographics && typeof input.audienceDemographics === 'object') {
    const d = input.audienceDemographics;
    const age = d.ageSplit && typeof d.ageSplit === 'object' ? d.ageSplit : {};
    const gen = d.genderSplit && typeof d.genderSplit === 'object' ? d.genderSplit : {};
    out['creatorDetails.audienceDemographics'] = {
      topCountries: sanitizeStringArr(d.topCountries),
      ageSplit: {
        '13-17': sanitizeNumber(age['13-17'], { min: 0, max: 100 }),
        '18-24': sanitizeNumber(age['18-24'], { min: 0, max: 100 }),
        '25-34': sanitizeNumber(age['25-34'], { min: 0, max: 100 }),
        '35-44': sanitizeNumber(age['35-44'], { min: 0, max: 100 }),
        '45+': sanitizeNumber(age['45+'], { min: 0, max: 100 })
      },
      genderSplit: {
        male: sanitizeNumber(gen.male, { min: 0, max: 100 }),
        female: sanitizeNumber(gen.female, { min: 0, max: 100 }),
        other: sanitizeNumber(gen.other, { min: 0, max: 100 })
      }
    };
  }
  if (input.openToPaidPartnerships !== undefined) out['creatorDetails.openToPaidPartnerships'] = Boolean(input.openToPaidPartnerships);
  if (input.mediaKitUrl !== undefined) out['creatorDetails.mediaKitUrl'] = String(input.mediaKitUrl || '').trim();
  if (input.averageEngagementRate !== undefined) out['creatorDetails.averageEngagementRate'] = sanitizeNumber(input.averageEngagementRate, { min: 0, max: 100 });
  if (input.exclusivityStatus !== undefined) out['creatorDetails.exclusivityStatus'] = String(input.exclusivityStatus || '').trim();
  if (input.paymentMethodPreference !== undefined) out['creatorDetails.paymentMethodPreference'] = String(input.paymentMethodPreference || '').trim();
  if (input.howHeardAboutUs !== undefined) out['creatorDetails.howHeardAboutUs'] = String(input.howHeardAboutUs || '').trim();
  if (input.marketingOptIn !== undefined) out['creatorDetails.marketingOptIn'] = Boolean(input.marketingOptIn);
  out['creatorDetails.profileCompleted'] = true;
  return out;
}

router.patch('/complete', async (req, res) => {
  try {
    let patch = null;
    if (req.user.userType === 'Join as Brand') {
      patch = buildBrandPatch(req.body.brandDetails);
    } else if (req.user.userType === 'Join as Creator') {
      patch = buildCreatorPatch(req.body.creatorDetails);
    } else {
      return res.status(400).json({ success: false, message: 'Profile completion not applicable for this user type' });
    }

    if (!patch) {
      return res.status(400).json({ success: false, message: 'Missing or invalid profile data' });
    }

    const updated = await User.findByIdAndUpdate(
      req.user._id,
      { $set: patch },
      { new: true, runValidators: true }
    ).lean();

    res.json({ success: true, user: updated });
  } catch (err) {
    console.error('Profile /complete error:', err);
    res.status(500).json({ success: false, message: 'Failed to update profile' });
  }
});

// Public read of another user's profile (sensitive fields stripped).
// `/me` is registered above this route, so it always wins for the literal "me".
router.get('/:userId', async (req, res) => {
  try {
    const target = await User.findById(req.params.userId).lean();
    if (!target) return res.status(404).json({ success: false, message: 'User not found' });
    if (target.userType !== 'Join as Brand' && target.userType !== 'Join as Creator') {
      return res.status(404).json({ success: false, message: 'Profile not available' });
    }
    res.json({ success: true, user: publicProfile(target) });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'Invalid user id' });
    }
    console.error('Profile public error:', err);
    res.status(500).json({ success: false, message: 'Failed to load profile' });
  }
});

module.exports = router;
