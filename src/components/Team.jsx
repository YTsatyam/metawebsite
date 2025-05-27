import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const satyamImg = process.env.PUBLIC_URL + '/assets/satyam.png';
const rohitImg = process.env.PUBLIC_URL + '/assets/rohit.png';

const founders = [
  {
    name: 'Satyam Shiv',
    description:
      'BCA student with a sharp eye for digital trends, content creation, and strategy. Satyam leads with a vision to convert scrolls into conversions.',
    image: satyamImg,
    reverse: false,
  },
  {
    name: 'Rohit Pandey',
    description:
      'BTech student with a structured, innovative mind. Rohit adds clarity, energy, and design precision to every MetaVanta move.',
    image: rohitImg,
    reverse: true,
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-[#111111]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-metavanta-silver glitch">
        Meet the Co-Founders
      </h2>
      <div className="space-y-32 max-w-7xl mx-auto px-6">
        {founders.map((member, index) => (
          <FounderBlock key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

const FounderBlock = ({ name, description, image, reverse }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 1', '1 1'] });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } items-center gap-10`}
    >
      <img
        src={image}
        alt={name}
        className="w-full md:w-[40%] h-auto rounded-xl shadow-lg"
      />
      <div className="text-center md:text-left md:w-[60%] flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-metavanta-white glitch hover:text-gray-300">
          {name}
        </h3>
        <p className="text-metavanta-grey text-lg leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default Team;
