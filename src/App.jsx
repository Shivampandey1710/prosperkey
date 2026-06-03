import { useState, useEffect } from "react";
import "./App.css";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { SearchBar } from "./components/sections/SearchBar";
import { About } from "./components/sections/About";
import { StatsBand } from "./components/sections/StatsBand";
import { PropertiesSection } from "./components/sections/PropertiesSection";
import { WhyUs } from "./components/sections/WhyUs";
import { Founder } from "./components/sections/Founder";
import { LocationsSection } from "./components/sections/LocationsSection";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";

export default function App() {
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "properties",
      "why",
      "founder",
      "locations",
      "testimonials",
      "contact",
    ];
    const onScroll = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 100 && r.bottom >= 100) {
            setActiveNav(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      <Navbar activeNav={activeNav} />
      <Hero />
      <SearchBar />
      <About />
      <StatsBand />
      <PropertiesSection />
      <WhyUs />
      <Founder />
      <LocationsSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
