import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackgroundEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 100 }}
      />

      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(0, 240, 255, 0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-violet-500/30 to-transparent animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-pulse delay-2000" />
    </div>
  );
};

export default BackgroundEffects;
