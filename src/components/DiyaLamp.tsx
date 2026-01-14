import { motion } from "framer-motion";

interface DiyaLampProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const DiyaLamp = ({ className = "", size = "md" }: DiyaLampProps) => {
  const sizeClasses = {
    sm: "w-10 h-12",
    md: "w-14 h-16",
    lg: "w-20 h-24",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative ${sizeClasses[size]} ${className}`}
    >
      <svg viewBox="0 0 60 80" className="w-full h-full" fill="none">
        {/* Flame Glow */}
        <ellipse
          cx="30"
          cy="20"
          rx="15"
          ry="20"
          fill="url(#flameGlow)"
          className="animate-glow"
        />
        
        {/* Outer Flame */}
        <path
          d="M30 5 Q40 15 38 28 Q35 38 30 40 Q25 38 22 28 Q20 15 30 5"
          fill="url(#outerFlame)"
        >
          <animate
            attributeName="d"
            values="M30 5 Q40 15 38 28 Q35 38 30 40 Q25 38 22 28 Q20 15 30 5;M30 3 Q42 14 39 27 Q36 39 30 42 Q24 39 21 27 Q18 14 30 3;M30 5 Q40 15 38 28 Q35 38 30 40 Q25 38 22 28 Q20 15 30 5"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </path>
        
        {/* Inner Flame */}
        <path
          d="M30 15 Q35 22 33 30 Q32 35 30 36 Q28 35 27 30 Q25 22 30 15"
          fill="url(#innerFlame)"
        >
          <animate
            attributeName="d"
            values="M30 15 Q35 22 33 30 Q32 35 30 36 Q28 35 27 30 Q25 22 30 15;M30 13 Q36 21 34 29 Q33 36 30 38 Q27 36 26 29 Q24 21 30 13;M30 15 Q35 22 33 30 Q32 35 30 36 Q28 35 27 30 Q25 22 30 15"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </path>

        {/* Diya Bowl */}
        <path
          d="M15 45 Q10 55 15 62 Q20 68 30 70 Q40 68 45 62 Q50 55 45 45 Q40 42 30 40 Q20 42 15 45"
          fill="url(#diyaGradient)"
          stroke="hsl(var(--gold-dark))"
          strokeWidth="1"
        />
        
        {/* Oil */}
        <ellipse cx="30" cy="48" rx="12" ry="4" fill="hsl(var(--gold-dark) / 0.6)" />
        
        {/* Wick base */}
        <rect x="28" y="38" width="4" height="10" fill="hsl(30 20% 30%)" rx="1" />
        
        {/* Diya Stand */}
        <path
          d="M25 70 L20 78 L40 78 L35 70"
          fill="hsl(var(--gold-dark))"
        />

        <defs>
          <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(45 100% 70% / 0.6)" />
            <stop offset="100%" stopColor="hsl(45 100% 70% / 0)" />
          </radialGradient>
          <linearGradient id="outerFlame" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="hsl(45 100% 70%)" />
            <stop offset="50%" stopColor="hsl(35 100% 55%)" />
            <stop offset="100%" stopColor="hsl(20 90% 45%)" />
          </linearGradient>
          <linearGradient id="innerFlame" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="hsl(50 100% 95%)" />
            <stop offset="100%" stopColor="hsl(45 100% 75%)" />
          </linearGradient>
          <linearGradient id="diyaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(36 70% 55%)" />
            <stop offset="50%" stopColor="hsl(30 60% 45%)" />
            <stop offset="100%" stopColor="hsl(25 50% 35%)" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default DiyaLamp;
