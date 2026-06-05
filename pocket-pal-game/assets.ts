
interface ImageAsset {
  src: string;
  alt: string;
  sizeClasses?: string;
  marginClasses?: string;
}

export const IMAGES: Record<string, ImageAsset> = {
  // Main Menu
  titleCard: { src: 'https://i.imgur.com/klZYunH.png', alt: 'Express to Empower title card', sizeClasses: 'mx-auto w-full', marginClasses: 'mt-12' },

  // Chapter 1
  bodyOutline: { src: 'https://i.imgur.com/7QBMamc.png', alt: 'Simple body outline for drawing activities' },

  // Chapter 2
  bodyPart: { src: 'https://i.imgur.com/GHLV0U3.png', alt: 'Diagram of body parts for connect-the-dots game', sizeClasses: 'w-[220px] md:w-[384px]'},
  facePart: { src: 'https://i.imgur.com/Q2UDSJs.png', alt: 'Diagram of face parts for connect-the-dots game', sizeClasses: 'w-[220px] md:w-[384px]' },
  hurt: { src: 'https://i.imgur.com/esdiMPJ.png', alt: 'Child with a bandage', sizeClasses: 'w-1/2 max-w-[150px]' },
  sick: { src: 'https://i.imgur.com/jrYbcNo.png', alt: 'Child looking sick', sizeClasses: 'w-1/2 max-w-[150px]' },
  bodyHair: { src: 'https://i.imgur.com/Jp8oyIa.png', alt: 'Illustration about puberty changes', sizeClasses: 'max-w-xs w-full' },
  puberty: { src: 'https://i.imgur.com/IAl7h99.png', alt: 'Illustration about puberty' },
  quizFever: { src: 'https://i.imgur.com/KQ6S5k2.png', alt: 'Child touching forehead, feeling sick' },
  quizKnee: { src: 'https://i.imgur.com/mXJuhEL.png', alt: 'Child with a scraped knee' },
  quizSafety: { src: 'https://i.imgur.com/nukstuo.png', alt: 'Illustration about personal boundaries' },
  pubertyHairGrowth: { src: 'https://i.imgur.com/5xeK0JF.png', alt: 'Illustration showing where hair grows during puberty' },

  // Chapter 3
  consentBoy: { src: 'https://i.imgur.com/uX4IRNT.png', alt: 'A boy crossing his arms to signal a boundary.' },
  consentGirl: { src: 'https://i.imgur.com/6BLpLg1.png', alt: 'A girl crossing her arms to signal a boundary.' },
  relationshipWebGame: { src: 'https://i.imgur.com/gKz5Z2m.png', alt: 'Relationship Web game background' },

  // Chapter 6
  coloringPage: { src: '/assets/coloring-page.png', alt: 'A complex coloring page for the Express to Empower competition' },
};