import { useState } from "react";
import { FadeIn } from "../ui/FadeIn";
import { PropCard } from "../ui/PropCard";
import { PROPERTIES } from "../../data/properties";
import { scrollToId } from "../../utils/scroll";

const CITIES = ["All Cities", "Bangalore", "Hyderabad", "Mumbai", "Delhi NCR", "Chennai", "Kolkata", "Pune"];
const PRICE_FILTERS = ["All Prices", "Under 1.5Cr", "1.5–2.5Cr", "Above 2.5Cr"];

const priceVal = (p) => {
  if (p.price.includes(" L"))
    return parseFloat(p.price.replace("₹", "").replace(" L", "")) / 100;
  return parseFloat(p.price.replace("₹", "").replace(" Cr", ""));
};

export function PropertiesSection() {
  const [city, setCity] = useState("All Cities");
  const [price, setPrice] = useState("All Prices");
  const [expanded, setExpanded] = useState(null);

  let filtered = PROPERTIES;
  if (city !== "All Cities") filtered = filtered.filter((p) => p.city === city);
  if (price === "Under 1.5Cr") filtered = filtered.filter((p) => priceVal(p) < 1.5);
  else if (price === "1.5–2.5Cr") filtered = filtered.filter((p) => priceVal(p) >= 1.5 && priceVal(p) <= 2.5);
  else if (price === "Above 2.5Cr") filtered = filtered.filter((p) => priceVal(p) > 2.5);

  const onEnquire = () => scrollToId("contact");

  return (
    <section id="properties" className="section section-cream">
      <div className="container">
        <FadeIn className="section-header" blur direction="up">
          <div className="section-eyebrow">
            <span className="line" />
            <span className="text">Featured Listings</span>
            <span className="line" />
          </div>
          <h2 className="section-title">
            Premium Properties Across <span className="gold">India</span>
          </h2>
          <p className="section-subtitle">
            Discover handpicked properties from India's most trusted
            developers — luxury apartments, premium villas, and investment-grade homes.
          </p>
          <span className="gold-divider" />
        </FadeIn>

        <FadeIn delay={0.1} blur scale>
          <div className="filter-group">
            <div className="filter-row">
              {CITIES.map((c) => (
                <button
                  key={c}
                  className={`filter-btn${city === c ? " active" : ""}`}
                  onClick={() => setCity(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="filter-row filter-row-secondary">
              {PRICE_FILTERS.map((f) => (
                <button
                  key={f}
                  className={`filter-btn filter-btn-sm${price === f ? " active" : ""}`}
                  onClick={() => setPrice(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="prop-grid">
          {filtered.length > 0 ? (
            filtered.map((p) => (
              <PropCard
                key={p.id}
                p={p}
                expanded={expanded === p.id}
                onToggle={() =>
                  setExpanded(expanded === p.id ? null : p.id)
                }
                onEnquire={onEnquire}
              />
            ))
          ) : (
            <div className="prop-empty">
              <p>No properties match your filters. Try adjusting your selection.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
