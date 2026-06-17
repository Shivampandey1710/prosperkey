import { FadeIn } from "../ui/FadeIn";
import { INVESTMENT_ADVANTAGES } from "../../data/properties";
import { useParallax } from "../../hooks/useParallax";

export function InvestmentAdvantage() {
  const parallax = useParallax(0.1);

  return (
    <section id="invest" className="section section-cream">
      <div className="container">
        <FadeIn className="section-header" blur direction="up">
          <div className="section-eyebrow">
            <span className="line" />
            <span className="text">Investor Focused</span>
            <span className="line" />
          </div>
          <h2 className="section-title">
            Why Investors Choose <span className="gold">ProsperKey</span>
          </h2>
          <p className="section-subtitle">
            We combine deep market expertise with a client-first approach to deliver
            real estate investments that consistently outperform the market.
          </p>
          <span className="gold-divider" />
        </FadeIn>

        <div className="invest-grid">
          {INVESTMENT_ADVANTAGES.map((adv, i) => (
            <FadeIn key={adv.title} delay={i * 0.08} blur direction="up" scale>
              <div className="invest-card">
                <div className="invest-card-border" />
                <div className="invest-icon">{adv.icon}</div>
                <h3 className="invest-title">{adv.title}</h3>
                <p className="invest-desc">{adv.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
