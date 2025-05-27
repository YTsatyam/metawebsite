import { motion } from 'framer-motion';

const sections = ['Home', 'About', 'Services', 'Portfolio', 'Team', 'Pricing','Contact'];

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-metavanta-black bg-opacity-80 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-mono font-bold">MetaVanta</h1>
        <ul className="flex space-x-6 text-sm font-mono cursor-pointer">
          {sections.map((section) => (
            <li key={section} onClick={() => scrollToSection(section)}>
              {section}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
