import { useRef } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";
import { useCountUp } from "../../hooks/useCountUp";

function AnimatedStat({ icon, value, suffix, label, description }) {
  const ref = useRef(null);
  const visible = useOnScreen(ref);
  const count = useCountUp(value, 2200, visible);

  return (
    <div ref={ref} className="stat-block-v2" style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.8s ease, transform 0.8s ease",
    }}>
      <div className="stat-icon-v2">{icon}</div>
      <div className="stat-value-v2">
        {suffix === "%" ? "" : ""}{count}{suffix}
      </div>
      <div className="stat-label-v2">{label}</div>
      <div className="stat-desc-v2">{description}</div>
    </div>
  );
}

export function StatsBand() {
  return (
    <div className="stats-band stats-band-v2">
      <div className="stats-band-pattern" />
      <div className="stats-grid-v2">
        <AnimatedStat
          icon="🏙️"
          value="5"
          suffix="+"
          label="Cities Served"
          description="Bengaluru, Hyderabad, Mumbai, Delhi NCR, Pune"
        />
        <AnimatedStat
          icon="🏢"
          value="25"
          suffix="+"
          label="Premium Projects"
          description="Across luxury apartments, villas and plotted developments"
        />
        <AnimatedStat
          icon="👨‍👩‍👧‍👦"
          value="1000"
          suffix="+"
          label="Happy Families"
          description="Successfully guided to their dream homes"
        />
        <AnimatedStat
          icon="💰"
          value="500"
          suffix="Cr+"
          label="Property Value Facilitated"
          description="Luxury residential and investment transactions"
        />
        <AnimatedStat
          icon="⭐"
          value="98"
          suffix="%"
          label="Client Satisfaction"
          description="Trusted by homebuyers and investors"
        />
      </div>
    </div>
  );
}
