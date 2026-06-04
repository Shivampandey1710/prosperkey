import { FadeIn } from "../ui/FadeIn";

const CITIES = [
  {
    name: "Bengaluru",
    tagline: "Silicon Valley of India",
    projects: "25+",
    potential: "Very High",
    growth: "22%",
    image: "/city-bengaluru.png",
  },
  {
    name: "Hyderabad",
    tagline: "City of Pearls",
    projects: "12+",
    potential: "High",
    growth: "20%",
    image: "/city-hyderabad.png",
  },
  {
    name: "Mumbai",
    tagline: "Financial Capital",
    projects: "15+",
    potential: "Very High",
    growth: "18%",
    image: "/city-mumbai.png",
  },
  {
    name: "Delhi NCR",
    tagline: "National Capital Region",
    projects: "18+",
    potential: "High",
    growth: "15%",
    image: "/city-delhi.png",
  },
  {
    name: "Pune",
    tagline: "Oxford of the East",
    projects: "10+",
    potential: "High",
    growth: "17%",
    image: "/city-pune.png",
  },
];

export function PremiumCities() {
  return (
    <section id="cities" className="section section-white cities-section">
      <div className="container">
        <FadeIn className="section-header">
          <div className="section-eyebrow">
            <span className="line" />
            <span className="text">Cities We Serve</span>
            <span className="line" />
          </div>
          <h2 className="section-title">
            Explore Opportunities Across <span className="gold">India's Top Cities</span>
          </h2>
          <p className="section-subtitle">
            Handpicked luxury properties and investment opportunities across
            India's fastest growing real estate destinations.
          </p>
          <span className="gold-divider" />
        </FadeIn>

        <div className="cities-grid cities-grid-5">
          {CITIES.map((city, i) => (
            <FadeIn key={city.name} delay={i * 0.08}>
              <div className="city-card city-card-img">
                <img
                  src={city.image}
                  alt={`${city.name} skyline`}
                  className="city-card-bg"
                />
                <div className="city-card-overlay" />
                <div className="city-card-content">
                  <h3 className="city-name">{city.name}</h3>
                  <p className="city-tagline">{city.tagline}</p>
                  <div className="city-stats">
                    <div className="city-stat-item">
                      <span className="city-stat-val">{city.projects}</span>
                      <span className="city-stat-lbl">Projects</span>
                    </div>
                    <div className="city-stat-item">
                      <span className="city-stat-val">↑{city.growth}</span>
                      <span className="city-stat-lbl">Growth</span>
                    </div>
                  </div>
                  <div className="city-potential">
                    <span className="city-potential-dot" />
                    {city.potential} Potential
                  </div>
                  <button className="city-explore-btn" onClick={() => {
                    const el = document.getElementById("properties");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}>
                    Explore Properties →
                  </button>
                </div>
                <div className="city-card-gold-line" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
