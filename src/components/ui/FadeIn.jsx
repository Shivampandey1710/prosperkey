import { useRef } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";

export function FadeIn({ children, delay = 0, className = "", direction = "up", blur = false, scale = false }) {
  const ref = useRef(null);
  const vis = useOnScreen(ref);

  const transforms = [];
  if (direction === "up") transforms.push(vis ? "translateY(0)" : "translateY(24px)");
  if (direction === "down") transforms.push(vis ? "translateY(0)" : "translateY(-24px)");
  if (direction === "left") transforms.push(vis ? "translateX(0)" : "translateX(32px)");
  if (direction === "right") transforms.push(vis ? "translateX(0)" : "translateX(-32px)");
  if (scale) transforms.push(vis ? "scale(1)" : "scale(0.97)");

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: transforms.join(" ") || "none",
        filter: blur ? (vis ? "blur(0px)" : "blur(4px)") : "none",
        transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, filter 1s ease ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
