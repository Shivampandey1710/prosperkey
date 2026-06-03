import { useState } from "react";
import { FadeIn } from "../ui/FadeIn";
import { PROPERTIES } from "../../data/properties";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    prop: "",
    msg: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", email: "", prop: "", msg: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section section-white">
      <div className="container">
        <FadeIn className="section-header">
          <div className="section-eyebrow">
            <span className="line" />
            <span className="text">Get In Touch</span>
            <span className="line" />
          </div>
          <h2 className="section-title">
            Find Your <span className="gold">Dream Home</span> Today
          </h2>
          <p className="section-subtitle">
            Ready to start your journey? Fill out the form below and our expert
            team will get back to you within 24 hours.
          </p>
          <span className="gold-divider" />
        </FadeIn>

        <div className="contact-grid">
          <FadeIn>
            <div className="contact-info-card">
              <div className="contact-info-pattern" />
              <div className="contact-info-content">
                <h3 className="contact-company-name">
                  ProsperKey Realty Pvt Ltd
                </h3>
                <div className="contact-company-divider" />
                <div className="contact-details">
                  {[
                    [
                      "📍",
                      "Office Address",
                      "BDA Complex, HSR Layout, Bengaluru – 560102",
                    ],
                    ["📞", "Phone", "+91 6360 556 232"],
                    ["✉️", "Email", "info@prosperkey.in"],
                    ["⏰", "Working Hours", "Mon–Sat: 10:00 AM – 7:00 PM"],
                  ].map(([ic, lbl, val]) => (
                    <div key={lbl} className="contact-row">
                      <div className="contact-icon-circle">{ic}</div>
                      <div>
                        <div className="contact-label">{lbl}</div>
                        <div className="contact-value">{val}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/916360556232?text=Hi%20ProsperKey,%20I'm%20interested%20in%20a%20property%20in%20Bangalore."
                  className="whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="contact-form-card">
              {sent ? (
                <div className="form-success">
                  <div className="success-icon">✅</div>
                  <h3 className="success-title">Thank You!</h3>
                  <p className="success-text">
                    Our team will reach out within 24 hours. We look forward to
                    finding your dream home!
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="contact-form">
                  <h3 className="form-title">Send Us a Message</h3>
                  <div className="form-field">
                    <label className="form-label">Full Name *</label>
                    <input
                      className="form-input"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Phone *</label>
                      <input
                        className="form-input"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Email</label>
                      <input
                        className="form-input"
                        type="email"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Interested In</label>
                    <select
                      className="form-input"
                      value={form.prop}
                      onChange={(e) =>
                        setForm({ ...form, prop: e.target.value })
                      }
                    >
                      <option value="">— Select a property —</option>
                      {PROPERTIES.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-input"
                      rows={4}
                      placeholder="Tell us your requirements..."
                      value={form.msg}
                      onChange={(e) =>
                        setForm({ ...form, msg: e.target.value })
                      }
                    />
                  </div>
                  <button type="submit" className="form-submit">
                    Send Enquiry →
                  </button>
                  <p className="form-note">
                    We respond within 24 hours · No spam, ever
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
