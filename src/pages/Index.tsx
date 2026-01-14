import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import cowWalkingImage from "@/assets/cow-walking-home.jpg";
import templeGopuramImage from "@/assets/temple-gopuram.jpg";
import KolamDecoration from "@/components/KolamPattern";
import TempleBell from "@/components/TempleBell";
import DiyaLamp from "@/components/DiyaLamp";
import MangoLeafBorder from "@/components/MangoLeafBorder";
import FlowerGarland from "@/components/FlowerGarland";
import TempleDoor from "@/components/TempleDoor";
import FloatingPetals from "@/components/FloatingPetals";
import IncenseSmokeBg from "@/components/IncenseSmokeBg";

const Index = () => {
  const [doorsOpen, setDoorsOpen] = useState(false);

  const handleOpenDoors = () => {
    setDoorsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-golden-hour overflow-hidden relative">
      {/* Temple Door Animation */}
      <TempleDoor onOpen={handleOpenDoors} isOpen={doorsOpen} />

      {/* Main Content - Revealed after doors open */}
      <AnimatePresence>
        {doorsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            {/* Floating Decorative Elements */}
            <FloatingPetals />
            <IncenseSmokeBg />

            {/* Temple Bells */}
            <div className="fixed top-4 left-4 w-16 h-20 opacity-70 z-30">
              <TempleBell delay={2} />
            </div>
            <div className="fixed top-4 right-4 w-16 h-20 opacity-70 z-30">
              <TempleBell delay={2.2} />
            </div>

            {/* Temple Gopuram Section */}
            <section className="relative py-8 px-4">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className="max-w-md mx-auto"
              >
                <div className="relative rounded-xl overflow-hidden shadow-glow">
                  <img
                    src={templeGopuramImage}
                    alt="Majestic colorful South Indian temple gopuram"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </motion.div>
            </section>

            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center px-4 py-8">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_75%_85%_/_0.4)_0%,_transparent_60%)]" />
              
              {/* Mango Leaf Torana */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.3 }}
                className="w-full max-w-2xl mb-6"
              >
                <MangoLeafBorder />
              </motion.div>

              {/* Sacred Invitation Header */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="text-center mb-8 relative"
              >
                {/* Om Symbol */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2.7 }}
                  className="text-4xl sm:text-5xl text-primary mb-2"
                  style={{ fontFamily: "serif" }}
                >
                  ॐ
                </motion.p>
                
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-3">
                  Griha Pravesham
                </h1>
                
                <p className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground italic">
                  A Sacred Housewarming Ceremony
                </p>
                
                <div className="divider-sacred w-48 mx-auto mt-6" />
              </motion.div>

              {/* Cute Cow & Modern House Hero Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.8 }}
                className="relative w-full max-w-5xl mx-auto mb-10"
              >
                {/* Decorative Frame */}
                <div className="absolute -inset-3 sm:-inset-4 border-sacred rounded-lg opacity-80" />
                
                {/* Kolam Corners */}
                <div className="absolute -top-12 -left-12 w-20 h-20 opacity-50">
                  <KolamDecoration />
                </div>
                <div className="absolute -top-12 -right-12 w-20 h-20 opacity-50 transform scale-x-[-1]">
                  <KolamDecoration />
                </div>
                <div className="absolute -bottom-12 -left-12 w-20 h-20 opacity-50 transform scale-y-[-1]">
                  <KolamDecoration />
                </div>
                <div className="absolute -bottom-12 -right-12 w-20 h-20 opacity-50 transform scale-[-1]">
                  <KolamDecoration />
                </div>

                {/* Diya Lamps on sides */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:block">
                  <DiyaLamp size="lg" />
                </div>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden lg:block">
                  <DiyaLamp size="lg" />
                </div>

                {/* Main Image - Cute Cow Walking to Modern House */}
                <div className="relative rounded-lg overflow-hidden shadow-sacred">
                  <img
                    src={cowWalkingImage}
                    alt="Cute decorated cow walking toward modern Tamil house for Griha Pravesham"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Flower Garland */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.2 }}
                className="w-full max-w-md mb-8"
              >
                <FlowerGarland variant="marigold" />
              </motion.div>

              {/* Blessing Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.4 }}
                className="text-center max-w-2xl mx-auto mb-12 px-4"
              >
                <p className="font-body text-xl sm:text-2xl md:text-3xl text-foreground leading-relaxed italic">
                  "May the divine blessings of Lord Ganesha guide your steps into this sacred home,
                  filling it with peace, prosperity, and eternal happiness."
                </p>
              </motion.div>
            </section>

            {/* Event Details Section */}
            <section className="relative py-16 px-4 bg-card/50">
              <div className="absolute left-1/2 -translate-x-1/2 -top-4">
                <DiyaLamp size="lg" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto text-center pt-12"
              >
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-8">
                  We Invite You to Grace This Auspicious Occasion
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Family Names */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="border-sacred p-6 rounded-lg bg-card"
                  >
                    <h3 className="font-display text-lg text-primary mb-4">Hosted By</h3>
                    <p className="font-body text-2xl text-foreground mb-2">The Sharma Family</p>
                    <p className="font-body text-muted-foreground">
                      Shri Ramesh & Smt. Lakshmi Sharma
                    </p>
                    <p className="font-body text-muted-foreground text-sm mt-2">
                      Along with their beloved children
                    </p>
                  </motion.div>

                  {/* Date & Time */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="border-sacred p-6 rounded-lg bg-card"
                  >
                    <h3 className="font-display text-lg text-primary mb-4">Muhurtham</h3>
                    <p className="font-body text-2xl text-foreground mb-2">
                      Sunday, February 15, 2026
                    </p>
                    <p className="font-body text-xl text-accent">
                      8:30 AM — Shubh Muhurtham
                    </p>
                    <p className="font-body text-muted-foreground text-sm mt-2">
                      Tamil Month: Masi | Nakshatra: Rohini
                    </p>
                  </motion.div>
                </div>

                {/* Venue */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="border-sacred p-8 rounded-lg bg-card max-w-xl mx-auto"
                >
                  <h3 className="font-display text-lg text-primary mb-4">Venue</h3>
                  <p className="font-body text-xl text-foreground mb-2">
                    No. 42, Temple Street, Raja Nagar
                  </p>
                  <p className="font-body text-lg text-muted-foreground">
                    Chennai, Tamil Nadu - 600028
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-4">
                    Near Sri Venkateswara Temple
                  </p>
                </motion.div>
              </motion.div>
            </section>

            {/* Footer Blessing */}
            <section className="relative py-16 px-4 bg-card/30">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                  <KolamDecoration />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative text-center max-w-2xl mx-auto"
              >
                {/* Diyas */}
                <div className="flex justify-center gap-8 mb-8">
                  <DiyaLamp size="md" />
                  <DiyaLamp size="lg" />
                  <DiyaLamp size="md" />
                </div>

                <p className="font-body text-xl sm:text-2xl text-foreground italic mb-6">
                  "Sarve Jana Sukhino Bhavantu"
                </p>
                <p className="font-body text-lg text-muted-foreground mb-8">
                  May all beings be happy and prosperous
                </p>

                <div className="divider-sacred w-32 mx-auto mb-8" />

                <p className="font-body text-lg text-muted-foreground">
                  Your gracious presence and blessings will make this occasion truly memorable
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="mt-10"
                >
                  <FlowerGarland variant="jasmine" />
                </motion.div>

                <p className="font-display text-primary text-2xl mt-8">
                  Subham
                </p>
              </motion.div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
