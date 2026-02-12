import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, Activity, Layers, Zap } from 'lucide-react';

const LiveSystems = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const demos = [
    {
      title: 'Edge Detection',
      description: 'Real-time Canny edge detection with adaptive thresholding',
      icon: Eye,
      color: 'cyan',
    },
    {
      title: 'Object Detection',
      description: 'Multi-class YOLO detection at 60fps',
      icon: Activity,
      color: 'violet',
    },
    {
      title: 'Grad-CAM Visualization',
      description: 'Explainable AI heatmap generation',
      icon: Layers,
      color: 'blue',
    },
    {
      title: 'Crowd Analysis',
      description: 'Density heatmap with anomaly detection',
      icon: Zap,
      color: 'purple',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center"
        >
          Live <span style={{ color: 'var(--color-accent-blue)' }}>Systems</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          Active demonstrations of computer vision systems in action
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo, index) => {
            const Icon = demo.icon;
            return (
              <motion.div
                key={demo.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 backdrop-blur-sm cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 mb-4 rounded-lg bg-${demo.color}-500/10 border border-${demo.color}-500/30 flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Icon className={`w-8 h-8 text-${demo.color}-400`} />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {demo.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {demo.description}
                  </p>
                </div>

                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-violet-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LiveSystems;
