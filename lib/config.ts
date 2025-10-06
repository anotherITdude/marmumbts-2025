// Campaign configuration
export const CAMPAIGN_CONFIG = {
  // Set to false to disable new entries
  ACTIVE: false,

  // Campaign end date for display purposes
  END_DATE: new Date("2025-01-31"),

  // Messages for when campaign is closed
  CLOSURE_MESSAGE: {
    en: "Thank you for your interest! The Marmum 2025 Back to School campaign has ended. Stay tuned for future campaigns!",
    ar: "شكراً لاهتمامكم! انتهت حملة مرموم 2025 للعودة إلى المدرسة. ترقبوا الحملات القادمة!",
  },
};

// Helper function to check if campaign is active
export const isCampaignActive = (): boolean => {
  return CAMPAIGN_CONFIG.ACTIVE && new Date() <= CAMPAIGN_CONFIG.END_DATE;
};
