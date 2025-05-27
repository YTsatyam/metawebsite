import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-20 py-16">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* LOGO SIDE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/metavanta-logo.jpg"
            alt="MetaVanta Logo"
            className="w-[350px] md:w-[500px] h-auto object-contain"
          />
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          className="w-full md:w-1/2 flex items-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-silver">About MetaVanta</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              MetaVanta Media is a Gen-Z-powered creative agency helping brands go viral and stay relevant. 
              From short-form content to trend-first strategies, we craft bold visuals, viral moments, and 
              content that cuts through the noise. We're not just creating content — we're building culture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
