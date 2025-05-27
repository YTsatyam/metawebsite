import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: "Reels & Video Editing",
    description: "Scroll-stopping short-form content",
    icon: "🎬"
  },
  {
    title: "Static Post Design",
    description: "Gen-Z branded feed visuals",
    icon: "🖼"
  },
  {
    title: "Trend Research",
    description: "What’s hot, what’s next — decoded for your brand",
    icon: "🔥"
  },
  {
    title: "Content Strategy",
    description: "Big-picture planning, platform-specific insights",
    icon: "📈"
  },
  {
    title: "Caption + Hashtag Writing",
    description: "Copy that clicks and connects",
    icon: "✍️"
  }
];

const Services = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <motion.section
      id="services"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
      className="bg-metavanta-black py-20 px-6 md:px-20"
    >
      <motion.div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-metavanta-silver mb-12">
          What We <span className="text-metavanta-white">Do</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-metavanta-grey/10 border border-metavanta-grey rounded-xl p-6 shadow-md hover:scale-105 transition"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-metavanta-white mb-2">{service.title}</h3>
              <p className="text-metavanta-silver text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
