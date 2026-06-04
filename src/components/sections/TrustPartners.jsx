import { FadeIn } from "../ui/FadeIn";
import { TRUST_BUILDERS } from "../../data/properties";

export function TrustPartners() {
  /* Duplicate the list for seamless infinite scrolling */
  const doubled = [...TRUST_BUILDERS, ...TRUST_BUILDERS];

  return (
    <section id="partners" className="section section-off-white trust-section">
      <div className="container">
        <FadeIn className="section-header">
          <div className="section-eyebrow">
            <span className="line" />
            <span className="text">Trusted Partners</span>
            <span className="line" />
          </div>
          <h2 className="section-title">
            Our Premium <span className="gold">Builder Partners</span>
          </h2>
          <p className="section-subtitle">
            We exclusively work with India's most trusted and award-winning
            developers to bring you RERA-approved, world-class projects.
          </p>
          <span className="gold-divider" />
        </FadeIn>
      </div>

      <div className="trust-marquee-wrap">
        <div className="trust-marquee-fade trust-fade-left" />
        <div className="trust-marquee-fade trust-fade-right" />
        <div className="trust-track">
          {doubled.map((b, i) => (
            <div key={`${b.name}-${i}`} className="trust-logo-card">
              <div className="trust-logo-initial">
                {b.name.split(" ").map(w => w[0]).join("").slice(0, 3)}
              </div>
              <div className="trust-logo-info">
                <div className="trust-logo-name">{b.name}</div>
                <div className="trust-logo-tagline">{b.tagline}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
