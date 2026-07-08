import { useEffect, useRef } from "react";

/* Green divider section. As you scroll into it, the phrase rises from behind
   the green (peeking out over an invisible "fold") and settles on top of the
   green, then holds before the next section.

   Layering trick — a same-colour green "sandwich" so the text can read as both
   *behind* the green (at the start) and *on top of* it (at the end) without any
   z-index flip:
     .divider-stage   green surface behind the text   (z-index 0, the backdrop)
     .divider-phrase  the text                         (z-index 1, in between)
     .divider-mask    identical green in front         (z-index 2, the fold)
   Both greens match, so the seam is invisible: the phrase emerges from behind
   the mask's top edge and comes to rest on the backdrop — looking like one
   green divider with the words rising out of it. */
export default function Divider() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      // show it settled; no scroll-driven motion
      el.style.setProperty("--dp", "1");
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // how far we've scrolled into the pinned section (0 -> pin room)
      const scrolled = Math.min(Math.max(-rect.top, 0), el.offsetHeight - vh);
      // play the reveal over the first ~80% of a viewport of scroll, then hold
      // at 1 for the remainder so it *settles* before the section unpins.
      let dp = Math.min(scrolled / (vh * 0.8), 1);
      // smoothstep -> eases into the settle instead of a linear stop
      dp = dp * dp * (3 - 2 * dp);
      el.style.setProperty("--dp", dp.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="divider-scroll" ref={ref}>
      <div className="divider-stage">
        <h2 className="divider-phrase">
          Because outcomes are a function of how many people you meet
        </h2>
        {/* identical-green fold the phrase peeks out from behind */}
        <div className="divider-mask" aria-hidden="true" />
      </div>
    </section>
  );
}
