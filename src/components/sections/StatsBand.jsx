import { FadeIn } from "../ui/FadeIn";

export function StatsBand() {
  return (
    <div className="stats-band">
      <div className="stats-band-pattern" />
      <div className="stats-grid">
        {[
          ["500+", "Happy Families"],
          ["9+", "Premium Projects"],
          ["₹100Cr+", "Deals Closed"],
          ["3+", "Years of Trust"],
        ].map(([v, l]) => (
          <FadeIn key={l} className="stat-block">
            <div className="stat-value">{v}</div>
            <div className="stat-label">{l}</div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
