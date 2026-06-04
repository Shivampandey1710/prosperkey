import { useState, useEffect } from "react";

export function WelcomeScreen({ onFinish }) {
  const [phase, setPhase] = useState(0);
  // phase 0 = logo reveal, 1 = text reveal, 2 = fade out

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 2200);
    const t3 = setTimeout(() => onFinish(), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onFinish]);

  return (
    <div className={`welcome-screen${phase === 2 ? " welcome-exit" : ""}`}>
      <div className="welcome-bg-pattern" />
      <div className="welcome-orb welcome-orb-1" />
      <div className="welcome-orb welcome-orb-2" />

      <div className="welcome-content">
        <div className={`welcome-logo${phase >= 0 ? " welcome-reveal" : ""}`}>
          <img src="/logo.png" alt="ProsperKey Realty" />
        </div>

        <div className={`welcome-text${phase >= 1 ? " welcome-reveal" : ""}`}>
          <h1 className="welcome-title">Welcome To ProsperKey Realty</h1>
          <div className="welcome-divider" />
          <p className="welcome-subtitle">Unlocking Premium Living Across India</p>
        </div>

        <div className={`welcome-loader${phase >= 1 ? " welcome-reveal" : ""}`}>
          <div className="welcome-loader-bar">
            <div className="welcome-loader-fill" />
          </div>
        </div>
      </div>

      <div className="welcome-corner welcome-corner-tl" />
      <div className="welcome-corner welcome-corner-tr" />
      <div className="welcome-corner welcome-corner-bl" />
      <div className="welcome-corner welcome-corner-br" />
    </div>
  );
}
