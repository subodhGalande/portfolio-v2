import { motion } from "framer-motion";

const Animation = () => {
  return (
    <>
      {/* High-Craft Vector SVG Film-Grain Noise Texture Overlay */}
      <div className="fixed inset-0 z-40 pointer-events-none opacity-[0.04] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="filmGrainNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#filmGrainNoise)" />
        </svg>
      </div>

      {/* Subtle Architectural Dot Matrix Grid Layer */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* Pattern Noise Backdrop Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-noise bg-repeat opacity-20 mix-blend-overlay" />

      {/* Glowing Ambient Gradient Orbs - Emerald & Warm Gold Luxury */}
      <div className="fixed inset-0 -z-10 h-screen w-full overflow-hidden pointer-events-none select-none blur-3xl">
        {/* Orb 1: Deep Emerald Fluid Floating Aura */}
        <motion.div
          animate={{
            x: [0, 180, -120, 0],
            y: [0, -140, 160, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-10 -left-10 w-[28rem] h-[28rem] sm:w-[32rem] sm:h-[32rem] rounded-full bg-emerald-600/35 opacity-75"
        />

        {/* Orb 2: Bright Mint Emerald Fluid Floating Aura */}
        <motion.div
          animate={{
            x: [0, -200, 140, 0],
            y: [0, 160, -100, 0],
            scale: [1, 0.85, 1.15, 1],
            rotate: [360, 240, 120, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 -right-10 w-[24rem] h-[24rem] sm:w-[28rem] sm:h-[28rem] rounded-full bg-emerald-400/30 opacity-70"
        />

        {/* Orb 3: Deep Slate Teal Fluid Aura */}
        <motion.div
          animate={{
            x: [0, 120, -160, 0],
            y: [0, 140, -80, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-10 left-1/4 w-[26rem] h-[26rem] sm:w-[30rem] sm:h-[30rem] rounded-full bg-teal-600/30 opacity-65"
        />
      </div>
    </>
  );
};

export default Animation;
