import { motion } from 'framer-motion';

const Hero = ({ scrollPosition }) => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-metavanta-black text-metavanta-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          We Make Brands Go Viral 🚀
        </h1>
        <p className="text-metavanta-grey text-lg md:text-xl max-w-2xl mx-auto">
          Short-form content. Trend-driven strategy. Gen-Z creative power.
        </p>
        <a
          href="#contact"
          className="inline-block mt-10 px-6 py-3 border border-metavanta-white text-metavanta-white rounded-full hover:bg-metavanta-white hover:text-metavanta-black transition"
        >
          Work With Us
        </a>
      </motion.div>

      <div className="absolute bottom-10 animate-bounce">
        <span className="text-metavanta-grey">Scroll ↓</span>
      </div>
    </section>
  );
};

export default Hero;
