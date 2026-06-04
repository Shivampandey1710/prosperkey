import { FadeIn } from "../ui/FadeIn";

export function Founder() {
  return (
    <section id="founder" className="section section-off-white founder-premium-section">
      <div className="container">
        <FadeIn className="section-header text-center">
          <div className="section-eyebrow justify-center">
            <span className="line" />
            <span className="text">Founder & CEO</span>
            <span className="line" />
          </div>
          <h2 className="section-title">
            Meet The Visionary Behind <span className="gold">ProsperKey Realty</span>
          </h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: "800px" }}>
            Driving Growth, Trust, and Premium Real Estate Opportunities Across India's Most Dynamic Cities.
          </p>
          <span className="gold-divider mx-auto" />
        </FadeIn>

        <div className="founder-premium-grid">
          {/* Left Column - Image, Details & Quote */}
          <FadeIn>
            <div className="founder-premium-image-wrapper">
              <div className="founder-premium-image-bg" />
              <img
                src="/Founder image.jpeg"
                alt="Gunjan Kumar - Founder & CEO"
                className="founder-premium-img"
              />
            </div>
            <div className="founder-premium-details text-center" style={{ marginTop: "32px" }}>
              <h3 className="founder-premium-name" style={{ fontSize: "28px" }}>Gunjan Kumar</h3>
              <div className="founder-premium-role" style={{ marginBottom: "8px" }}>Founder & CEO</div>
              <div className="founder-premium-company" style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-secondary)", marginBottom: "16px" }}>ProsperKey Realty Pvt Ltd</div>
              <div className="founder-premium-divider mx-auto" />
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.6", maxWidth: "80%" }} className="mx-auto">
                Leading Premium Real Estate Investments Across Bengaluru, Hyderabad, Mumbai, Delhi NCR, Pune & Chennai.
              </p>
            </div>
            
            <div className="founder-premium-quote-block text-center" style={{ marginTop: "32px", padding: "24px", background: "var(--white)", borderRadius: "var(--radius-md)", borderTop: "3px solid var(--gold)", boxShadow: "var(--shadow-md)" }}>
              <div className="quote-icon" style={{ position: "static", marginBottom: "4px", fontSize: "40px" }}>"</div>
              <p className="quote-text" style={{ fontSize: "15px", marginBottom: "12px", fontStyle: "italic", color: "var(--text-primary)" }}>
                Real estate is not just about buying property. It is about creating opportunities, building wealth and securing a better future for families.
              </p>
              <div className="quote-author" style={{ fontSize: "12px", fontWeight: "700", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "1px" }}>— Gunjan Kumar</div>
            </div>
          </FadeIn>

          {/* Right Column - Content & Achievements */}
          <FadeIn delay={0.2}>
            <div className="founder-premium-content">
              <div className="founder-premium-bio">
                <p>
                  Gunjan Kumar is the Founder & CEO of ProsperKey Realty Pvt Ltd, a rapidly growing real estate consultancy dedicated to helping families and investors discover premium residential and investment opportunities across India's top growth markets.
                </p>
                <p>
                  With a strong focus on transparency, customer satisfaction, and long-term value creation, he has successfully guided hundreds of homebuyers and investors in making confident real estate decisions.
                </p>
                <p>
                  Under his leadership, ProsperKey Realty has expanded its presence across multiple cities including Bengaluru, Hyderabad, Mumbai, Delhi NCR, Pune and Chennai, connecting clients with carefully selected premium projects from trusted developers.
                </p>
                <div className="founder-premium-vision">
                  <strong>His vision is simple:</strong>
                  <blockquote>
                    “To make premium real estate investment transparent, trustworthy and accessible for every aspiring homeowner and investor.”
                  </blockquote>
                </div>
              </div>

              <div className="founder-premium-achievements" style={{ marginTop: "40px" }}>
                {[
                  { icon: "🏙️", text: "Presence Across 5+ Cities" },
                  { icon: "🏢", text: "25+ Premium Projects" },
                  { icon: "👨‍👩‍👧‍👦", text: "1000+ Families Assisted" },
                  { icon: "💰", text: "₹500Cr+ Property Value Facilitated" },
                  { icon: "⭐", text: "Trusted Real Estate Advisor" },
                ].map((item, i) => (
                  <div key={i} className="achievement-badge">
                    <span className="achievement-icon">{item.icon}</span>
                    <span className="achievement-text">{item.text}</span>
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
