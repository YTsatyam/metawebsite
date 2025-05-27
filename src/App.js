import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Contact from './components/Contact';



function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-metavanta-black text-metavanta-white">
      <Navbar />
      <Hero scrollPosition={scrollPosition} />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
