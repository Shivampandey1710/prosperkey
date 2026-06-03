import { useRef } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";

export function PropCard({ p, expanded, onToggle, onEnquire }) {
  const ref = useRef(null);
  const vis = useOnScreen(ref);
  return (
    <div
      ref={ref}
      className="prop-card"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
      onClick={onToggle}
    >
      <div className="prop-card-header">
        <div className="prop-card-corner" />
        <div className="prop-card-gold-line" />
        <div className="prop-card-tags">
          <span className="tag-gold">{p.tag1}</span>
          <span className="tag-light">{p.tag2}</span>
        </div>
        <h3 className="prop-card-name">{p.name}</h3>
        <p className="prop-card-loc">📍 {p.loc}</p>
      </div>
      <div className="prop-card-body">
        <div className="prop-card-meta">
          {[
            ["BHK", p.bhk],
            ["Area", p.area],
            ["Land", p.acres + " · " + p.units],
            ["Possession", p.pos],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="meta-label">{k}</div>
              <div className="meta-value">{v}</div>
            </div>
          ))}
        </div>
        <div className="prop-card-footer">
          <div>
            <div className="meta-label">Starting Price</div>
            <div className="prop-price">
              {p.price} <span className="prop-onwards">onwards</span>
            </div>
          </div>
          <button className={expanded ? "btn-explore active" : "btn-explore"}>
            {expanded ? "CLOSE ▲" : "EXPLORE ▼"}
          </button>
        </div>
        {expanded && (
          <div className="prop-expanded">
            <p className="expand-highlight">
              ✦ {p.highlight} &nbsp;·&nbsp; {p.floors} Floors
            </p>
            <button
              className="btn-enquire-prop"
              onClick={(e) => {
                e.stopPropagation();
                onEnquire();
              }}
            >
              Enquire About This Property →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
