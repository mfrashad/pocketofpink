// Centralized image configuration for Pocket of Pink website
// Update URLs in this file to change images throughout the entire website

export const IMAGES = {
  // Logo
  logo: {
    main: "images/logo.png", // Square logo for header
    icon: "images/logo.png"  // Small icon version
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
    creativeEmpowerment: "images/expresstoempower-2.jpg",
    accessibleEducation: "images/workshop2.jpg",
    challengeNorms: "images/workshop3.jpg",
    advocacyCSE: "images/workshop4.jpg",
    visionBackground: "images/workshop5.jpg",
    visionChildren: "images/workshop1.jpg"
  },

  // Activities Section
  activities: {
    schoolWorkshops: "./images/workshop1.jpg",
    communityEvents: "images/workshop2.jpg",
    advocacyCampaigns: "images/workshop3.jpg",
    workshopShowcase: "images/workshop4.jpg",
    futurePlans: "images/workshop5.jpg"
  },

  // Team Section
  team: {
    ainHusniza: "images/team/ain.jpg",
    iqsaAqilah: "images/team/iqsa.jpg",
    adeliaKhalid: "images/team/adelia.jpg",
    damiaNourrysFaris: "images/team/nourrys.jpg",
    kaveeshaThamilarasu: "images/team/kaveen.jpg",
    karyn: "images/team/karyn.jpg",
    teamCollaboration: "https://images.squarespace-cdn.com/content/6720a89eceb09d1b4180431a/5f112a05-416d-4689-afe6-cd670c6e20eb/website+work+2.png?content-type=image%2Fpng"
  },

  // Projects Section
  projects: {
    expressToEmpowerBook: "https://images.squarespace-cdn.com/content/6720a89eceb09d1b4180431a/e8719adb-8346-4358-85ab-4bb2d0efeabe/Cover.png?content-type=image%2Fpng",
    altorithm: "images/altorithm.png",
    expressToEmpower: "images/expresstoempower-1.jpg"
  },

  expressToEmpower: {
    ourResponse: "images/workshop5.jpg",
    // Photos for the "Case in Point" section (Sri KDU workshop)
    caseInPoint: [
      "images/srikdu.jpg",
      "images/srikdu-2.jpg",
      "images/srikdu-3.jpg",
    ],
    // Visual for "Why Art? Why Now?"
    whyArt: "images/expresstoempower-3.jpg",
    // Visuals for "How It Works"
    howItWorks: {
      teachersWorkshop: "images/workshop6.jpg",
      pocketPalHome: "images/expresstoempower-2.jpg",
    },
  },

  // Get Involved Section
  getInvolved: {
    writers: "images/workshop1.jpg",
    illustrators: "images/workshop2.jpg",
    videographers: "images/workshop3.jpg",
    advocacyCampaigners: "images/workshop4.jpg",
    joinTeam: "https://images.squarespace-cdn.com/content/6720a89eceb09d1b4180431a/5f112a05-416d-4689-afe6-cd670c6e20eb/website+work+2.png?content-type=image%2Fpng",
    callToActionBackground: "images/workshop1.jpg"
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