import { useRef, useState } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";

export function PropCard({ p, expanded, onToggle, onEnquire }) {
  const ref = useRef(null);
  const vis = useOnScreen(ref);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -4,
      y: (x - 0.5) * 4,
    });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      className="prop-card"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.x !== 0 || tilt.y !== 0 ? 1.02 : 1}) translateY(${tilt.x !== 0 || tilt.y !== 0 ? -6 : 0}px)`
          : "perspective(800px) translateY(40px) rotateX(4deg)",
        transition: tilt.x === 0 && tilt.y === 0
          ? "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1), box-shadow 0.8s cubic-bezier(0.22,1,0.36,1)"
          : "transform 0.15s ease-out, box-shadow 0.3s ease",
        boxShadow: tilt.x !== 0 || tilt.y !== 0
          ? "0 24px 60px rgba(0,0,0,0.08), 0 8px 20px rgba(201,162,39,0.06)"
          : undefined,
      }}
      onClick={onToggle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glass reflection streak on hover */}
      <div
        className="prop-card-reflection"
        style={{
          opacity: tilt.x !== 0 || tilt.y !== 0 ? 0.15 : 0,
          transform: `translateX(${tilt.y * 10}px)`,
        }}
      />

      <div className="prop-card-header">
        <div className="prop-card-corner" />
        <div className="prop-card-gold-line" />
        <div className="prop-card-tags">
          <span className="tag-gold">{p.tag1}</span>
          <span className="tag-light">{p.tag2}</span>
          {p.city && <span className="tag-light">{p.city}</span>}
        </div>
        <h3 className="prop-card-name">{p.name}</h3>
        {p.builder && <p className="prop-card-builder">by {p.builder}</p>}
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
            {expanded ? "CLOSE ▲" : "VIEW DETAILS ▼"}
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
