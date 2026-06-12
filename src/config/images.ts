// Centralized image configuration for Pocket of Pink website
// Update URLs in this file to change images throughout the entire website

export const IMAGES = {
  // Hand-drawn POP illustrations (used in the 2026 redesign)
  illustration: {
    heroGroup: "images/illustrations/hero-group.webp",
    aboutBook: "images/illustrations/about-book.webp",
    pillarNow: "images/illustrations/pillar-now.webp",
    pillarEveryone: "images/illustrations/pillar-everyone.webp",
    pillarJoy: "images/illustrations/pillar-joy.webp",
    pillarCreativity: "images/illustrations/pillar-creativity.webp",
    pillarLive: "images/illustrations/pillar-live.webp",
    support: "images/illustrations/support.webp",
    media: "images/illustrations/media.webp",
    stickers: {
      feminismFits: "images/illustrations/stickers/feminism-fits.webp",
      popPatriarchy: "images/illustrations/stickers/pop-patriarchy.webp",
      futureEquality: "images/illustrations/stickers/future-equality.webp",
      justiceEquality: "images/illustrations/stickers/justice-equality.webp",
      pocketsEmpowerment: "images/illustrations/stickers/pockets-empowerment.webp",
      faceBun: "images/illustrations/stickers/face-bun.webp",
      faceBob: "images/illustrations/stickers/face-bob.webp",
    },
  },

  // Logo
  logo: {
    main: "images/poppocketofpower-transparent.webp", // Pocket of Pink / Pop of Power wordmark (transparent)
    heart: "images/pop-heart-mark.webp",              // Heart icon + POCKET OF PINK
    icon: "images/logo.webp"                          // Small square icon (favicon-style)
  },

  // Hero Section
  hero: {
    background: "https://images.squarespace-cdn.com/content/6720a89eceb09d1b4180431a/5f112a05-416d-4689-afe6-cd670c6e20eb/website+work+2.png?content-type=image%2Fpng"
  },

  // About Section
  about: {
    main: "https://www.sinarharian.com.my/uploads/images/2024/11/04/2873543.jpg"
  },

  // Mission & Vision Section
  mission: {
    creativeEmpowerment: "images/expresstoempower-2.webp",
    accessibleEducation: "images/workshop2.webp",
    challengeNorms: "images/workshop3.webp",
    advocacyCSE: "images/workshop4.webp",
    visionBackground: "images/workshop5.webp",
    visionChildren: "images/workshop1.webp"
  },

  // Activities Section
  activities: {
    schoolWorkshops: "./images/workshop1.webp",
    communityEvents: "images/workshop2.webp",
    advocacyCampaigns: "images/workshop3.webp",
    workshopShowcase: "images/workshop4.webp",
    futurePlans: "images/workshop5.webp"
  },

  // Team Section
  team: {
    ainHusniza: "images/team/ain.webp",
    iqsaAqilah: "images/team/iqsa.webp",
    adeliaKhalid: "images/team/adelia.webp",
    damiaNourrysFaris: "images/team/nourrys.webp",
    kaveeshaThamilarasu: "images/team/kaveen.webp",
    karyn: "images/team/karyn.webp",
    teamCollaboration: "https://images.squarespace-cdn.com/content/6720a89eceb09d1b4180431a/5f112a05-416d-4689-afe6-cd670c6e20eb/website+work+2.png?content-type=image%2Fpng"
  },

  // Projects Section
  projects: {
    expressToEmpowerBook: "https://images.squarespace-cdn.com/content/6720a89eceb09d1b4180431a/e8719adb-8346-4358-85ab-4bb2d0efeabe/Cover.png?content-type=image%2Fpng",
    altorithm: "images/altorithm.webp",
    expressToEmpower: "images/expresstoempower-1.webp"
  },

  expressToEmpower: {
    ourResponse: "images/workshop5.webp",
    // Photos for the "Case in Point" section (Sri KDU workshop)
    caseInPoint: [
      "images/srikdu.webp",
      "images/srikdu-2.webp",
      "images/srikdu-3.webp",
    ],
    // Visual for "Why Art? Why Now?"
    whyArt: "images/expresstoempower-3.webp",
    // Visuals for "How It Works"
    howItWorks: {
      teachersWorkshop: "images/workshop6.webp",
      pocketPalHome: "images/expresstoempower-2.webp",
    },
  },

  // Get Involved Section
  getInvolved: {
    writers: "images/workshop1.webp",
    illustrators: "images/workshop2.webp",
    videographers: "images/workshop3.webp",
    advocacyCampaigners: "images/workshop4.webp",
    joinTeam: "https://images.squarespace-cdn.com/content/6720a89eceb09d1b4180431a/5f112a05-416d-4689-afe6-cd670c6e20eb/website+work+2.png?content-type=image%2Fpng",
    callToActionBackground: "images/workshop1.webp"
  },

  // Video Section
  video: {
    // YouTube automatically generates thumbnails for videos
    // We can use the video ID to get the actual YouTube thumbnail
    getYoutubeThumbnail: (videoId: string) => `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }
} as const;

// YouTube Video Configuration
export const VIDEOS = {
  featured: {
    // Replace with your actual YouTube video ID (the part after v= in YouTube URL)
    youtubeId: "VbSmsDpB0nU", // Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ
    title: "Pocket of Pink: Empowering Youth Through Education",
    description: "Express to Empower : Bodies, Boundaries & Identity."
  }
} as const;

// Image descriptions for reference (not used in code, but helpful for replacement)
export const IMAGE_DESCRIPTIONS = {
  logo: {
    main: "Organization logo - main version for header and branding",
    icon: "Organization icon - small version for favicon and compact spaces"
  },
  hero: {
    background: "Children or young people in educational/learning environment - Hero section background overlay"
  },
  about: {
    main: "Young people learning and engaging in educational activities - About section main visual"
  },
  mission: {
    creativeEmpowerment: "Creative education and empowerment activities - Creative Empowerment mission card",
    accessibleEducation: "Accessible learning and educational resources - Accessible Education mission card",
    challengeNorms: "Youth challenging societal norms and advocating for change - Challenge Norms mission card",
    advocacyCSE: "Comprehensive sexuality education advocacy activities - Advocacy for CSE mission card",
    visionBackground: "Youth empowerment and education vision - Vision section background",
    visionChildren: "Children and young people in educational settings - Vision section feature image"
  },
  activities: {
    schoolWorkshops: "Interactive educational session with children - School workshops activity card",
    communityEvents: "Community gathering or festival setting - Community events activity card",
    advocacyCampaigns: "Youth advocacy or campaign activities - Advocacy campaigns activity card",
    workshopShowcase: "Children engaged in educational workshop activities - Interactive workshops section",
    futurePlans: "Future educational initiatives and community outreach - Future plans section"
  },
  team: {
    ainHusniza: "Professional headshot of young female leader - Founder profile photo",
    iqsaAqilah: "Professional photo of young team member - Educational outreach specialist",
    adeliaKhalid: "Professional photo of communications specialist - Digital advocacy team member",
    damiaNourrysFaris: "Professional photo of creative team member - Art and creative content developer",
    kaveeshaThamilarasu: "Professional photo of research specialist - Policy advocacy team member",
    teamCollaboration: "Team collaboration and youth empowerment - Team section call-to-action"
  },
  projects: {
    expressToEmpowerBook: "Express to Empower educational book and materials - Flagship project showcase",
    cartoonIllustrations: "Colorful cartoon illustrations for children's education - Why Cartoons section"
  },
  getInvolved: {
    writers: "Content creation and writing activities - Writers volunteer opportunity card",
    illustrators: "Art and illustration work - Illustrators volunteer opportunity card",
    videographers: "Video production and documentation - Videographers volunteer opportunity card",
    advocacyCampaigners: "Outreach and campaign activities - Advocacy campaigners volunteer opportunity card",
    joinTeam: "Team collaboration and youth empowerment activities - Join the team section",
    callToActionBackground: "Youth empowerment and community engagement - Final call-to-action background (20% opacity)"
  },
  video: {
    getYoutubeThumbnail: "Automatically fetched YouTube video thumbnail - Uses the actual video thumbnail from YouTube"
  }
} as const;