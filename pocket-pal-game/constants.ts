
import { type Chapter, type Badge } from './types';
import { IMAGES } from './assets';

export const PALETTE = {
  pink: '#F7A6C7',
  lavender: '#CBB6E0',
  mint: '#A7E3D8',
  yellow: '#FBE29F',
  dark: '#4a4a4a',
  light: '#fefefe'
};

export const CHAPTERS: Chapter[] = [
    {
      id: 'identity',
      title: 'WHO AM I?',
      subtitle: 'Introduction To Autonomy & Identity',
      emoji: '🌱',
      zone: 'Identity Grove',
      badge: 'Identity Explorer',
      color: '#F7A6C7',
      activities: [
        {
          type: 'text-input',
          title: 'Let\'s get to know you better!',
          prompt: 'Write down your name in the big box and four things about you.',
          fields: [
            { label: 'My name is...', key: 'name' },
            { label: 'I like to...', key: 'like' },
            { label: 'I love...', key: 'love' },
            { label: 'I hate...', key: 'hate' },
            { label: 'I am...', key: 'am' }
          ]
        },
        {
          type: 'drawing',
          title: 'Draw Yourself!',
          prompt: 'Draw yourself in the blank template. What are things that you are proud of, or different about yourself?',
          hasTemplate: true
        },
        {
          type: 'reflection',
          title: 'Think About It',
          prompt: 'Compare your list to your family and friends. Are the traits you put down exactly the same as others?',
          info: 'Notice how everybody looks different and has lists that aren\'t completely the same as yours? It\'s because everyone is unique! Everyone has something that makes them stand out, whether it\'s the way they think, the things they like, or how they look.',
          reflection: true
        }
      ]
    },
    {
      id: 'bodies',
      title: 'OUR BODIES: AUTONOMY AND CONSENT',
      emoji: '🛡️',
      zone: 'Boundary Bridge',
      badge: 'Body & Consent Learner',
      color: '#CBB6E0',
      activities: [
        {
          type: 'body-parts',
          title: 'Know Your Body',
          prompt: 'Just like the list you made about yourself, your body has many important parts that are unique to you and help you every day. From your head to your toes, each part of your body has a job to do, and it’s important to take care of it. Let’s look at body parts that are important for us to know!',
          sections: [
            {
              title: 'Body',
              imageKey: 'bodyPart',
              aspectRatio: 480 / 480,
              parts: [
                { name: 'Toes', coords: [10, 85] }, { name: 'Knees', coords: [17, 75] },
                { name: 'Abdomen', coords: [27, 57] }, { name: 'Chest', coords: [27, 47] },
                { name: 'Hands', coords: [8, 60] }, { name: 'Shoulders', coords: [15, 42] },
                { name: 'Vagina/Penis', coords: [27, 65] }, { name: 'Feet', coords: [90, 85] },
                { name: 'Legs', coords: [68, 75] }, { name: 'Back', coords: [77, 50] },
                { name: 'Head', coords: [77, 25] }, { name: 'Arms', coords: [63, 53] },
                { name: 'Neck', coords: [77, 40] }, { name: 'Buttocks', coords: [77, 65] },
              ]
            },
            {
              title: 'Face',
              imageKey: 'facePart',
              aspectRatio: 480 / 480,
              parts: [
                { name: 'Eyes', coords: [37, 44] }, { name: 'Nose', coords: [48, 52] },
                { name: 'Teeth', coords: [46, 58] }, { name: 'Ears', coords: [20, 49] },
                { name: 'Tongue', coords: [48, 64] }, { name: 'Mouth', coords: [55, 62] },
                { name: 'Eyelashes', coords: [60, 40] }, { name: 'Eyebrows', coords: [63, 34] },
                { name: 'Cheeks', coords: [65, 55] }, { name: 'Forehead', coords: [50, 25] },
                { name: 'Chin', coords: [38, 66] }, { name: 'Hair', coords: [50, 10] },
              ]
            }
          ]
        },
        {
          type: 'body-parts-quiz',
          title: 'Why Do We Need To Know About Our Body Parts?',
          prompt: '',
          introText: 'To understand changes and stay healthy, it’s important to know our body parts! When we’re feeling dizzy or slow, knowing each body part helps us guess what kind of sickness we’re having.',
          transitionText: 'Knowing which body part hurts also helps us know which part needs care when we get hurt!',
          quizzes: [
              {
                  imageKey: 'quizFever',
                  prompt: "If you touch your forehead and find that it's hot, what might this tell you?",
                  options: [
                      { text: 'You’re most likely having a fever!', isCorrect: true },
                      { text: 'An alien infested your brain', isCorrect: false },
                      { text: 'I know where it hurts but I don’t know what it’s called!', isCorrect: false },
                  ],
                  correctFeedback: 'That’s right! A hot forehead might mean you have a fever. This helps you tell an adult what you’re feeling so they can give you medicine or a cold towel to feel better.',
                  incorrectFeedback: 'Hmm, not quite. Try again! Remember, your body sends you signals when something is wrong.',
              },
              {
                  imageKey: 'quizKnee',
                  prompt: 'Which body part is hurting?',
                  options: [
                      { text: 'Knee', isCorrect: true },
                      { text: 'Arm', isCorrect: false },
                      { text: 'Nose', isCorrect: false },
                  ],
                  correctFeedback: 'Yes! That’s your knee. Now you can tell the doctor where to put the bandage and feel better!',
                  incorrectFeedback: 'Not quite. Look again — which part has the scrape?',
              }
          ]
        },
        {
          type: 'puberty-timeline',
          title: 'Why Do We Need To Know About Our Body Parts?',
          prompt: '',
          hairHotspots: [
            { coords: [35, 47], radius: 4, feedback: 'Yes! Hair starts growing under your arms when you go through puberty.' },
            { coords: [65, 47], radius: 4, feedback: 'That\'s right! Hair grows under our arms during puberty.' },
            { coords: [49, 38], radius: 5, feedback: 'Correct! Some people grow facial hair like moustaches or beards.' },
            { coords: [50, 68], radius: 5, feedback: 'Good job! This is a private area where hair also starts to grow.' },
            { coords: [28, 60], radius: 6, feedback: 'Yep! Hair on our arms and legs can become thicker and darker.' },
            { coords: [72, 75], radius: 7, feedback: 'You found one! Leg hair can become more noticeable during puberty.' },
          ],
          safetyScenarios: [
            { text: 'Doctor checks your stomach during a check-up.', isSafe: true },
            { text: 'A friend wants to touch your private parts.', isSafe: false },
            { text: 'You touch your own knee.', isSafe: true },
            { text: 'A family member gives you a big hug.', isSafe: true },
            { text: 'Someone you don\'t know asks for a secret picture online.', isSafe: false },
          ]
        }
      ]
    },
    {
      id: 'rights',
      title: 'WHAT ARE MY RIGHTS?',
      subtitle: 'CONSENT ACRONYM',
      emoji: '💬',
      zone: 'Rights River',
      badge: 'Boundary Guardian',
      color: '#A7E3D8',
      activities: [
        {
          type: 'consent-acronym',
          title: 'C.O.N.S.E.N.T',
          prompt: 'Everyone has rights, and that includes you! One of the most important forms of rights is the ability to say "yes" or "no" when it comes to your body.',
          acronym: {
            'C': 'CHECK IF IT MAKES YOU FEEL OKAY',
            'O': 'OWN YOUR BODY',
            'N': 'NO MEANS NO',
            'S': 'SPEAK UP IF YOU FEEL UNCOMFORTABLE',
            'E': 'EXPLORE YOUR FEELINGS AND RIGHTS',
            'T': 'TELL A TRUSTED ADULT'
          }
        },
        {
          type: 'relationship-web-game',
          title: 'Build Your Relationship Web',
          prompt: 'A good crowd makes you feel safe and respected. Drag the cards to build a strong web of friendship!',
          scenarios: [
            { text: 'A friend listens when you say "no".', isGood: true },
            { text: 'A friend pressures you to do something you don’t like.', isGood: false },
            { text: 'A friend respects your personal space.', isGood: true },
            { text: 'A friend makes fun of your feelings.', isGood: false },
            { text: 'A friend celebrates with you when you succeed.', isGood: true },
            { text: 'A friend tells your secrets to others.', isGood: false },
            { text: 'A friend supports you when you need it.', isGood: true },
          ]
        },
        {
          type: 'consent-colors',
          title: 'COLOURS OF CONSENT',
          prompt: 'Use different colour pencils to show parts of your body that you think are alright for your parents/guardians, other family members, friends and strangers to touch.',
          categories: ['FAMILY', 'FRIENDS', 'EXTENDED FAMILY', 'STRANGERS'],
          colors: {
            'NEVER': '#FF6B6B',
            'ASK': '#FFE66D',
            'SURE': '#4ECDC4',
            'UNCOMFORTABLE': '#FF8E53'
          },
          questions: [
            'Why are there differences for each type of person?',
            'Why did you choose to colour certain areas green, yellow or red?',
            'Do people you know often respect the boundaries you have?'
          ]
        }
      ]
    },
    {
      id: 'safety',
      title: 'IS THIS DANGEROUS?',
      subtitle: 'Types of Abuse & Online Safety',
      emoji: '💔',
      zone: 'Safety Cave',
      badge: 'Safety Champion',
      color: '#FBE29F',
      activities: [
        {
          type: 'crossword',
          title: 'Types of Abuse Word Search',
          prompt: 'Find the different types of abuse in the puzzle. Click and drag to select a word!',
          words: [
            'Physical abuse', 'Emotional abuse', 'Verbal abuse', 'Financial abuse',
            'Cyberbully', 'Isolation', 'Sexual abuse', 'Bullying', 'Exploitation'
          ],
          definitions: {
            'Physical abuse': 'someone hurts your body on purpose, like hitting, kicking, or pushing.',
            'Emotional abuse': 'someone makes you feel bad about yourself by saying mean things or ignoring you.',
            'Verbal abuse': 'someone uses words to hurt you, like yelling or calling you names.',
            'Financial abuse': 'someone takes or controls your money or things without asking.',
            'Cyberbully': 'someone says mean things or hurts you online, like on social media or through messages.',
            'Isolation': 'someone keeps you away from friends or family on purpose.',
            'Sexual abuse': 'someone touches you or asks you to do things with your body that make you uncomfortable.',
            'Bullying': 'someone picks on you again and again, making you feel scared or upset.',
            'Exploitation': 'someone unfairly uses you or your work to benefit themselves without thinking of your needs.'
          }
        },
        {
          type: 'cyber-safety',
          title: 'What Information Can I Share Online?',
          prompt: 'Tick in the boxes for what information we can and cannot put out online and give reasons why.',
          items: [
            { text: 'FIRST NAME', safe: true },
            { text: 'PHONE NUMBER', safe: false },
            { text: 'HOBBIES OR INTERESTS', safe: true },
            { text: 'FAVOURITE SHOW', safe: true },
            { text: 'naked pictures', safe: false },
            { text: 'PET NAME', safe: true },
            { text: 'favourite school subjects', safe: true },
            { text: 'ADDRESS', safe: false },
            { text: 'age', safe: true },
            { text: 'PASSWORD', safe: false }
          ]
        },
        {
          type: 'maze',
          title: 'How Do I Seek For Safety?',
          prompt: 'Complete the maze below to get the child to his/her trusted adults!',
          info: 'It\'s important to know who we can trust. We can trust family members, teachers and national service officers like the police and firefighters.'
        },
        {
          type: 'emergency-info',
          title: 'Important Information',
          prompt: 'It\'s important to know the information of trusted adults in case of emergencies! Write down the name and phone number of them in the boxes.',
          fields: [
            'TRUSTED ADULT\'S NUMBER',
            'LOCAL POLICE NUMBER',
            'SCHOOL ADDRESS',
            'AMBULANCE NUMBER',
            'MENTAL HEALTH LINE'
          ]
        }
      ]
    },
    {
      id: 'support',
      title: 'ALL FOR ONE, ONE FOR ALL',
      emoji: '🤝',
      zone: 'Friendship Village',
      badge: 'Empathy Hero',
      color: '#F7A6C7',
      activities: [
        {
          type: 'emotion-faces',
          title: 'How Is Your Friend Feeling?',
          prompt: 'To measure your attentiveness towards your friends\' emotions, write down the emotions that you think these faces are feeling.',
          info: 'Maybe they\'re acting differently — more quiet, withdrawn, or upset. This could be a sign that something is wrong, and they might not know how to talk about it.'
        },
        {
          type: 'protect-people',
          title: 'These Are The People I Want to Protect!',
          prompt: 'Follow the dotted line and add details of your friends and families to the blank template! These are the people you want to protect the most!',
          questions: [
            'What does it mean to support a friend who is going through something difficult? How can we show them that we care?',
            'Why is it important to speak up when you see a friend being mistreated or bullied? What are some safe ways to get help?'
          ]
        },
        {
          type: 'reflection',
          title: 'Peer Support',
          prompt: 'Peer-to-peer support means we all have each other\'s backs. If we see something wrong, we speak up. If our friend is scared or hurt, we support them.',
          info: 'Remember, all for one, one for all!',
          reflection: true
        }
      ]
    },
    {
      id: 'express',
      title: 'EXPRESS TO EMPOWER',
      subtitle: 'Colouring Competition',
      emoji: '🎨',
      zone: 'Creative Garden',
      badge: 'Creative Voice',
      color: '#CBB6E0',
      activities: [
        {
          type: 'coloring-competition',
          title: 'Express to Empower Colouring Competition',
          prompt: 'Time to unleash your artistic skills! Colour and draw in the picture below however you\'d like.',
          info: 'Ask your parents or guardian to snap a picture of it and send it to us through email (pocketofpink@gmail.com) or tag us on Instagram (@pocketofpink). Make sure to use the hashtag #ExpresstoEmpower'
        }
      ]
    }
];

export const BADGES: Record<string, Badge> = {
  'Identity Explorer': { id: 'Identity Explorer', name: 'Identity Explorer', description: 'For exploring who you are!', icon: 'Award' },
  'Body & Consent Learner': { id: 'Body & Consent Learner', name: 'Body & Consent Learner', description: 'For learning about your body!', icon: 'Award' },
  'Boundary Guardian': { id: 'Boundary Guardian', name: 'Boundary Guardian', description: 'For understanding your rights!', icon: 'Award' },
  'Safety Champion': { id: 'Safety Champion', name: 'Safety Champion', description: 'For knowing how to stay safe!', icon: 'Award' },
  'Empathy Hero': { id: 'Empathy Hero', name: 'Empathy Hero', description: 'For supporting your friends!', icon: 'Award' },
  'Creative Voice': { id: 'Creative Voice', name: 'Creative Voice', description: 'For expressing yourself!', icon: 'Award' },
};