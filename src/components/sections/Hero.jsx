import { useState, useEffect } from "react";
import { scrollToId } from "../../utils/scroll";

export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(t);
  }, []);

  const go = (id) => scrollToId(id);

  return (
    <section id="home" className="hero">
      <div className="hero-pattern" />
      <div className="hero-gradient-orb hero-orb-1" />
      <div className="hero-gradient-orb hero-orb-2" />
      <div className="hero-ring hero-ring-1" />
      <div className="hero-ring hero-ring-2" />
      <div className="hero-bg-overlay" />

      <div
        className="hero-content"
        style={{
          opacity: ready ? 1 : 0,
          transform: ready ? "none" : "translateY(40px)",
        }}
      >
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">Trusted Since 2022 · Bangalore</span>
        </div>

        <h1 className="hero-title">
          Your Dream Home<br />
          <span className="em">Awaits in</span><br />
          Bangalore
        </h1>

        <p className="hero-sub">
          Handpicked premium residences from Bangalore's most trusted
          developers — because every key should open the door to the life
          you deserve.
        </p>

        <div className="hero-btns">
          <button className="btn-primary" onClick={() => go("properties")}>
            Explore Properties
          </button>
          <button className="btn-secondary white" onClick={() => go("contact")}>
            Contact Us
          </button>
        </div>

        <div className="hero-stats">
          {[
            ["1000+", "Happy Families"],
            ["25+", "Premium Projects"],
            ["₹500Cr+", "Deals Closed"],
            ["4+", "Years of Trust"],
            ["5+", "Cities Served"],
          ].map(([v, l]) => (
            <div key={l} className="hero-stat">
              <div className="hero-stat-value">{v}</div>
              <div className="hero-stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll" onClick={() => go("about")}>
        <span className="hero-scroll-text">Scroll to Explore</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
