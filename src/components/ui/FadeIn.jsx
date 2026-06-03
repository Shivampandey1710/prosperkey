import { useRef } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";

export function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const vis = useOnScreen(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
