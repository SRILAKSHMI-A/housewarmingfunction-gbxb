import { motion } from "framer-motion";

interface FlowerGarlandProps {
  className?: string;
  variant?: "marigold" | "jasmine";
}

const FlowerGarland = ({ className = "", variant = "marigold" }: FlowerGarlandProps) => {
  const flowers = [...Array(8)];
  const colors = variant === "marigold" 
    ? ["hsl(35 90% 55%)", "hsl(25 85% 50%)", "hsl(40 95% 60%)"]
    : ["hsl(0 0% 98%)", "hsl(40 30% 95%)", "hsl(0 0% 95%)"];
  
  return (
    <div className={`flex justify-center items-end ${className}`}>
      <svg viewBox="0 0 300 80" className="w-full h-auto max-w-md">
        {/* Garland String */}
        <path
          d="M10 10 Q75 70 150 60 Q225 50 290 10"
          fill="none"
          stroke="hsl(120 30% 35%)"
          strokeWidth="3"
        />
        
        {/* Flowers */}
        {flowers.map((_, i) => {
          const t = (i + 0.5) / flowers.length;
          const x = 10 + t * 280;
          const y = 10 + Math.sin(t * Math.PI) * 50;
          
          return (
            <motion.g
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            >
              {/* Flower petals */}
              {[...Array(8)].map((_, j) => (
                <circle
                  key={j}
                  cx={x + 6 * Math.cos((j * 45 * Math.PI) / 180)}
                  cy={y + 6 * Math.sin((j * 45 * Math.PI) / 180)}
                  r="5"
                  fill={colors[i % colors.length]}
                />
              ))}
              <circle cx={x} cy={y} r="4" fill={colors[(i + 1) % colors.length]} />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
};

export default FlowerGarland;
