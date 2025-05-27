import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const sectionY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.section
      id="contact"
      ref={ref}
      style={{ y: sectionY, opacity }}
      className="bg-metavanta-black py-20 px-6 md:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-metavanta-silver mb-8">
          Let’s <span className="text-metavanta-white">Connect</span>
        </h2>
        <p className="text-metavanta-grey mb-12 text-lg">
          Whether you're a startup, creator, or brand — let's chat about how we can make your content stand out.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-metavanta-grey/10 text-white border border-metavanta-grey outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-metavanta-grey/10 text-white border border-metavanta-grey outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="md:col-span-2 p-4 rounded-lg bg-metavanta-grey/10 text-white border border-metavanta-grey outline-none"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-metavanta-white text-black font-semibold py-3 rounded-lg hover:bg-white/80 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 flex justify-center space-x-6 text-xl text-metavanta-silver">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-white">
            Instagram
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
