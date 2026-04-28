import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Search, X } from 'lucide-react';
import './MatchSection.css';

const formatFollowers = (n) => {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  return String(Math.round(n) || 0);
};

const maxFollowers = (creator) => {
  const platforms = creator?.creatorDetails?.platforms || [];
  if (platforms.length === 0) return 0;
  return Math.max(0, ...platforms.map(p => Number(p.followers) || 0));
};

const MatchCard = ({ match }) => {
  const u = match.user || {};
  const isBrand = u.userType === 'Join as Brand';
  const isCreator = u.userType === 'Join as Creator';

  let summary = u.userType || '';
  if (isBrand) {
    const niches = (u.brandDetails?.niches || []).slice(0, 3).join(', ');
    summary = [u.brandDetails?.industry, niches].filter(Boolean).join(' · ') || 'Brand';
  } else if (isCreator) {
    const niches = (u.creatorDetails?.niches || []).slice(0, 3).join(', ');
    const fol = formatFollowers(maxFollowers(u));
    summary = [niches, `${fol} followers`].filter(Boolean).join(' · ') || 'Creator';
  }

  const cardBody = (
    <>
      <div className="match-card-head">
        <div className="match-avatar">{(u.name || '?')[0].toUpperCase()}</div>
        <div className="match-info">
          <div className="match-name">{u.name}</div>
          <div className="match-summary">{summary}</div>
        </div>
        <div className="match-score" title={`${match.score} / 100 match score`}>
          <div className="match-score-num">{match.score}</div>
          <div className="match-score-label">match</div>
        </div>
      </div>
      {Array.isArray(match.breakdown?.reasons) && match.breakdown.reasons.length > 0 && (
        <ul className="match-reasons">
          {match.breakdown.reasons.slice(0, 4).map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      )}
    </>
  );

  const className = `match-card match-tier-${match.tier}`;
  if (u._id) {
    return <Link to={`/profile/${u._id}`} className={`${className} match-card-link`}>{cardBody}</Link>;
  }
  return <div className={className}>{cardBody}</div>;
};

const Group = ({ icon, title, accent, matches }) => {
  if (!matches || matches.length === 0) return null;
  return (
    <div className="match-group">
      <h3 className={`match-heading match-heading-${accent}`}>
        {React.createElement(icon, { size: 16 })} {title} <span className="match-count">{matches.length}</span>
      </h3>
      <div className="match-grid">
        {matches.map((m, i) => <MatchCard key={(m.user && m.user._id) || i} match={m} />)}
      </div>
    </div>
  );
};

const matchHaystack = (m) => {
  const u = m.user || {};
  const parts = [
    u.name,
    u.email,
    u.userType,
    u.brandDetails?.industry,
    (u.brandDetails?.niches || []).join(' '),
    (u.brandDetails?.desiredInfluencerNiches || []).join(' '),
    (u.brandDetails?.productTypes || []).join(' '),
    u.brandDetails?.country,
    u.brandDetails?.state,
    (u.creatorDetails?.niches || []).join(' '),
    (u.creatorDetails?.contentLanguages || []).join(' '),
    u.creatorDetails?.country,
    u.creatorDetails?.state,
    (m.breakdown?.reasons || []).join(' ')
  ];
  return parts.filter(Boolean).join(' ').toLowerCase();
};

const MatchSection = ({ matches, loading, emptyHint }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const list = matches || [];
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter(m => matchHaystack(m).includes(q));
  }, [matches, query]);

  if (loading) return <div className="match-loading">Computing matches…</div>;

  const total = (matches || []).length;
  const showFilter = total > 1;
  const strong = filtered.filter(m => m.tier === 'strong');
  const consider = filtered.filter(m => m.tier === 'consider');

  if (total === 0) {
    return (
      <div className="match-empty">
        <p>{emptyHint || 'No matches yet — completing your profile and adding more detail will surface better suggestions.'}</p>
      </div>
    );
  }

  return (
    <div className="match-section">
      {showFilter && (
        <div className="match-filter">
          <Search size={16} className="match-filter-icon" />
          <input
            type="text"
            className="match-filter-input"
            placeholder="Filter matches by name, niche, country…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button type="button" className="match-filter-clear" onClick={() => setQuery('')} aria-label="Clear">
              <X size={14} />
            </button>
          )}
          <span className="match-filter-count">{filtered.length} of {total}</span>
        </div>
      )}

      {strong.length === 0 && consider.length === 0 ? (
        <div className="match-empty"><p>No matches found for "{query}". Try a different search term.</p></div>
      ) : (
        <>
          <Group icon={Sparkles} title="Strong matches" accent="strong" matches={strong} />
          <Group icon={Users} title="Worth considering" accent="consider" matches={consider} />
        </>
      )}
    </div>
  );
};

export default MatchSection;
