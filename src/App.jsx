import { useState, useEffect, useCallback } from "react";
import "./App.css";

import { WelcomeScreen } from "./components/ui/WelcomeScreen";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { GoldParticles } from "./components/ui/GoldParticles";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";
import { Hero } from "./components/sections/Hero";
import { SearchBar } from "./components/sections/SearchBar";
import { PremiumCities } from "./components/sections/PremiumCities";
import { About } from "./components/sections/About";
import { StatsBand } from "./components/sections/StatsBand";
import { PropertyCategories } from "./components/sections/PropertyCategories";
import { PropertiesSection } from "./components/sections/PropertiesSection";
import { FeaturedCorridors } from "./components/sections/FeaturedCorridors";
import { WhyUs } from "./components/sections/WhyUs";
import { InvestmentAdvantage } from "./components/sections/InvestmentAdvantage";
import { Lifestyle } from "./components/sections/Lifestyle";
import { Founder } from "./components/sections/Founder";
import { LeadershipTeam } from "./components/sections/LeadershipTeam";
import { TrustPartners } from "./components/sections/TrustPartners";
import { LocationsSection } from "./components/sections/LocationsSection";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeNav, setActiveNav] = useState("home");

  const handleWelcomeFinish = useCallback(() => {
    setShowWelcome(false);
  }, []);

  useEffect(() => {
    if (showWelcome) return;
    const sections = [
      "home",
      "cities",
      "about",
      "categories",
      "properties",
      "corridors",
      "why",
      "invest",
      "lifestyle",
      "founder",
      "leadership",
      "partners",
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
  }, [showWelcome]);

  useEffect(() => {
    if (showWelcome) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showWelcome]);

  return (
    <>
      {showWelcome && <WelcomeScreen onFinish={handleWelcomeFinish} />}
      <div className="app">
        <GoldParticles />
      <WhatsAppButton />
      <Navbar activeNav={activeNav} />
      <Hero />
      <SearchBar />
      <PremiumCities />
      <About />
      <StatsBand />
      <PropertyCategories />
      <PropertiesSection />
      <FeaturedCorridors />
      <WhyUs />
      <InvestmentAdvantage />
      <Lifestyle />
      <Founder />
      <LeadershipTeam />
      <TrustPartners />
      <LocationsSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
    </>
  );
}
