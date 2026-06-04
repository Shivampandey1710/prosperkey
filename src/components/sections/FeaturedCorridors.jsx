import { FadeIn } from "../ui/FadeIn";
import { CORRIDORS } from "../../data/properties";

function StarRating({ count }) {
  return (
    <span className="corridor-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "star filled" : "star"}>★</span>
      ))}
    </span>
  );
}

export function FeaturedCorridors() {
  return (
    <section id="corridors" className="section section-navy corridor-section">
      <div className="corridor-bg-pattern" />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <FadeIn className="section-header">
          <div className="section-eyebrow">
            <span className="line" />
            <span className="text" style={{ color: "var(--gold-light)" }}>Investment Corridors</span>
            <span className="line" />
          </div>
          <h2 className="section-title" style={{ color: "var(--white)" }}>
            India's Fastest Growing <span className="gold">Investment Corridors</span>
          </h2>
          <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.5)" }}>
            Strategically selected high-growth corridors backed by infrastructure development,
            IT expansion, and strong rental demand across India's top cities.
          </p>
          <span className="gold-divider" />
        </FadeIn>

        <div className="corridor-grid">
          {CORRIDORS.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.06}>
              <div className="corridor-card">
                <div className="corridor-card-top">
                  <span className="corridor-city-tag">{c.city}</span>
                  <span className="corridor-growth">↑ {c.growth} YoY</span>
                </div>
                <h3 className="corridor-name">{c.name}</h3>
                <p className="corridor-highlight">{c.highlight}</p>
                <div className="corridor-meta">
                  <div className="corridor-meta-item">
                    <span className="corridor-meta-label">Investment Potential</span>
                    <StarRating count={c.potential} />
                  </div>
                  <div className="corridor-meta-item">
                    <span className="corridor-meta-label">Upcoming Infrastructure</span>
                    <span className="corridor-infra">{c.infra}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
