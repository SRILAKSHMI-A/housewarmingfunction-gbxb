import { motion } from "framer-motion";

const KolamPattern = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Lotus */}
      <g className="animate-glow">
        <circle cx="100" cy="100" r="8" fill="hsl(var(--primary))" />
        {[...Array(8)].map((_, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="80"
            rx="6"
            ry="15"
            fill="hsl(var(--primary) / 0.8)"
            transform={`rotate(${i * 45} 100 100)`}
          />
        ))}
      </g>

      {/* Inner Ring of Dots */}
      {[...Array(12)].map((_, i) => (
        <circle
          key={`inner-${i}`}
          cx={100 + 35 * Math.cos((i * 30 * Math.PI) / 180)}
          cy={100 + 35 * Math.sin((i * 30 * Math.PI) / 180)}
          r="3"
          fill="hsl(var(--accent))"
        />
      ))}

      {/* Connecting Curves */}
      <path
        d="M100 60 Q130 80 140 100 Q130 120 100 140 Q70 120 60 100 Q70 80 100 60"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M60 100 Q80 70 100 60 Q120 70 140 100 Q120 130 100 140 Q80 130 60 100"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Outer Petals */}
      {[...Array(8)].map((_, i) => (
        <path
          key={`petal-${i}`}
          d={`M100 100 Q${100 + 60 * Math.cos(((i * 45 - 20) * Math.PI) / 180)} ${100 + 60 * Math.sin(((i * 45 - 20) * Math.PI) / 180)} ${100 + 70 * Math.cos((i * 45 * Math.PI) / 180)} ${100 + 70 * Math.sin((i * 45 * Math.PI) / 180)} Q${100 + 60 * Math.cos(((i * 45 + 20) * Math.PI) / 180)} ${100 + 60 * Math.sin(((i * 45 + 20) * Math.PI) / 180)} 100 100`}
          fill="hsl(var(--primary) / 0.3)"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
        />
      ))}

      {/* Outer Dots */}
      {[...Array(16)].map((_, i) => (
        <circle
          key={`outer-${i}`}
          cx={100 + 85 * Math.cos((i * 22.5 * Math.PI) / 180)}
          cy={100 + 85 * Math.sin((i * 22.5 * Math.PI) / 180)}
          r="2.5"
          fill="hsl(var(--accent))"
        />
      ))}
    </svg>
  );
};

export const KolamDecoration = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={className}
    >
      <KolamPattern />
    </motion.div>
  );
};

export default KolamDecoration;
