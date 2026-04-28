import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Pencil, Mail, MapPin, Phone, Calendar, ExternalLink, ArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify';
import API_BASE_URL from '../../config/api';
import ProfileCompletionModal from './ProfileCompletionModal';
import MatchSection from '../match/MatchSection';
import { usePageMeta } from '../../usePageMeta';
import './ProfilePage.css';

const Tag = ({ children }) => <span className="prof-tag">{children}</span>;

const Section = ({ title, children, empty = 'Not set' }) => {
  const isEmpty = !children || (Array.isArray(children) && children.length === 0);
  return (
    <section className="prof-section">
      <h3>{title}</h3>
      {isEmpty ? <p className="prof-muted">{empty}</p> : <div className="prof-section-body">{children}</div>}
    </section>
  );
};

const Field = ({ label, value }) => (
  <div className="prof-field">
    <span className="prof-field-label">{label}</span>
    <span className="prof-field-value">{value || <span className="prof-muted">—</span>}</span>
  </div>
);

const formatRange = (range, currency = 'USD') => {
  if (!range || (range.min == null && range.max == null)) return null;
  const sym = currency === 'USD' ? '$' : `${currency} `;
  if (range.min != null && range.max != null) return `${sym}${range.min.toLocaleString()} – ${sym}${range.max.toLocaleString()}`;
  if (range.min != null) return `From ${sym}${range.min.toLocaleString()}`;
  return `Up to ${sym}${range.max.toLocaleString()}`;
};

const CreatorProfile = ({ user }) => {
  const c = user.creatorDetails || {};
  const niches = (c.niches && c.niches.length) ? c.niches : (c.niche ? [c.niche] : []);
  const languages = (c.contentLanguages && c.contentLanguages.length) ? c.contentLanguages : (c.contentLanguage ? [c.contentLanguage] : []);
  const platforms = (c.platforms && c.platforms.length) ? c.platforms : (c.platform ? [{ name: c.platform, followers: c.followers || 0, profileLink: c.profileLink || '' }] : []);

  return (
    <>
      <Section title="Basics">
        <Field label="Age" value={c.age != null ? c.age : null} />
        <Field label="Gender" value={c.gender} />
        <Field label="Phone" value={c.phone && (c.phone.countryCode || c.phone.number) ? `${c.phone.countryCode || ''} ${c.phone.number || ''}`.trim() : null} />
        <Field label="Country" value={c.country} />
        <Field label="State" value={c.state} />
      </Section>

      <Section title="Niches" empty="No niches set yet.">
        {niches.map(n => <Tag key={n}>{n}</Tag>)}
      </Section>

      <Section title="Content Languages" empty="No languages set yet.">
        {languages.map(l => <Tag key={l}>{l}</Tag>)}
      </Section>

      <Section title="Platforms" empty="No platforms set yet.">
        <table className="prof-table">
          <thead><tr><th>Platform</th><th>Followers</th><th>Profile</th></tr></thead>
          <tbody>
            {platforms.map((p, i) => (
              <tr key={i}>
                <td>{p.name}</td>
                <td>{p.followers?.toLocaleString?.() ?? p.followers}</td>
                <td>{p.profileLink ? <a href={p.profileLink} target="_blank" rel="noreferrer">View <ExternalLink size={12} /></a> : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="Rates">
        <Field label="Rate Range" value={formatRange(c.rateRange, c.rateRange?.currency)} />
        <Field label="Open to Negotiation" value={c.rateRange?.openToNegotiation ? 'Yes' : 'No'} />
        <Field label="Average Engagement Rate" value={c.averageEngagementRate != null ? `${c.averageEngagementRate}%` : null} />
      </Section>

      <Section title="Audience Demographics">
        <Field label="Top Countries" value={(c.audienceDemographics?.topCountries || []).join(', ') || null} />
        {c.audienceDemographics?.ageSplit && (
          <Field
            label="Age Split"
            value={Object.entries(c.audienceDemographics.ageSplit)
              .filter(([, v]) => v != null && v !== '')
              .map(([k, v]) => `${k}: ${v}%`).join(' · ') || null}
          />
        )}
        {c.audienceDemographics?.genderSplit && (
          <Field
            label="Gender Split"
            value={Object.entries(c.audienceDemographics.genderSplit)
              .filter(([, v]) => v != null && v !== '')
              .map(([k, v]) => `${k}: ${v}%`).join(' · ') || null}
          />
        )}
      </Section>

      <Section title="Partnerships & Preferences">
        <Field label="Open to Paid Partnerships" value={c.openToPaidPartnerships ? 'Yes' : 'No'} />
        <Field label="Exclusivity Status" value={c.exclusivityStatus} />
        <Field label="Payment Method" value={c.paymentMethodPreference} />
        <Field label="Media Kit / Portfolio" value={c.mediaKitUrl ? <a href={c.mediaKitUrl} target="_blank" rel="noreferrer">{c.mediaKitUrl}</a> : null} />
        <Field label="Heard About Us From" value={c.howHeardAboutUs} />
        <Field label="Marketing Opt-in" value={c.marketingOptIn ? 'Yes' : 'No'} />
      </Section>
    </>
  );
};

const BrandProfile = ({ user }) => {
  const b = user.brandDetails || {};
  const desired = (b.desiredInfluencerNiches && b.desiredInfluencerNiches.length) ? b.desiredInfluencerNiches : (b.desiredInfluencerNiche ? [b.desiredInfluencerNiche] : []);
  const brandNiches = (b.niches && b.niches.length) ? b.niches : (b.niche ? [b.niche] : []);

  return (
    <>
      <Section title="Basics">
        <Field label="Industry / Vertical" value={b.industry} />
        <Field label="Country" value={b.country} />
        <Field label="State" value={b.state} />
      </Section>

      <Section title="Product Categories" empty="No categories set yet.">
        {(b.productTypes || []).map(t => <Tag key={t}>{t}</Tag>)}
      </Section>

      <Section title="Brand Niches" empty="No niches set yet.">
        {brandNiches.map(t => <Tag key={t}>{t}</Tag>)}
      </Section>

      <Section title="Looking for Influencers In" empty="No influencer niches set yet.">
        {desired.map(t => <Tag key={t}>{t}</Tag>)}
      </Section>

      <Section title="Campaign Setup">
        <Field label="Budget Range per Campaign" value={formatRange(b.budgetRangePerCampaign, b.budgetRangePerCampaign?.currency)} />
        <Field label="Campaign Goals" value={(b.campaignGoals || []).join(', ') || null} />
        <Field label="Preferred Creator Tiers" value={(b.preferredCreatorTiers || []).join(', ') || null} />
        <Field label="Preferred Content Formats" value={(b.preferredContentFormats || []).join(', ') || null} />
      </Section>

      <Section title="Target Audience">
        <Field
          label="Age Range"
          value={(b.targetAudience?.ageMin != null || b.targetAudience?.ageMax != null)
            ? `${b.targetAudience.ageMin ?? '—'} – ${b.targetAudience.ageMax ?? '—'}`
            : null}
        />
        <Field label="Genders" value={(b.targetAudience?.genders || []).join(', ') || null} />
        <Field label="Geographies" value={(b.targetAudience?.geos || []).join(', ') || null} />
      </Section>
    </>
  );
};

const ProfilePage = () => {
  const { userId } = useParams();
  const isViewingOther = Boolean(userId);

  usePageMeta(
    isViewingOther ? 'Profile | SocialMelo' : 'My Profile | SocialMelo',
    'Manage your SocialMelo profile.'
  );

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editOpen, setEditOpen] = useState(false);
  const [matches, setMatches] = useState([]);
  const [matchesLoading, setMatchesLoading] = useState(false);

  const loadProfile = useCallback(async () => {
    setLoading(true);
    try {
      const url = isViewingOther
        ? `${API_BASE_URL}/api/profile/${userId}`
        : `${API_BASE_URL}/api/profile/me`;
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token') || ''}` }
      });
      if (res.status === 401) {
        navigate('/login');
        return;
      }
      const data = await res.json();
      if (data.success) {
        setUser(data.user);
        if (!isViewingOther) localStorage.setItem('user', JSON.stringify(data.user));
      } else {
        toast.error(data.message || 'Failed to load profile');
      }
    } catch (err) {
      console.error('Profile load error:', err);
      toast.error('Network error loading profile');
    } finally {
      setLoading(false);
    }
  }, [navigate, userId, isViewingOther]);

  useEffect(() => { loadProfile(); }, [loadProfile]);

  const loadMatches = useCallback(async () => {
    setMatchesLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/match/for-me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token') || ''}` }
      });
      const data = await res.json();
      if (data.success) setMatches(data.matches || []);
    } catch (err) {
      console.error('Match load error:', err);
    } finally {
      setMatchesLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!user || isViewingOther) return;
    if (user.userType !== 'Join as Brand' && user.userType !== 'Join as Creator') return;
    loadMatches();
  }, [user, loadMatches, isViewingOther]);

  if (loading) return <div className="prof-loading">Loading profile…</div>;
  if (!user) return null;

  const isBrand = user.userType === 'Join as Brand';
  const isCreator = user.userType === 'Join as Creator';
  const memberSince = user.createdAt ? new Date(user.createdAt).toLocaleDateString() : null;

  return (
    <div className="prof-page">
      {isViewingOther && (
        <button className="prof-back" onClick={() => navigate(-1)}>
          <ArrowLeft size={14} /> Back
        </button>
      )}
      <div className="prof-header">
        <div className="prof-avatar">{user.name?.[0]?.toUpperCase() || '?'}</div>
        <div className="prof-header-info">
          <h1>{user.name}</h1>
          <div className="prof-header-meta">
            <span className={`prof-role-badge prof-role-${user.userType.replace(/\s+/g, '-').toLowerCase()}`}>
              {isBrand ? 'Brand' : isCreator ? 'Creator' : user.userType}
            </span>
            <span><Mail size={14} /> {user.email}</span>
            {memberSince && <span><Calendar size={14} /> Joined {memberSince}</span>}
            {!isViewingOther && (user.brandDetails?.location || user.creatorDetails?.location) && (
              <span><MapPin size={14} /> {user.brandDetails?.location || user.creatorDetails?.location}</span>
            )}
            {!isViewingOther && isCreator && user.creatorDetails?.phone?.number && (
              <span><Phone size={14} /> {user.creatorDetails.phone.countryCode} {user.creatorDetails.phone.number}</span>
            )}
            {(isBrand || isCreator) && (user.brandDetails?.country || user.creatorDetails?.country) && (
              <span><MapPin size={14} /> {user.brandDetails?.country || user.creatorDetails?.country}</span>
            )}
          </div>
        </div>
        {!isViewingOther && (isBrand || isCreator) && (
          <button className="prof-edit-btn" onClick={() => setEditOpen(true)}>
            <Pencil size={14} /> Edit Profile
          </button>
        )}
      </div>

      <div className="prof-body">
        {isBrand && <BrandProfile user={user} />}
        {isCreator && <CreatorProfile user={user} />}
        {!isBrand && !isCreator && (
          <p className="prof-muted">No profile fields available for this account type.</p>
        )}
      </div>

      {!isViewingOther && (isBrand || isCreator) && (
        <div className="prof-matches">
          <h2 className="prof-matches-title">{isBrand ? 'Top Creators for You' : 'Brand Opportunities'}</h2>
          <MatchSection
            matches={matches}
            loading={matchesLoading}
            emptyHint={
              user.brandDetails?.profileCompleted || user.creatorDetails?.profileCompleted
                ? 'No matching profiles yet — as more users complete their profiles, suggestions will appear here.'
                : 'Complete your profile to start receiving matched suggestions.'
            }
          />
        </div>
      )}

      <ProfileCompletionModal
        open={editOpen}
        userType={user.userType}
        prefill={user}
        onClose={() => setEditOpen(false)}
        onCompleted={(updated) => {
          setEditOpen(false);
          if (updated) setUser(updated);
        }}
      />
    </div>
  );
};

export default ProfilePage;
