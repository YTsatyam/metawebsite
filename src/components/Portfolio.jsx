import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <motion.section
      id="portfolio"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
      className="bg-metavanta-black py-24 px-6 md:px-20 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-metavanta-silver mb-6">
          Portfolio <span className="text-metavanta-white">Showcase</span>
        </h2>
        <p className="text-metavanta-grey text-lg mb-12">
          We’re currently curating our best work for display. From viral reels to bold brand visuals — it’s all coming soon. Stay tuned!
        </p>
        <div className="inline-block bg-metavanta-grey/10 border border-metavanta-grey px-6 py-4 rounded-xl text-metavanta-silver text-sm tracking-wide">
          🚧 Portfolio Launching Soon – Follow us on Instagram for live updates!
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
