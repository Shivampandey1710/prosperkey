import { useState } from "react";
import { scrollToId } from "../../utils/scroll";
import { NAV_LINKS } from "../../data/properties";

export { NAV_LINKS };

export function Navbar({ activeNav }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => go("home")}>
          <img src="/logo.png" alt="ProsperKey Realty" />
          <div className="nav-logo-text">
            <div className="nav-logo-name">ProsperKey</div>
            <div className="nav-logo-sub">Realty Pvt Ltd</div>
          </div>
        </div>
        <div className={`nav-links${menuOpen ? " open" : ""}`}>
          {NAV_LINKS.map(([id, lbl]) => (
            <button
              key={id}
              className={`nav-link${activeNav === id ? " active" : ""}`}
              onClick={() => go(id)}
            >
              {lbl}
            </button>
          ))}
          <button className="nav-cta" onClick={() => go("contact")}>
            Enquire Now
          </button>
        </div>
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`burger-line${menuOpen ? " rot1" : ""}`} />
          <span className={`burger-line${menuOpen ? " hide" : ""}`} />
          <span className={`burger-line${menuOpen ? " rot2" : ""}`} />
        </button>
      </div>
    </nav>
  );
}
