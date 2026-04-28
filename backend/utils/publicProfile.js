/**
 * Strip sensitive fields from a user document before exposing it to anyone
 * other than the user themselves (or an admin).
 *
 * Hidden in public view:
 *   - password (already excluded by schema toJSON, but defensive)
 *   - ipAddress
 *   - creatorDetails.phone (private contact)
 *   - creatorDetails.paymentMethodPreference
 *   - creatorDetails.howHeardAboutUs
 *   - creatorDetails.marketingOptIn
 *   - brandDetails.location (IP-derived)
 *   - creatorDetails.location (IP-derived)
 */
function publicProfile(user) {
  if (!user) return null;
  const out = {
    _id: user._id,
    name: user.name,
    email: user.email,
    userType: user.userType,
    profilePicture: user.profilePicture || null,
    isVerified: !!user.isVerified,
    createdAt: user.createdAt
  };

  if (user.userType === 'Join as Brand' && user.brandDetails) {
    const b = user.brandDetails;
    out.brandDetails = {
      industry: b.industry || '',
      productTypes: b.productTypes || [],
      desiredInfluencerNiches: b.desiredInfluencerNiches || [],
      desiredInfluencerNiche: b.desiredInfluencerNiche || undefined,
      niches: b.niches || [],
      niche: b.niche || undefined,
      country: b.country || '',
      state: b.state || '',
      budgetRangePerCampaign: b.budgetRangePerCampaign,
      campaignGoals: b.campaignGoals || [],
      targetAudience: b.targetAudience,
      preferredCreatorTiers: b.preferredCreatorTiers || [],
      preferredContentFormats: b.preferredContentFormats || [],
      profileCompleted: !!b.profileCompleted
    };
  }

  if (user.userType === 'Join as Creator' && user.creatorDetails) {
    const c = user.creatorDetails;
    out.creatorDetails = {
      age: c.age,
      gender: c.gender || '',
      niches: c.niches || [],
      niche: c.niche || undefined,
      platforms: c.platforms || [],
      platform: c.platform || undefined,
      followers: c.followers,
      profileLink: c.profileLink || undefined,
      contentLanguages: c.contentLanguages || [],
      contentLanguage: c.contentLanguage || undefined,
      country: c.country || '',
      state: c.state || '',
      rateRange: c.rateRange,
      audienceDemographics: c.audienceDemographics,
      openToPaidPartnerships: !!c.openToPaidPartnerships,
      mediaKitUrl: c.mediaKitUrl || '',
      averageEngagementRate: c.averageEngagementRate,
      exclusivityStatus: c.exclusivityStatus || '',
      profileCompleted: !!c.profileCompleted
    };
  }

  return out;
}

module.exports = { publicProfile };
