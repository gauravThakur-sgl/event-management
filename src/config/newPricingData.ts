export const netflixPricingIndia = [
  {
    planName: "Mobile",
    price: 149, // Price in INR
    videoQuality: "Fair",
    resolution: "480p",
    supportedDevices: ["Mobile phone", "Tablet"],
    simultaneousStreams: 1,
    downloadDevices: 1,
  },
  {
    planName: "Basic",
    price: 199, // Price in INR
    videoQuality: "Good",
    resolution: "720p (HD)",
    supportedDevices: ["TV", "Computer", "Mobile phone", "Tablet"],
    simultaneousStreams: 1,
    downloadDevices: 1,
  },
  {
    planName: "Standard",
    price: 499, // Price in INR
    videoQuality: "Great",
    resolution: "1080p (Full HD)",
    supportedDevices: ["TV", "Computer", "Mobile phone", "Tablet"],
    simultaneousStreams: 2,
    downloadDevices: 2,
  },
  {
    planName: "Premium",
    price: 649, // Price in INR
    videoQuality: "Best",
    resolution: "4K (Ultra HD) + HDR",
    spatialAudio: true, // Indicates spatial audio is included
    supportedDevices: ["TV", "Computer", "Mobile phone", "Tablet"],
    simultaneousStreams: 4,
    downloadDevices: 6,
  },
];

export const eventManagementPricing = [
  {
    planName: "Basic",
    price: 299, // Price in INR
    features: [
      "Access to basic event management tools",
      "Up to 50 attendees per event",
      "Email support",
      "Basic analytics",
    ],
    supportedDevices: ["Web", "Mobile"],
    simultaneousEvents: 1,
    downloadReports: false,
  },
  {
    planName: "Popular",
    price: 599, // Price in INR
    features: [
      "Access to all event management tools",
      "Up to 200 attendees per event",
      "Priority email support",
      "Advanced analytics",
      
    ],
    supportedDevices: ["Web", "Mobile"],
    simultaneousEvents: 3,
    downloadReports: true,
  },
  {
    planName: "Premium",
    price: 999, // Price in INR
    features: [
      "Access to all event management tools",
      "Unlimited attendees per event",
      "24/7 phone and email support",
      "Advanced analytics and reporting",
      "Custom branding",
    ],
    supportedDevices: ["Web", "Mobile"],
    simultaneousEvents: 10,
    downloadReports: true,
  },
  {
    planName: "Enterprise",
    price: 1999, // Price in INR
    features: [
      "All Premium features",
      "Unlimited events and attendees",
      "Custom integrations",
      "On-site support",
      "Custom analytics and reporting",
      "Dedicated account manager",
    ],
    supportedDevices: ["Web", "Mobile"],
    simultaneousEvents: "Unlimited",
    downloadReports: true,
  },
];
