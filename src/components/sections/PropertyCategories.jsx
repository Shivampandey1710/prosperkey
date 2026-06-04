import { FadeIn } from "../ui/FadeIn";
import { PROPERTY_CATEGORIES } from "../../data/properties";

export function PropertyCategories() {
  return (
    <section id="categories" className="section section-white">
      <div className="container">
        <FadeIn className="section-header">
          <div className="section-eyebrow">
            <span className="line" />
            <span className="text">Explore By Category</span>
            <span className="line" />
          </div>
          <h2 className="section-title">
            Luxury Property <span className="gold">Categories</span>
          </h2>
          <p className="section-subtitle">
            From premium apartments to ultra-luxury residences — find the
            perfect property type that matches your lifestyle and investment goals.
          </p>
          <span className="gold-divider" />
        </FadeIn>

        <div className="cat-grid">
          {PROPERTY_CATEGORIES.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.08}>
              <div className="cat-card">
                <div className="cat-card-glow" />
                <div className="cat-icon">{cat.icon}</div>
                <h3 className="cat-title">{cat.title}</h3>
                <p className="cat-desc">{cat.desc}</p>
                <div className="cat-count">
                  <span className="cat-count-num">{cat.count}</span>
                  <span className="cat-count-label">Properties</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
