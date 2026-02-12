import { motion } from 'framer-motion';

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold tracking-wider"
          whileHover={{ scale: 1.05 }}
          style={{ color: 'var(--color-accent-blue)' }}
        >
          JEEVA
        </motion.div>

        <div className="flex gap-8 items-center backdrop-blur-md bg-white/5 px-6 py-3 rounded-full border border-white/10">
          {['About', 'Work', 'Capabilities', 'Contact'].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm tracking-wide text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
