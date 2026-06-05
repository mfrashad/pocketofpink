
import React from 'react';

const InteractiveMapBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#e0f7fa] -z-10">
      {/* Base Terrain */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 750" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="groveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbc2eb" />
            <stop offset="100%" stopColor="#a6c1ee" />
          </linearGradient>
          <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4facfe" />
            <stop offset="100%" stopColor="#00f2fe" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Identity Grove (Bottom Left) */}
        <circle cx="200" cy="600" r="250" fill="url(#groveGrad)" opacity="0.4" />
        <path d="M0,750 L0,500 Q150,450 300,600 Q450,750 300,750 Z" fill="#f8bbd0" opacity="0.6" />

        {/* Rights River (Middle) */}
        <path 
          d="M0,350 Q250,300 500,350 T1000,350 L1000,450 Q750,500 500,450 T0,450 Z" 
          fill="url(#riverGrad)" 
          className="animate-flow"
        />

        {/* Safety Cave (Top Right) */}
        <path d="M700,0 L1000,0 L1000,300 Q850,250 700,0" fill="#fff9c4" opacity="0.7" />

        {/* Friendship Village (Bottom Right) */}
        <circle cx="850" cy="650" r="200" fill="#ffecb3" opacity="0.5" />
        
        {/* Creative Garden (Top Left) */}
        <path d="M0,0 L300,0 Q150,150 0,300 Z" fill="#e1bee7" opacity="0.6" />

        {/* Decorative "Paths" */}
        <path d="M200,600 Q500,550 500,400" fill="none" stroke="white" strokeWidth="4" strokeDasharray="10,10" opacity="0.3" />
        <path d="M500,400 Q500,250 800,150" fill="none" stroke="white" strokeWidth="4" strokeDasharray="10,10" opacity="0.3" />
      </svg>

      {/* Floating Clouds */}
      <div className="absolute top-10 left-[-10%] animate-float-slow opacity-60">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="white">
          <circle cx="30" cy="35" r="25" />
          <circle cx="60" cy="25" r="25" />
          <circle cx="90" cy="35" r="25" />
          <rect x="30" y="35" width="60" height="25" />
        </svg>
      </div>
      <div className="absolute top-40 right-[-10%] animate-float-medium opacity-40">
        <svg width="100" height="50" viewBox="0 0 100 50" fill="white">
          <circle cx="25" cy="30" r="20" />
          <circle cx="50" cy="20" r="20" />
          <circle cx="75" cy="30" r="20" />
          <rect x="25" y="30" width="50" height="20" />
        </svg>
      </div>

      <style>{`
        @keyframes flow {
          0% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
          100% { transform: translateX(-10px); }
        }
        @keyframes float {
          0% { transform: translateX(0); }
          100% { transform: translateX(120vw); }
        }
        .animate-flow {
          animation: flow 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 60s linear infinite;
        }
        .animate-float-medium {
          animation: float 45s linear infinite;
          animation-delay: -20s;
        }
      `}</style>
    </div>
  );
};

export default InteractiveMapBackground;
