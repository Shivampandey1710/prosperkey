import { useState, useEffect, useRef } from "react";
import { scrollToId } from "../../utils/scroll";

export function Hero() {
  const [ready, setReady] = useState(false);
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => scrollToId(id);
  const parallax = Math.min(scrollY * 0.4, 300);
  const contentParallax = Math.min(scrollY * 0.15, 100);
  const opacity = Math.max(1 - scrollY / 700, 0);

  const words = ["YOUR", "IDEAL", "HOME", "AWAITS"];
  const words2 = ["INVEST", "TODAY"];

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Cinematic Background Image with Parallax */}
      <div
        className="hero-cinematic-bg"
        style={{ transform: `translateY(${parallax}px) scale(1.15)` }}
      >
        <img src="/hero-bg.png" alt="" className="hero-bg-image" />
      </div>

      {/* Gradient overlays for depth */}
      <div className="hero-overlay-gradient" />
      <div className="hero-overlay-vignette" />

      {/* Floating light streaks */}
      <div className="hero-light-streak hero-streak-1" />
      <div className="hero-light-streak hero-streak-2" />

      {/* Ambient gold particles */}
      <div className="hero-ambient-orb hero-amb-1" />
      <div className="hero-ambient-orb hero-amb-2" />
      <div className="hero-ambient-orb hero-amb-3" />

      <div
        className="hero-content"
        style={{
          opacity,
          transform: `translateY(${-contentParallax}px)`,
        }}
      >


        <h1 className="hero-title">
          <div className="hero-line-1">
            {words.map((word, i) => (
              <span key={i} style={{ display: "inline-block", marginRight: i < words.length - 1 ? "0.3em" : 0 }}>
                <span
                  className="hero-word"
                  style={{
                    transitionDelay: `${0.4 + i * 0.12}s`,
                    opacity: ready ? 1 : 0,
                    transform: ready ? "translateY(0) rotateX(0)" : "translateY(30px) rotateX(6deg)",
                    filter: ready ? "blur(0px)" : "blur(3px)",
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </div>
          <div className="hero-line-2">
            {words2.map((word, i) => (
              <span key={i} style={{ display: "inline-block", marginRight: i < words2.length - 1 ? "0.4em" : 0 }}>
                <span
                  className="hero-word"
                  style={{
                    transitionDelay: `${0.76 + i * 0.12}s`,
                    opacity: ready ? 1 : 0,
                    transform: ready ? "translateY(0) rotateX(0)" : "translateY(30px) rotateX(6deg)",
                    filter: ready ? "blur(0px)" : "blur(4px)",
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </div>

        </h1>

        <p
          className="hero-sub"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(20px)",
            filter: ready ? "blur(0px)" : "blur(3px)",
            transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 1.2s",
          }}
        >
        </p>

        <div
          className="hero-btns"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 1.5s",
          }}
        >
          <button className="btn-primary" onClick={() => go("properties")}>
            Explore Properties
          </button>
          <button className="btn-secondary white" onClick={() => go("contact")}>
            Contact Us
          </button>
        </div>

        <div
          className="hero-stats-glass"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 1.8s",
          }}
        >
          {[
            ["1000+", "Happy Families"],
            ["25+", "Premium Projects"],
            ["₹500Cr+", "Deals Closed"],
            ["4+", "Years of Trust"],
            ["5+", "Cities Served"],
          ].map(([v, l], i) => (
            <div key={l} className="hero-stat-glass" style={{ animationDelay: `${2 + i * 0.1}s` }}>
              <div className="hero-stat-value">{v}</div>
              <div className="hero-stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="hero-scroll"
        onClick={() => go("about")}
        style={{ opacity }}
      >
        <span className="hero-scroll-text">Scroll to Explore</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
