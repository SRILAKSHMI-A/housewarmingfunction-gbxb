import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; x: number; delay: number; duration: number; color: string }>>([]);

  useEffect(() => {
    const colors = [
      "hsl(35 90% 70%)", // Marigold
      "hsl(350 80% 85%)", // Rose
      "hsl(45 100% 80%)", // Yellow
      "hsl(15 85% 75%)", // Orange
      "hsl(0 0% 95%)", // White jasmine
    ];
    
    const newPetals = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute w-3 h-3 rounded-full opacity-60"
          style={{
            left: `${petal.x}%`,
            backgroundColor: petal.color,
            boxShadow: `0 0 10px ${petal.color}`,
          }}
          initial={{ y: -20, rotate: 0, opacity: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(petal.id) * 50, Math.cos(petal.id) * 30, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
