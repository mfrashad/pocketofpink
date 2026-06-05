/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Pocket of Pink — minimalist pink / white / black
        // ALL pink tokens render the same pink (sampled from the POP heart logo).
        pop: {
          pink: '#EC94CC',        // the one pink (from the POP heart logo)
          pinkDeep: '#EC94CC',    // (alias) same pink
          pinkSoft: '#FFFFFF',    // (alias) white
          cream: '#FFFFFF',       // white
          creamSoft: '#FFFFFF',   // (alias) white
          ink: '#1A0E12',         // near-black
          plum: '#1A0E12',        // (alias) near-black
        },
        // legacy tokens still referenced in some places
        designPink: '#EC94CC',
        designCyan: '#4ecdc4',
      },
      fontFamily: {
        brush: ['"Bowlby One"', 'Impact', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        ambient: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fly-across': {
          '0%': { transform: 'translateX(-30vw) translateY(0) rotate(-12deg)' },
          '50%': { transform: 'translateX(45vw) translateY(-30px) rotate(8deg)' },
          '100%': { transform: 'translateX(130vw) translateY(10px) rotate(-6deg)' },
        },
        'fly-back': {
          '0%': { transform: 'translateX(130vw) translateY(20px) rotate(6deg)' },
          '50%': { transform: 'translateX(45vw) translateY(-20px) rotate(-10deg)' },
          '100%': { transform: 'translateX(-30vw) translateY(0) rotate(12deg)' },
        },
        fall: {
          // --rest-rot = resting rotation per item; --drift = horizontal sway
          '0%':   { transform: 'translateY(-130vh) translateX(calc(var(--drift, 0px) * -0.6)) rotate(calc(var(--rest-rot, 0deg) - 90deg))', opacity: '0' },
          '15%':  { opacity: '1' },
          '55%':  { transform: 'translateY(36px) translateX(calc(var(--drift, 0px) * 0.4)) rotate(calc(var(--rest-rot, 0deg) + 6deg))' },
          '72%':  { transform: 'translateY(-18px) translateX(calc(var(--drift, 0px) * -0.15)) rotate(calc(var(--rest-rot, 0deg) - 4deg))' },
          '85%':  { transform: 'translateY(10px) translateX(0) rotate(calc(var(--rest-rot, 0deg) + 2deg))' },
          '94%':  { transform: 'translateY(-5px) rotate(calc(var(--rest-rot, 0deg) - 1deg))' },
          '100%': { transform: 'translateY(0) translateX(0) rotate(var(--rest-rot, 0deg))', opacity: '1' },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
        ambient: 'ambient 7s ease-in-out infinite',
        breathe: 'breathe 5s ease-in-out infinite',
        wiggle: 'wiggle 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        'fly-across': 'fly-across 22s linear infinite',
        'fly-back': 'fly-back 28s linear infinite',
        fall: 'fall 1.8s cubic-bezier(0.22, 0.9, 0.4, 1.15) forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
