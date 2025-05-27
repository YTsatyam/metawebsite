import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const teamMembers = [
  {
    name: "Satyam Shiv",
    image: "/assets/satyam.png",
    role: "Co-Founder",
    description:
      "BCA student with a passion for content, branding, and digital creativity. He brings ideas to life — whether it’s a scroll-stopping reel or a full content strategy.",
  },
  {
    name: "Rohit Pandey",
    image: "/assets/rohit.png",
    role: "Co-Founder",
    description:
      "BTech student known for structured thinking and digital innovation. He drives MetaVanta forward with clarity, precision, and next-gen ideas.",
  },
];

const fadeVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
};

const TeamMember = ({ name, image, role, description, reverse }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={fadeVariant}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between gap-10 py-16`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 h-[450px] overflow-hidden rounded-2xl shadow-lg">
        <img
          src={image}
          alt={name}
          className="object-cover h-full w-full grayscale hover:grayscale-0 transition duration-300 ease-in-out"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center h-full md:h-[450px]">
        <h3 className="text-3xl md:text-4xl font-bold text-metavanta-white mb-3">
          {name}
        </h3>
        <p className="text-metavanta-silver text-sm mb-4 uppercase tracking-wide">{role}</p>
        <p className="text-metavanta-grey leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section id="team" className="bg-metavanta-black px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center pt-20">
        <h2 className="text-3xl md:text-5xl font-bold text-metavanta-silver mb-2">
          MEET THE <span className="text-metavanta-white">FOUNDERS</span>
        </h2>
        <p className="text-metavanta-grey max-w-xl mx-auto mt-4 mb-12 text-lg">
          Childhood friends turned co-founders — Satyam & Rohit are building MetaVanta Media with bold vision and unmatched energy.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <TeamMember {...teamMembers[0]} reverse={false} />
        <TeamMember {...teamMembers[1]} reverse={true} />
      </div>
    </section>
  );
};

export default Team;
