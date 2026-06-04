import { useState, useEffect, useRef } from "react";

export function useCountUp(target, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;

    const num = parseInt(target.replace(/[^0-9]/g, ""), 10) || 0;
    if (num === 0) { setCount(0); return; }

    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [target, duration, trigger]);

  return count;
}
