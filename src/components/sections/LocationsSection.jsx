import { FadeIn } from "../ui/FadeIn";
import { LOCATIONS } from "../../data/properties";

export function LocationsSection() {
  return (
    <section id="locations" className="section section-white">
      <div className="container">
        <FadeIn className="section-header">
          <div className="section-eyebrow">
            <span className="line" />
            <span className="text">Investment Zones</span>
            <span className="line" />
          </div>
          <h2 className="section-title">
            Top Bangalore <span className="gold">Locations</span>
          </h2>
          <p className="section-subtitle">
            Explore Bangalore's most sought-after residential corridors —
            each offering unique advantages for homebuyers and investors.
          </p>
          <span className="gold-divider" />
        </FadeIn>
        <div className="locations-grid">
          {LOCATIONS.map((loc, i) => (
            <FadeIn key={loc.name} delay={i * 0.06}>
              <div className="location-card">
                <div className="location-icon">{loc.icon}</div>
                <h3 className="location-name">{loc.name}</h3>
                <p className="location-desc">{loc.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
