import { FadeIn } from "../ui/FadeIn";
import { scrollToId } from "../../utils/scroll";

export function About() {
  const go = (id) => scrollToId(id);

  return (
    <section id="about" className="section section-white">
      <div className="container">
        <div className="about-grid">
          <FadeIn>
            <div className="about-image-wrap">
              <div className="about-image-deco" />
              <div className="about-image-accent" />
              <div className="about-image-main">
                <img src="/logo.png" alt="ProsperKey Realty" style={{ objectFit: "contain", padding: "40px", background: "linear-gradient(145deg, #0c1b33, #1a2d4a)", aspectRatio: "4/5" }} />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div>
              <div className="about-eyebrow">
                <span className="line" />
                <span className="text">About Us</span>
              </div>
              <h2 className="about-title">
                Your Trusted Partner<br />
                <span className="gold">Since 2022</span>
              </h2>
              <div className="about-divider" />
              <p className="about-text">
                <strong>ProsperKey Realty Pvt Ltd</strong> was founded in 2022
                with a singular vision — to make dream homeownership
                accessible, transparent, and joyful for every Bangalore family.
                In just four years, we have proudly guided{" "}
                <strong>1000+ families</strong> to their perfect homes across the
                city's most prestigious addresses.
              </p>
              <p className="about-text">
                From the IT corridors of Whitefield and Electronic City to the
                serene enclaves of Bannerghatta Road and Sarjapur, our deep
                knowledge of Bangalore's micro-markets ensures you always get
                the right property at the right price — with zero compromise on
                trust or transparency.
              </p>
              <div className="about-features">
                {[
                  ["🏠", "1000+ Dream Homes Delivered"],
                  ["✅", "100% RERA-Approved Projects"],
                  ["🏦", "End-to-End Home Loan Help"],
                  ["📍", "HSR Complex, Bengaluru"],
                ].map(([ic, txt]) => (
                  <div key={txt} className="about-feature">
                    <span className="about-feature-icon">{ic}</span>
                    <span className="about-feature-text">{txt}</span>
                  </div>
                ))}
              </div>
              <div className="about-btns">
                <button className="btn-primary" onClick={() => go("contact")}>
                  Schedule a Consultation
                </button>
                <a href="tel:+916360556232" className="btn-secondary">
                  📞 +91 63605 56232
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
