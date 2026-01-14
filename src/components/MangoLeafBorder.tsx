import { motion } from "framer-motion";

interface MangoLeafBorderProps {
  className?: string;
}

const MangoLeafBorder = ({ className = "" }: MangoLeafBorderProps) => {
  const leaves = [...Array(12)];
  
  return (
    <div className={`flex justify-center items-center gap-1 ${className}`}>
      {leaves.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -10, rotate: -30 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="relative"
        >
          <svg
            viewBox="0 0 20 40"
            className="w-4 h-8 sm:w-5 sm:h-10"
            fill="none"
          >
            <path
              d="M10 0 Q15 10 15 20 Q15 35 10 40 Q5 35 5 20 Q5 10 10 0"
              fill="url(#leafGradient)"
              stroke="hsl(120 40% 30%)"
              strokeWidth="0.5"
            />
            <path
              d="M10 5 L10 35"
              stroke="hsl(120 30% 35%)"
              strokeWidth="0.5"
            />
            <defs>
              <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(120 45% 40%)" />
                <stop offset="100%" stopColor="hsl(120 35% 30%)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default MangoLeafBorder;
