import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="bg-metavanta-black text-metavanta-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Pricing />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;
