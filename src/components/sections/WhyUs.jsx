import { FadeIn } from "../ui/FadeIn";

export function WhyUs() {
  const cards = [
    ["🏆", "Top Developer Access", "Exclusive access to Godrej, Mahindra, Prestige, Birla, Lodha, Nambiar & more of India's finest builders."],
    ["💰", "Best Price Guarantee", "Direct developer pricing with complete transparency — no middleman, no markup. Always the best deal."],
    ["📋", "RERA Compliance", "Every project we recommend is 100% RERA registered and legally verified for your peace of mind."],
    ["🏦", "Home Loan Support", "End-to-end assistance with India's top banks & NBFCs to get you the best rates and fastest approvals."],
    ["🗺️", "Bangalore Expertise", "Deep micro-market knowledge across all Bangalore zones — from Whitefield to Electronic City and beyond."],
    ["🤝", "Post-Sale Support", "We're with you from the first site visit to booking, registration, and possession. Your success is our mission."],
  ];

  return (
    <section id="why" className="section section-white">
      <div className="container">
        <FadeIn className="section-header">
          <div className="section-eyebrow">
            <span className="line" />
            <span className="text">Why Choose Us</span>
            <span className="line" />
          </div>
          <h2 className="section-title">
            The <span className="gold">ProsperKey</span> Advantage
          </h2>
          <p className="section-subtitle">
            We go beyond just selling properties — we build lasting relationships
            founded on trust, expertise, and exceptional service.
          </p>
          <span className="gold-divider" />
        </FadeIn>
        <div className="why-grid">
          {cards.map(([ic, title, desc], i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <div className="why-card">
                <div className="why-icon">{ic}</div>
                <h3 className="why-title">{title}</h3>
                <p className="why-desc">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
