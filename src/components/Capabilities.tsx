import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Capabilities = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const capabilities = [
    {
      category: 'Vision Systems',
      skills: ['YOLO', 'OpenCV', 'Segmentation', 'Detection', 'Tracking', 'Image Processing'],
      color: 'cyan',
      percentage: 87, // Modified
    },
    {
      category: 'Backend Engineering',
      skills: ['Node.js', 'Express', 'FastAPI', 'JWT', 'REST APIs', 'WebSocket'],
      color: 'violet',
      percentage: 60, // Modified
    },
    {
      category: 'Optimization & Performance',
      skills: ['Real-time Processing', 'Memory Tuning', 'System Scaling', 'Edge Computing'],
      color: 'blue',
      percentage: 95, // Modified
    },
    {
      category: 'ML & Deep Learning',
      skills: ['TensorFlow', 'PyTorch', 'CNN', 'Transfer Learning', 'Model Optimization'],
      color: 'purple',
      percentage: 90, // Modified
    },
  ];

  return (
    <section id="capabilities" ref={ref} className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-20 text-center text-white"
        >
          <span style={{ color: 'var(--color-accent-blue)' }}>Capabilities</span>
        </motion.h2>

        <div className="space-y-16">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.category}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex justify-between items-end mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-200">
                  {capability.category}
                </h3>
                {/* Percentage Text Display */}
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  className="font-mono text-cyan-400 text-xl"
                >
                  {capability.percentage}%
                </motion.span>
              </div>

              <div className="relative">
                {/* Background Track */}
                <div className="absolute inset-0 h-2 bg-white/5 rounded-full" />
                
                {/* Animated Fill Bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  // Animation modified to use the percentage value
                  animate={inView ? { scaleX: capability.percentage / 100 } : {}}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-white origin-left relative z-10"
                  style={{
                    boxShadow: inView ? `0 0 15px rgba(34, 211, 238, 0.3)` : 'none',
                  }}
                />

                <div className="flex flex-wrap gap-3 mt-8">
                  {capability.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 + skillIndex * 0.05 }}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm tracking-wide text-gray-300 hover:border-cyan-500/50 hover:bg-white/10 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every technology is a tool. Every challenge demands the right combination.
            <br />
            <span style={{ color: 'var(--color-accent-blue)' }}>Precision meets adaptability.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
