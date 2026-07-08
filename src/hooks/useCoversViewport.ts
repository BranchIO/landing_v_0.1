import { useEffect, useState } from "react";

/**
 * Returns true while the element matching `selector` covers the top of the
 * viewport — i.e. it has reached the top edge and still fills the screen.
 * Used to fade the navbar out while the green divider is the only thing on
 * screen. `reach` is the px line the element's top must cross (default 80,
 * roughly the navbar's bottom, so the fade starts as the green reaches it).
 */
export function useCoversViewport(selector: string, reach = 80): boolean {
  const [covers, setCovers] = useState(false);

  useEffect(() => {
    const check = () => {
      const el = document.querySelector(selector);
      if (!el) return setCovers(false);
      const r = el.getBoundingClientRect();
      // top has reached the navbar line AND the section still fills the screen
      setCovers(r.top <= reach && r.bottom >= window.innerHeight);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [selector, reach]);

  return covers;
}
