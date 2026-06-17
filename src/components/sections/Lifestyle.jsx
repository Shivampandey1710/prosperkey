import { FadeIn } from "../ui/FadeIn";
import { LIFESTYLE_AMENITIES } from "../../data/properties";
import { useParallax } from "../../hooks/useParallax";

export function Lifestyle() {
  const parallax = useParallax(0.12);

  return (
    <section id="lifestyle" className="section lifestyle-section">
      <div className="lifestyle-bg-gradient" />
      <div className="lifestyle-bg-orb lifestyle-orb-1" />
      <div className="lifestyle-bg-orb lifestyle-orb-2" />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <FadeIn className="section-header" blur direction="up">
          <div className="section-eyebrow">
            <span className="line" />
            <span className="text">Premium Living</span>
            <span className="line" />
          </div>
          <h2 className="section-title">
            Beyond Property, A <span className="gold">Premium Lifestyle</span>
          </h2>
          <p className="section-subtitle">
            Every ProsperKey property is located in a neighbourhood that offers
            world-class infrastructure, top schools, healthcare, and connectivity.
          </p>
          <span className="gold-divider" />
        </FadeIn>

        <div className="lifestyle-grid">
          {LIFESTYLE_AMENITIES.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.08} blur direction="up" scale>
              <div className="glass-card">
                <div className="glass-card-icon">{a.icon}</div>
                <h3 className="glass-card-title">{a.title}</h3>
                <p className="glass-card-desc">{a.desc}</p>
                <div className="glass-card-check">✓ Available Near All Projects</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
