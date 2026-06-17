import { FadeIn } from "../ui/FadeIn";
import { TESTIMONIALS } from "../../data/properties";
import { useParallax } from "../../hooks/useParallax";

export function Testimonials() {
  const parallax = useParallax(0.12);

  return (
    <section id="testimonials" className="section section-cream">
      <div className="container">
        <FadeIn className="section-header" blur direction="up">
          <div className="section-eyebrow">
            <span className="line" />
            <span className="text">Client Stories</span>
            <span className="line" />
          </div>
          <h2 className="section-title">
            What Our <span className="gold">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from the families who found
            their dream homes with ProsperKey Realty.
          </p>
          <span className="gold-divider" />
        </FadeIn>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1} blur direction="up" scale>
              <div className="testimonial-card">
                <div className="testimonial-quote-icon">"</div>
                <div className="testimonial-stars">
                  {"★".repeat(t.stars)}
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
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
