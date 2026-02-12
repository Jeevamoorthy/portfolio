import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Philosophy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-8 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-violet-500/5 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-3xl md:text-5xl font-light leading-relaxed text-gray-200 mb-8">
            I don't just write code.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-4xl md:text-6xl font-bold glow-text"
            style={{ color: 'var(--color-accent-blue)' }}
          >
            I engineer outcomes.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-left"
        >
          {['Precision', 'Performance', 'Purpose'].map((principle, index) => (
            <motion.div
              key={principle}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
              className="border-l-2 border-cyan-500 pl-4"
            >
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">{principle}</h3>
              <p className="text-gray-400 text-sm">
                {principle === 'Precision' && 'Every algorithm optimized for accuracy'}
                {principle === 'Performance' && 'Systems built for scale and speed'}
                {principle === 'Purpose' && 'Solutions driven by real-world impact'}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Philosophy;
