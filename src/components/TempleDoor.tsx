import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import templeDoorLeft from "@/assets/temple-door-left.png";
import templeDoorLeft from "@/assets/temple-door-left.png";


interface TempleDoorProps {
  onOpen: () => void;
  isOpen: boolean;
}

const TempleDoor = ({ onOpen, isOpen }: TempleDoorProps) => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isOpen ? 0 : 1, pointerEvents: isOpen ? "none" : "auto" }}
      transition={{ duration: 1.5, delay: isOpen ? 1 : 0 }}
    >
      {/* Dark sacred background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25_30%_12%)] via-[hsl(20_35%_8%)] to-[hsl(15_40%_5%)]" />
      
      {/* Golden glow from behind doors */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_80%_50%_/_0.3)_0%,_transparent_60%)]"
        animate={{ opacity: isOpen ? 1 : 0.3 }}
        transition={{ duration: 1 }}
      />

      {/* Floating Diyas on sides */}
      <div className="absolute left-8 top-1/4 w-6 h-6">
        <div className="w-full h-full rounded-full bg-gradient-to-t from-orange-500 to-yellow-300 animate-glow" />
      </div>
      <div className="absolute right-8 top-1/4 w-6 h-6">
        <div className="w-full h-full rounded-full bg-gradient-to-t from-orange-500 to-yellow-300 animate-glow" />
      </div>
      <div className="absolute left-12 bottom-1/4 w-4 h-4">
        <div className="w-full h-full rounded-full bg-gradient-to-t from-orange-500 to-yellow-300 animate-glow" style={{ animationDelay: "0.5s" }} />
      </div>
      <div className="absolute right-12 bottom-1/4 w-4 h-4">
        <div className="w-full h-full rounded-full bg-gradient-to-t from-orange-500 to-yellow-300 animate-glow" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Door Container */}
      <div 
        className="relative w-full max-w-2xl h-[90vh] flex cursor-pointer"
        onClick={() => !isOpen && onOpen()}
      >
        {/* Left Door */}
        <motion.div
          className="w-1/2 h-full origin-left"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpen ? -110 : 0 }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
          <img
            src={templeDoorLeft}
            alt="Temple door left"
            className="w-full h-full object-cover object-right"
          />
        </motion.div>

        {/* Right Door */}
        <motion.div
          className="w-1/2 h-full origin-right"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpen ? 110 : 0 }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
          <img
            src={templeDoorRight}
            alt="Temple door right"
            className="w-full h-full object-cover object-left"
          />
        </motion.div>

        {/* Center glow line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Tap to Open Hint */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: showHint && !isOpen ? [0.5, 1, 0.5] : 0, y: 0 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="font-display text-primary-foreground/80 text-lg tracking-widest">
          ॐ
        </p>
        <p className="font-body text-primary-foreground/60 text-sm mt-2 tracking-wide">
          Tap to Open
        </p>
      </motion.div>

      {/* Top Om Symbol */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-5xl text-primary" style={{ fontFamily: "serif" }}>ॐ</p>
      </motion.div>
    </motion.div>
  );
};

export default TempleDoor;
