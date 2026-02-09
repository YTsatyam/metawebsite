import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const headingY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const subtextY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const buttonY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section id="home" ref={ref} className="relative h-screen flex items-center justify-center text-center px-6 md:px-20 bg-metavanta-black">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          style={{ y: headingY }}
          className="text-4xl md:text-6xl font-bold text-metavanta-white mb-6"
        >
          We Don’t Just Post and share— We Create Culture.
        </motion.h1>
        <motion.p
          style={{ y: subtextY }}
          className="text-lg md:text-xl text-metavanta-grey mb-10"
        >
          MetaVanta Media — your Gen-Z growth partner for reels, reach & relevance.
        </motion.p>
        <motion.a
          href="#contact"
          style={{ y: buttonY }}
          className="inline-block px-6 py-3 bg-metavanta-white text-black font-semibold rounded-full hover:scale-105 transition"
        >
          Work With Us
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
