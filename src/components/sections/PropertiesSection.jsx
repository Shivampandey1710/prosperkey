import { useState } from "react";
import { FadeIn } from "../ui/FadeIn";
import { PropCard } from "../ui/PropCard";
import { PROPERTIES } from "../../data/properties";
import { scrollToId } from "../../utils/scroll";

const FILTERS = ["All", "Under 1.5Cr", "1.5–2Cr", "Above 2Cr"];
const priceVal = (p) => {
  if (p.price.includes(" L"))
    return parseFloat(p.price.replace("₹", "").replace(" L", "")) / 100;
  return parseFloat(p.price.replace("₹", "").replace(" Cr", ""));
};

export function PropertiesSection() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered =
    filter === "All"
      ? PROPERTIES
      : filter === "Under 1.5Cr"
      ? PROPERTIES.filter((p) => priceVal(p) < 1.5)
      : filter === "1.5–2Cr"
      ? PROPERTIES.filter((p) => priceVal(p) >= 1.5 && priceVal(p) <= 2)
      : PROPERTIES.filter((p) => priceVal(p) > 2);

  const onEnquire = () => scrollToId("contact");

  return (
    <section id="properties" className="section section-cream">
      <div className="container">
        <FadeIn className="section-header">
          <div className="section-eyebrow">
            <span className="line" />
            <span className="text">Featured Listings</span>
            <span className="line" />
          </div>
          <h2 className="section-title">
            Premium Properties in <span className="gold">Bangalore</span>
          </h2>
          <p className="section-subtitle">
            Discover handpicked properties from Bangalore's most trusted
            developers — luxury apartments, premium villas, and investment plots.
          </p>
          <span className="gold-divider" />
        </FadeIn>

        <FadeIn delay={0.1} className="filter-row">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </FadeIn>

        <div className="prop-grid">
          {filtered.map((p) => (
            <PropCard
              key={p.id}
              p={p}
              expanded={expanded === p.id}
              onToggle={() =>
                setExpanded(expanded === p.id ? null : p.id)
              }
              onEnquire={onEnquire}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
