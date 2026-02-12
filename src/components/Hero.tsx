import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#8a2eff]/10 via-transparent to-transparent" />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.p
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-lg md:text-xl text-gray-400 mb-8 tracking-wide"
        >
          Every system begins with a signal.
        </motion.p>

        <motion.h1
          custom={1.5}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
        >
          I build systems that <span className="glow-text" style={{ color: 'var(--color-accent-blue)' }}>see</span>.
        </motion.h1>

        <motion.div
          custom={2.5}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            JEEVA M. I
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 tracking-wide">
            AI Engineer | Computer Vision | Backend Systems
          </p>
        </motion.div>

        <motion.button
          custom={3.5}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-2 mx-auto text-lg tracking-wide text-gray-300 hover:text-white transition-colors"
          whileHover={{ y: 5 }}
        >
          Explore the System
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 3,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
