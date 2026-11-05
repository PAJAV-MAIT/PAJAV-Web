import { useLayoutEffect } from "react";

// Shrinks a big headline just enough that its widest line fits its box.
// Re-runs on resize and once web fonts finish loading.
export default function useFitText(ref, lineSelector) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;

    const fit = () => {
      el.style.fontSize = "";
      const lines = [...el.querySelectorAll(lineSelector)];
      const box = el.clientWidth;
      const widest = Math.max(...lines.map((l) => l.scrollWidth));
      if (widest > box) {
        const size = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = `${Math.floor(size * (box / widest) * 0.98)}px`;
      }
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    };

    fit();
    window.addEventListener("resize", schedule);
    document.fonts?.ready.then(schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", schedule);
    };
  }, [ref, lineSelector]);
}
