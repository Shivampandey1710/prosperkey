import { scrollToId } from "../../utils/scroll";
import { NAV_LINKS } from "../../data/properties";

export function Footer() {
  const go = (id) => scrollToId(id);

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <img src="/logo.png" alt="ProsperKey Realty" />
            <div className="footer-logo-text">
              <div className="footer-logo-name">ProsperKey Realty</div>
              <div className="footer-logo-sub">Pvt Ltd · Est. 2022</div>
            </div>
          </div>
          <p className="footer-desc">
            Helping Bangalore families find their dream homes since 2022.
            Trusted, transparent, always in your corner.
          </p>
          <div className="footer-social">
            <a href="#" className="footer-social-btn" aria-label="Facebook">f</a>
            <a href="#" className="footer-social-btn" aria-label="Instagram">✦</a>
            <a href="#" className="footer-social-btn" aria-label="LinkedIn">in</a>
            <a href="#" className="footer-social-btn" aria-label="YouTube">▶</a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Navigate</div>
          {NAV_LINKS.map(([id, lbl]) => (
            <div key={id} className="footer-link" onClick={() => go(id)}>{lbl}</div>
          ))}
        </div>
        <div>
          <div className="footer-col-title">Top Locations</div>
          {["Sarjapur Road", "Whitefield", "Electronic City", "Bannerghatta Road", "Hennur", "North Bangalore", "Devanahalli"].map(a => (
            <div key={a} className="footer-link">{a}</div>
          ))}
        </div>
        <div>
          <div className="footer-col-title">Contact</div>
          <a href="tel:+916360556232" className="footer-link">📞 +91 6360 556 232</a>
          <a href="mailto:info@prosperkey.in" className="footer-link">✉️ info@prosperkey.in</a>
          <p className="footer-address">
            BDA Complex, HSR Layout,<br />
            Bengaluru – 560102
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 ProsperKey Realty Pvt Ltd. All rights reserved.</p>
        <p>RERA projects only · Prices subject to change · T&amp;C apply</p>
      </div>
    </footer>
  );
}
