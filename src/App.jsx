import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Impact from "./sections/Impact";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic]);

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
