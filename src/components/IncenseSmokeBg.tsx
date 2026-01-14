import { motion } from "framer-motion";

const IncenseSmokeBg = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10 opacity-30">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-64 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            bottom: "-20%",
            background: "radial-gradient(ellipse at center, hsl(35 20% 90% / 0.4) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
          animate={{
            y: [0, -400, -800],
            x: [0, (i % 2 === 0 ? 30 : -30), (i % 2 === 0 ? -20 : 20)],
            opacity: [0, 0.4, 0],
            scale: [0.5, 1.5, 2],
          }}
          transition={{
            duration: 12 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default IncenseSmokeBg;
