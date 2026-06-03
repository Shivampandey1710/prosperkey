import { FadeIn } from "../ui/FadeIn";

export function Founder() {
  return (
    <section id="founder" className="section section-off-white">
      <div className="container">
        <FadeIn className="section-header">
          <div className="section-eyebrow">
            <span className="line" />
            <span className="text">Our Founder</span>
            <span className="line" />
          </div>
          <h2 className="section-title">
            Meet the <span className="gold">Visionary</span>
          </h2>
          <span className="gold-divider" />
        </FadeIn>
        <div className="founder-section">
          <FadeIn>
            <div className="founder-image-wrap">
              <div className="founder-image-frame" />
              <div className="founder-accent-circle" />
              <div className="founder-image">
                <img
                  src="/Founder image.jpeg"
                  alt="Gunjan Kumar — Founder & CEO of ProsperKey Realty"
                />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="founder-content">
              <div className="about-eyebrow">
                <span className="line" />
                <span className="text">Founder & CEO</span>
              </div>
              <h3 className="founder-name">Gunjan Kumar</h3>
              <div className="founder-role">
                Founder & CEO · ProsperKey Realty Pvt Ltd
              </div>
              <div className="founder-divider" />
              <blockquote className="founder-message">
                "Every family deserves a home they love. At ProsperKey, we don't
                just sell properties — we open doors to the lives people dream
                about. That's our mission, one key at a time."
              </blockquote>
              <p className="founder-bio">
                With a passion for real estate and a deep understanding of
                Bangalore's rapidly evolving property landscape, Gunjan Kumar
                founded ProsperKey Realty in 2022. His vision was simple yet
                powerful: create a real estate consultancy where trust,
                transparency, and client happiness come first — always.
              </p>
              <p className="founder-bio">
                Under his leadership, ProsperKey has grown from a two-person
                team to one of Bangalore's most trusted property advisory firms,
                helping over 500 families find their perfect homes across the
                city's most sought-after neighborhoods.
              </p>
              <div className="founder-info-grid">
                {[
                  ["🏢", "500+ Homes Delivered"],
                  ["🌍", "7+ Bangalore Zones"],
                  ["🏆", "Top Developer Partnerships"],
                  ["❤️", "Client-First Philosophy"],
                ].map(([ic, txt]) => (
                  <div key={txt} className="founder-info-item">
                    <span className="founder-info-icon">{ic}</span>
                    <span className="founder-info-text">{txt}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
