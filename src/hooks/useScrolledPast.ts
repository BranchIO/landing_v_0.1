import { useEffect, useState } from "react";

/**
 * Returns true once the element matching `selector` has been scrolled up past
 * the top of the viewport. `offset` is the px line the element's bottom edge
 * must cross; pass a function to compute it live (e.g. the navbar height).
 */
export function useScrolledPast(
  selector: string,
  offset: number | (() => number) = 0
): boolean {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const check = () => {
      const el = document.querySelector(selector);
      if (!el) return;
      const line = typeof offset === "function" ? offset() : offset;
      setPast(el.getBoundingClientRect().bottom <= line);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [selector, offset]);

  return past;
}
