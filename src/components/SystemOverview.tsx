import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SystemOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { label: 'Projects Built', value: '25+' },
    { label: 'Models Deployed', value: '12+' },
    { label: 'Detection Systems', value: '8+' },
    { label: 'Real-Time Applications', value: '15+' },
  ];

  const connections = ['AI', 'Backend', 'Optimization', 'Automation'];

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-20 text-center"
        >
          System <span style={{ color: 'var(--color-accent-blue)' }}>Overview</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Specialized in engineering AI-driven systems with a focus on computer vision and real-time processing.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              From conceptualizing detection algorithms to deploying scalable backend architectures, I build solutions that merge precision with performance.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every line of code serves a purpose. Every system is optimized for reliability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {connections.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="border border-cyan-500/30 bg-cyan-500/5 p-6 rounded-lg text-center backdrop-blur-sm"
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'var(--color-accent-blue)',
                    boxShadow: '0 0 20px var(--color-glow)',
                  }}
                >
                  <p className="text-xl font-semibold" style={{ color: 'var(--color-accent-blue)' }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="absolute inset-0 -z-10">
              {[0, 1, 2, 3].map((i) => (
                <svg key={i} className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`${25 + (i % 2) * 50}%`}
                    y2={`${25 + Math.floor(i / 2) * 50}%`}
                    stroke="var(--color-accent-blue)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                  />
                </svg>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <motion.p
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: 'var(--color-accent-blue)' }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-gray-400 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SystemOverview;
