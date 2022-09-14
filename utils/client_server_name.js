// from client native integration name to server identified display name
// add a mapping from Rudder identified key names to Rudder server recognizable names
const clientToServerNames = {
  All: 'All',
  GA: 'Google Analytics',
  GOOGLEADS: 'Google Ads',
  BRAZE: 'Braze',
  CHARTBEAT: 'Chartbeat',
  COMSCORE: 'Comscore',
  CUSTOMERIO: 'Customer IO',
  DCM_Floodlight: 'DCM Floodlight',
  FACEBOOK_PIXEL: 'Facebook Pixel',
  GTM: 'Google Tag Manager',
  HOTJAR: 'Hotjar',
  HS: 'HubSpot',
  INTERCOM: 'Intercom',
  KEEN: 'Keen',
  KISSMETRICS: 'Kiss Metrics',
  LOTAME: 'Lotame',
  VWO: 'VWO',
  OPTIMIZELY: 'Optimizely Web',
  FULLSTORY: 'Fullstory',
  TVSQUARED: 'TVSquared',
  GA4: 'Google Analytics 4',
  MOENGAGE: 'MoEngage',
  AM: 'Amplitude',
  PENDO: 'Pendo',
  LYTICS: 'Lytics',
  APPCUES: 'Appcues',
  POSTHOG: 'PostHog',
  PROFITWELL: 'ProfitWell',
  KLAVIYO: 'Klaviyo',
  CLEVERTAP: 'CleverTap',
  BINGADS: 'Bing Ads',
  PINTEREST_TAG: 'Pinterest Tag',
  SNAP_PIXEL: 'Snap Pixel',
  LINKEDIN_INSIGHT_TAG: 'Linkedin Insight Tag',
  REDDIT_PIXEL: 'Reddit Pixel',
  DRIP: 'Drip',
  HEAP: 'Heap.io',
  CRITEO: 'Criteo',
  MP: 'Mixpanel',
  QUALTRICS: 'Qualtrics',
  SENTRY: 'Sentry',
  GOOGLE_OPTIMIZE: 'Google Optimize',
  POST_AFFILIATE_PRO: 'Post Affiliate Pro',
  LAUNCHDARKLY: 'LaunchDarkly',
  GA360: 'Google Analytics 360',
  ADROLL: 'Adroll',
  VERO: 'Vero',
  MATOMO: 'Matomo',
  MOUSEFLOW: 'Mouseflow',
  ROCKERBOX: 'Rockerbox',
  CONVERTFLOW: 'ConvertFlow',
  SNAPENGAGE: 'SnapEngage',
  LIVECHAT: 'LiveChat',
  SHYNET: 'Shynet',
  QUORA_PIXEL: 'Quora Pixel',
};

export { clientToServerNames };
