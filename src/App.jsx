import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Impact from "./sections/Impact";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07100d] text-white">
      <Navigation />
      <Hero />
      <Projects />
      <Impact />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
