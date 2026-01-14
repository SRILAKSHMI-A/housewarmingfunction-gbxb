import { motion } from "framer-motion";

interface TempleBellProps {
  className?: string;
  delay?: number;
}

const TempleBell = ({ className = "", delay = 0 }: TempleBellProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`animate-bell ${className}`}
    >
      <svg
        viewBox="0 0 60 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bell Chain */}
        <path
          d="M30 0 L30 15"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
        
        {/* Bell Top Ring */}
        <circle
          cx="30"
          cy="18"
          r="5"
          fill="hsl(var(--gold-dark))"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
        />
        
        {/* Bell Body */}
        <path
          d="M15 25 Q10 45 8 60 Q8 75 30 80 Q52 75 52 60 Q50 45 45 25 Q40 20 30 18 Q20 20 15 25"
          fill="url(#bellGradient)"
          stroke="hsl(var(--gold-dark))"
          strokeWidth="1.5"
        />
        
        {/* Bell Shine */}
        <ellipse
          cx="22"
          cy="45"
          rx="4"
          ry="12"
          fill="hsl(var(--primary-foreground) / 0.3)"
        />
        
        {/* Bell Clapper */}
        <circle cx="30" cy="72" r="4" fill="hsl(var(--gold-dark))" />
        <line
          x1="30"
          y1="60"
          x2="30"
          y2="68"
          stroke="hsl(var(--gold-dark))"
          strokeWidth="2"
        />
        
        {/* Decorative Ring */}
        <ellipse
          cx="30"
          cy="75"
          rx="22"
          ry="5"
          fill="none"
          stroke="hsl(var(--gold-dark))"
          strokeWidth="2"
        />
        
        <defs>
          <linearGradient id="bellGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(43 75% 75%)" />
            <stop offset="50%" stopColor="hsl(36 65% 55%)" />
            <stop offset="100%" stopColor="hsl(36 70% 40%)" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default TempleBell;
