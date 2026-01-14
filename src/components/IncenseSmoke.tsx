import { motion } from "framer-motion";

interface IncenseSmokeProps {
  className?: string;
}

const IncenseSmoke = ({ className = "" }: IncenseSmokeProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Smoke particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-secondary/50"
          style={{
            left: `${45 + (i % 3) * 5}%`,
          }}
          initial={{ y: 0, opacity: 0, scale: 0.5 }}
          animate={{
            y: [-10, -60, -100],
            x: [0, (i % 2 === 0 ? 15 : -15), (i % 2 === 0 ? -10 : 10)],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Incense holder base */}
      <svg
        viewBox="0 0 40 50"
        className="w-10 h-12 absolute bottom-0 left-1/2 -translate-x-1/2"
        fill="none"
      >
        {/* Holder */}
        <ellipse cx="20" cy="45" rx="15" ry="5" fill="hsl(var(--gold-dark))" />
        <rect x="18" y="10" width="4" height="35" fill="hsl(var(--accent))" />
        
        {/* Glowing tip */}
        <circle cx="20" cy="8" r="3" fill="hsl(5 80% 55%)">
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default IncenseSmoke;
