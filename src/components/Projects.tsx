import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Weld Detection System',
      description: 'Advanced computer vision system for real-time weld quality inspection using YOLO and custom CNN architectures. Processes high-resolution video streams at 30fps with 95% accuracy.',
      tech: ['YOLO', 'OpenCV', 'TensorFlow', 'Python', 'FastAPI'],
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      title: 'Crowd Analysis Platform',
      description: 'Intelligent crowd monitoring and analysis system with heatmap visualization and anomaly detection. Deployed across multiple surveillance networks for real-time safety monitoring.',
      tech: ['Object Detection', 'Segmentation', 'Node.js', 'WebSocket', 'Redis'],
      gradient: 'from-violet-500/20 to-purple-500/20',
    },
    {
      title: 'Automated Defect Classification Engine',
      description: 'Multi-stage classification pipeline for manufacturing quality control. Integrates Grad-CAM visualization for explainable AI, reducing false positives by 40%.',
      tech: ['CNN', 'Grad-CAM', 'Express', 'PostgreSQL', 'Docker'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Edge-Optimized Detection Framework',
      description: 'Lightweight detection framework optimized for edge devices. Achieved 5x performance improvement through model quantization and custom inference optimizations.',
      tech: ['TensorRT', 'ONNX', 'C++', 'Raspberry Pi', 'MQTT'],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
  ];

  return (
    <section id="work" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-20 text-center"
        >
          Featured <span style={{ color: 'var(--color-accent-blue)' }}>Work</span>
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/10 backdrop-blur-sm`}
    >
      <div className="p-8 md:p-12">
        <motion.h3
          className="text-3xl md:text-4xl font-bold mb-4"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>

        <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-3xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        initial={false}
      />
    </motion.div>
  );
};

export default Projects;
