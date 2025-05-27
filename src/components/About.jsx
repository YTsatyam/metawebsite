import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const logoY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="about" ref={ref} className="bg-metavanta-black py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Logo with parallax */}
        <motion.div style={{ y: logoY }} className="md:w-1/2 w-full px-4 flex justify-center">
          <img
            src="/metawebsite/assets/metavanta-logo.jpg"
            alt="MetaVanta Logo"
            className="w-72 md:w-96 h-auto object-contain"
          />
        </motion.div>

        {/* Text with parallax */}
        <motion.div
          style={{ y: textY }}
          className="md:w-1/2 w-full px-4 flex flex-col justify-center mt-10 md:mt-0"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-metavanta-silver">
            ABOUT <span className="text-metavanta-white">METAVANTA</span>
          </h2>
          <p className="text-metavanta-grey mb-4 text-lg leading-relaxed">
            MetaVanta Media is a Gen-Z social media agency founded by digital natives who understand the pulse of the internet. We eat, sleep, and breathe trends.
          </p>
          <p className="text-metavanta-grey mb-4 text-lg leading-relaxed">
            Our team of creators, strategists, and editors are obsessed with virality. We specialize in short-form content that stops thumbs and converts viewers into customers.
          </p>
          <p className="text-metavanta-grey text-lg leading-relaxed">
            From Reels to TikTok to YouTube Shorts — we know what makes content pop in today's attention economy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
