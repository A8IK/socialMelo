import React, { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'react-toastify';
import API_BASE_URL from '../../config/api';
import './ProfileCompletionModal.css';

const CAMPAIGN_GOALS = ['Brand Awareness', 'Conversions', 'User-Generated Content', 'App Installs', 'Lead Generation', 'Engagement'];
const CREATOR_TIERS = ['Nano (1K-10K)', 'Micro (10K-100K)', 'Macro (100K-1M)', 'Mega (1M+)'];
const CONTENT_FORMATS = ['Reels', 'Shorts', 'Static Posts', 'Stories', 'Livestream', 'Long-form Video', 'Podcasts'];
const GENDER_TARGETS = ['Male', 'Female', 'Non-binary', 'All'];
const EXCLUSIVITY_OPTIONS = ['Open to all', 'Currently exclusive with brand', 'Niche-exclusive only'];
const PAYMENT_METHODS = ['Bank Transfer', 'PayPal', 'Wise', 'Stripe', 'Crypto'];
const HEARD_ABOUT_OPTIONS = ['Google Search', 'Social Media', 'Friend / Word of Mouth', 'Industry Event', 'Newsletter', 'Other'];

const InputRow = ({ label, children, hint }) => (
  <div className="pcm-row">
    <label className="pcm-label">{label}</label>
    {children}
    {hint && <p className="pcm-hint">{hint}</p>}
  </div>
);

const ChipMulti = ({ options, value, onChange }) => (
  <div className="pcm-chips">
    {options.map(opt => {
      const checked = value.includes(opt);
      return (
        <label key={opt} className={`pcm-chip ${checked ? 'pcm-chip-active' : ''}`}>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => onChange(checked ? value.filter(v => v !== opt) : [...value, opt])}
          />
          <span>{opt}</span>
        </label>
      );
    })}
  </div>
);

const BrandFields = ({ data, set }) => (
  <>
    <InputRow label="Industry / Vertical">
      <input
        className="pcm-input"
        value={data.industry}
        onChange={(e) => set({ industry: e.target.value })}
        placeholder="e.g. SaaS, Fashion, FinTech"
      />
    </InputRow>

    <InputRow label="Budget Range per Campaign (USD)">
      <div className="pcm-range">
        <input
          type="number" min="0" className="pcm-input"
          placeholder="Min"
          value={data.budgetRangePerCampaign.min}
          onChange={(e) => set({ budgetRangePerCampaign: { ...data.budgetRangePerCampaign, min: e.target.value } })}
        />
        <span className="pcm-dash">—</span>
        <input
          type="number" min="0" className="pcm-input"
          placeholder="Max"
          value={data.budgetRangePerCampaign.max}
          onChange={(e) => set({ budgetRangePerCampaign: { ...data.budgetRangePerCampaign, max: e.target.value } })}
        />
      </div>
    </InputRow>

    <InputRow label="Campaign Goals" hint="Select all that apply.">
      <ChipMulti
        options={CAMPAIGN_GOALS}
        value={data.campaignGoals}
        onChange={(v) => set({ campaignGoals: v })}
      />
    </InputRow>

    <InputRow label="Target Audience — Age Range">
      <div className="pcm-range">
        <input
          type="number" min="0" max="120" className="pcm-input"
          placeholder="Min"
          value={data.targetAudience.ageMin}
          onChange={(e) => set({ targetAudience: { ...data.targetAudience, ageMin: e.target.value } })}
        />
        <span className="pcm-dash">—</span>
        <input
          type="number" min="0" max="120" className="pcm-input"
          placeholder="Max"
          value={data.targetAudience.ageMax}
          onChange={(e) => set({ targetAudience: { ...data.targetAudience, ageMax: e.target.value } })}
        />
      </div>
    </InputRow>

    <InputRow label="Target Audience — Gender">
      <ChipMulti
        options={GENDER_TARGETS}
        value={data.targetAudience.genders}
        onChange={(v) => set({ targetAudience: { ...data.targetAudience, genders: v } })}
      />
    </InputRow>

    <InputRow label="Target Audience — Geographies" hint="Comma-separated countries or regions.">
      <input
        className="pcm-input"
        value={data.targetAudience.geosText}
        onChange={(e) => set({ targetAudience: { ...data.targetAudience, geosText: e.target.value } })}
        placeholder="e.g. United States, India, UK"
      />
    </InputRow>

    <InputRow label="Preferred Creator Tiers">
      <ChipMulti
        options={CREATOR_TIERS}
        value={data.preferredCreatorTiers}
        onChange={(v) => set({ preferredCreatorTiers: v })}
      />
    </InputRow>

    <InputRow label="Preferred Content Formats">
      <ChipMulti
        options={CONTENT_FORMATS}
        value={data.preferredContentFormats}
        onChange={(v) => set({ preferredContentFormats: v })}
      />
    </InputRow>
  </>
);

const CreatorFields = ({ data, set }) => (
  <>
    <InputRow label="Rate Range per Post / Video (USD)">
      <div className="pcm-range">
        <input
          type="number" min="0" className="pcm-input"
          placeholder="Min"
          value={data.rateRange.min}
          onChange={(e) => set({ rateRange: { ...data.rateRange, min: e.target.value } })}
        />
        <span className="pcm-dash">—</span>
        <input
          type="number" min="0" className="pcm-input"
          placeholder="Max"
          value={data.rateRange.max}
          onChange={(e) => set({ rateRange: { ...data.rateRange, max: e.target.value } })}
        />
      </div>
      <label className="pcm-checkbox">
        <input
          type="checkbox"
          checked={data.rateRange.openToNegotiation}
          onChange={(e) => set({ rateRange: { ...data.rateRange, openToNegotiation: e.target.checked } })}
        />
        <span>Open to negotiation</span>
      </label>
    </InputRow>

    <InputRow label="Audience — Top Countries" hint="Comma-separated, in order of audience share.">
      <input
        className="pcm-input"
        value={data.audienceDemographics.topCountriesText}
        onChange={(e) => set({ audienceDemographics: { ...data.audienceDemographics, topCountriesText: e.target.value } })}
        placeholder="e.g. United States, India, UK"
      />
    </InputRow>

    <InputRow label="Audience Age Split (%)" hint="Approximate percentages — they don't need to sum to exactly 100.">
      <div className="pcm-grid-5">
        {['13-17', '18-24', '25-34', '35-44', '45+'].map(bucket => (
          <div key={bucket} className="pcm-grid-cell">
            <span className="pcm-grid-label">{bucket}</span>
            <input
              type="number" min="0" max="100" className="pcm-input"
              value={data.audienceDemographics.ageSplit[bucket]}
              onChange={(e) => set({
                audienceDemographics: {
                  ...data.audienceDemographics,
                  ageSplit: { ...data.audienceDemographics.ageSplit, [bucket]: e.target.value }
                }
              })}
            />
          </div>
        ))}
      </div>
    </InputRow>

    <InputRow label="Audience Gender Split (%)">
      <div className="pcm-grid-3">
        {['male', 'female', 'other'].map(g => (
          <div key={g} className="pcm-grid-cell">
            <span className="pcm-grid-label">{g[0].toUpperCase() + g.slice(1)}</span>
            <input
              type="number" min="0" max="100" className="pcm-input"
              value={data.audienceDemographics.genderSplit[g]}
              onChange={(e) => set({
                audienceDemographics: {
                  ...data.audienceDemographics,
                  genderSplit: { ...data.audienceDemographics.genderSplit, [g]: e.target.value }
                }
              })}
            />
          </div>
        ))}
      </div>
    </InputRow>

    <InputRow label="Average Engagement Rate (%)">
      <input
        type="number" min="0" max="100" step="0.1" className="pcm-input"
        value={data.averageEngagementRate}
        onChange={(e) => set({ averageEngagementRate: e.target.value })}
        placeholder="e.g. 4.2"
      />
    </InputRow>

    <InputRow label="Media Kit / Portfolio URL">
      <input
        type="url" className="pcm-input"
        value={data.mediaKitUrl}
        onChange={(e) => set({ mediaKitUrl: e.target.value })}
        placeholder="https://..."
      />
    </InputRow>

    <InputRow label="Available for Paid Partnerships">
      <label className="pcm-checkbox">
        <input
          type="checkbox"
          checked={data.openToPaidPartnerships}
          onChange={(e) => set({ openToPaidPartnerships: e.target.checked })}
        />
        <span>Yes, open to paid brand partnerships</span>
      </label>
    </InputRow>

    <InputRow label="Exclusivity Status">
      <select
        className="pcm-input"
        value={data.exclusivityStatus}
        onChange={(e) => set({ exclusivityStatus: e.target.value })}
      >
        <option value="">Select…</option>
        {EXCLUSIVITY_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </InputRow>

    <InputRow label="Payment Method Preference">
      <select
        className="pcm-input"
        value={data.paymentMethodPreference}
        onChange={(e) => set({ paymentMethodPreference: e.target.value })}
      >
        <option value="">Select…</option>
        {PAYMENT_METHODS.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <p className="pcm-hint">Tax form will be requested only when your first payout is triggered.</p>
    </InputRow>

    <InputRow label="How did you hear about us?">
      <select
        className="pcm-input"
        value={data.howHeardAboutUs}
        onChange={(e) => set({ howHeardAboutUs: e.target.value })}
      >
        <option value="">Select…</option>
        {HEARD_ABOUT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </InputRow>

    <InputRow label="Marketing">
      <label className="pcm-checkbox">
        <input
          type="checkbox"
          checked={data.marketingOptIn}
          onChange={(e) => set({ marketingOptIn: e.target.checked })}
        />
        <span>I'd like to receive product updates and partnership tips by email.</span>
      </label>
    </InputRow>
  </>
);

const parseCsv = (s) => (typeof s === 'string' ? s.split(',').map(x => x.trim()).filter(Boolean) : []);

const initialBrand = () => ({
  industry: '',
  budgetRangePerCampaign: { min: '', max: '', currency: 'USD' },
  campaignGoals: [],
  targetAudience: { ageMin: '', ageMax: '', genders: [], geosText: '' },
  preferredCreatorTiers: [],
  preferredContentFormats: []
});

const initialCreator = () => ({
  rateRange: { min: '', max: '', currency: 'USD', openToNegotiation: false },
  audienceDemographics: {
    topCountriesText: '',
    ageSplit: { '13-17': '', '18-24': '', '25-34': '', '35-44': '', '45+': '' },
    genderSplit: { male: '', female: '', other: '' }
  },
  openToPaidPartnerships: false,
  mediaKitUrl: '',
  averageEngagementRate: '',
  exclusivityStatus: '',
  paymentMethodPreference: '',
  howHeardAboutUs: '',
  marketingOptIn: false
});

const ProfileCompletionModal = ({ open, userType, onClose, onCompleted, prefill }) => {
  const isBrand = userType === 'Join as Brand';
  const isCreator = userType === 'Join as Creator';

  const [brandData, setBrandData] = useState(() => {
    const b = prefill?.brandDetails || {};
    const base = initialBrand();
    return {
      ...base,
      ...b,
      targetAudience: {
        ...base.targetAudience,
        ...(b.targetAudience || {}),
        geosText: ((b.targetAudience?.geos) || []).join(', ')
      }
    };
  });
  const [creatorData, setCreatorData] = useState(() => {
    const c = prefill?.creatorDetails || {};
    const base = initialCreator();
    return {
      ...base,
      ...c,
      audienceDemographics: {
        ...base.audienceDemographics,
        ...(c.audienceDemographics || {}),
        topCountriesText: ((c.audienceDemographics?.topCountries) || []).join(', ')
      }
    };
  });
  const [saving, setSaving] = useState(false);

  if (!open) return null;
  if (!isBrand && !isCreator) return null;

  const setBrand = (patch) => setBrandData(prev => ({ ...prev, ...patch }));
  const setCreator = (patch) => setCreatorData(prev => ({ ...prev, ...patch }));

  const handleSave = async () => {
    setSaving(true);
    try {
      let body;
      if (isBrand) {
        const { geosText, ...restAudience } = brandData.targetAudience || {};
        body = {
          brandDetails: {
            ...brandData,
            targetAudience: { ...restAudience, geos: parseCsv(geosText) }
          }
        };
      } else {
        const { topCountriesText, ...restDemo } = creatorData.audienceDemographics || {};
        body = {
          creatorDetails: {
            ...creatorData,
            audienceDemographics: { ...restDemo, topCountries: parseCsv(topCountriesText) }
          }
        };
      }
      const res = await fetch(`${API_BASE_URL}/api/profile/complete`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token') || ''}`
        },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        toast.error(data.message || 'Failed to save profile');
        return;
      }
      toast.success('Profile saved!');
      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
        window.dispatchEvent(new Event('authChange'));
      }
      onCompleted?.(data.user);
    } catch (err) {
      console.error('Profile save error:', err);
      toast.error('Network error while saving profile');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="pcm-backdrop" onClick={onClose}>
      <div className="pcm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="pcm-header">
          <div>
            <h2>Complete your {isBrand ? 'Brand' : 'Creator'} profile</h2>
            <p>Helps us match you with better {isBrand ? 'creators' : 'brand opportunities'}. You can do this later from your profile page.</p>
          </div>
          <button className="pcm-close" onClick={onClose} aria-label="Close"><X size={18} /></button>
        </div>

        <div className="pcm-body">
          {isBrand && <BrandFields data={brandData} set={setBrand} />}
          {isCreator && <CreatorFields data={creatorData} set={setCreator} />}
        </div>

        <div className="pcm-footer">
          <button className="pcm-btn pcm-btn-ghost" onClick={onClose} disabled={saving}>Skip for now</button>
          <button className="pcm-btn pcm-btn-primary" onClick={handleSave} disabled={saving}>
            {saving ? 'Saving…' : 'Save profile'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletionModal;
