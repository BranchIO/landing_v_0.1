import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

/* incoming app icons — the channels you meet people through. The belt runs
   continuously and is pre-filled (negative --d delays spread the items evenly
   along the path), so it's always fully populated — the whole belt just fades
   in/out with scroll rather than streaming in empty from the left. */
const ICONS = [
  "/icons/linkedin.png",
  "/icons/instagram.png",
  "/icons/x.png?v=2", // ?v=2 busts the cached old X logo
  "/icons/spiral.png",
  "/icons/star.png",
];
const BELT_DUR = 6; // seconds per traversal (in-path or out-path) — sync with --flow-dur

/* outcomes that stream single-file out the other side of the phone, up-right */
const OUTCOMES = [
  "cracked engineer found",
  "fundraising closed",
  "new customer acquired",
  "potential angel found",
  "new advisor met",
];
const OUT_OFFSET = BELT_DUR; // phase gap between the two belts so an outcome sits
// mid-emergence as an icon reaches the phone (keeps the line reading continuous)

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      el.style.setProperty("--p", "0");
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // how far we've scrolled into the section
      const scrolled = Math.min(Math.max(-rect.top, 0), el.offsetHeight - vh);
      // phase 1: play the phone morph over the first viewport, then hold at 1
      let p = Math.min(scrolled / vh, 1);
      // smoothstep for an eased, non-linear feel
      p = p * p * (3 - 2 * p);
      el.style.setProperty("--p", p.toFixed(4));
      // phase 2: once the phone has centred, reveal the (self-running) belt +
      // heading over the next ~half viewport of scroll.
      let p2 = Math.min(Math.max((scrolled / vh - 1) / 0.45, 0), 1);
      p2 = p2 * p2 * (3 - 2 * p2);
      el.style.setProperty("--p2", p2.toFixed(4));
      // the belt runs continuously and is pre-filled; its opacity fades in/out
      // with --p2 (see CSS), so the whole belt — icons and outcomes — fades in
      // once page 2 pins and fades out as you scroll back up.
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
    <section className="hero-scroll" ref={scrollRef}>
      {/* page 1 copy — scrolls away normally as you move to page 2 */}
      <div className="hero-copy">
        <div className="hero-left-inner">
          <h1 className="headline">
            The AI assistant that helps you meet more people
          </h1>
          <p className="subtitle">
            Everything about your network.
            <br />
            Controlled from your messages.
          </p>
          <div className="cta-row">
            <button className="cta-primary" type="button">
              Get coffee on us!
            </button>
          </div>
        </div>
      </div>

      {/* sticky stage — the phone stays in view and travels down into the
          centre of the page below the hero as the copy scrolls away */}
      <div className="hero-stage">
        {/* page 2 heading — sits on the left, revealed once the phone locks in */}
        <h2 className="outcomes-heading">By using the tools you already have.</h2>

        {/* one continuous line: icons ride single-file up from the bottom-left,
            through the phone, and the outcomes ride out and up on the right.
            Even negative delays pre-fill the belt and keep exact spacing. */}
        <div className="flow" aria-hidden="true">
          {ICONS.map((src, i) => (
            <div
              key={`in-${i}`}
              className="flow-item flow-in"
              style={
                { "--d": `${(-i * BELT_DUR) / ICONS.length}s` } as CSSProperties
              }
            >
              <div className="flow-tile">
                <img src={src} alt="" loading="lazy" />
              </div>
            </div>
          ))}

          {OUTCOMES.map((label, i) => (
            <div
              key={`out-${i}`}
              className="flow-item flow-out"
              style={
                {
                  "--d": `${(-i * BELT_DUR) / OUTCOMES.length - OUT_OFFSET}s`,
                } as CSSProperties
              }
            >
              <span className="flow-pill">{label}</span>
            </div>
          ))}
        </div>

        <div className="collage" aria-hidden="true">
          {/* team photos, fanned out behind the phone */}
          <figure className="photo photo--1">
            <div className="photo-inner">
              <img src="/team/team-1.jpg" alt="" loading="eager" />
            </div>
          </figure>
          <figure className="photo photo--2">
            <div className="photo-inner">
              <img src="/team/team-5.jpg" alt="" loading="eager" />
            </div>
          </figure>
          <figure className="photo photo--3">
            <div className="photo-inner">
              <img src="/team/team-3.jpg" alt="" loading="eager" />
            </div>
          </figure>
          <figure className="photo photo--4">
            <div className="photo-inner">
              <img src="/team/team-2.jpg" alt="" loading="eager" />
            </div>
          </figure>
          <figure className="photo photo--5">
            <div className="photo-inner">
              <img src="/team/team-4.jpg" alt="" loading="eager" />
            </div>
          </figure>
          <figure className="photo photo--6">
            <div className="photo-inner">
              <img src="/team/team-6.jpg" alt="" loading="eager" />
            </div>
          </figure>
          <figure className="photo photo--7">
            <div className="photo-inner">
              <img src="/team/team-7.jpg" alt="" loading="eager" />
            </div>
          </figure>

          {/* screen in front — drop a product demo video into .phone-screen */}
          <div className="phone">
            <div className="phone-screen">
              {/*
                To use a real demo video, replace the .app-demo block below with:
                <video
                  className="app-demo-video"
                  src="/team/app-demo.mp4"
                  poster="/team/app-demo-poster.jpg"
                  autoPlay muted loop playsInline
                />
              */}
              <div className="app-demo">
                <div className="app-bar">
                  <span className="app-back">‹</span>
                  <span className="app-title">Branch</span>
                  <span className="app-live" />
                </div>
                <div className="app-thread">
                  <div className="bubble bubble--in">
                    You met <b>Sarah Chen</b> at the AI Summit 👋
                  </div>
                  <div className="bubble bubble--in">
                    Want me to draft a follow-up?
                  </div>
                  <div className="bubble bubble--out">
                    yes — mention the demo
                  </div>
                  <div className="app-card">
                    <span className="app-card-check">✓</span>
                    <div>
                      <div className="app-card-title">Follow-up sent</div>
                      <div className="app-card-sub">Saved to your network</div>
                    </div>
                  </div>
                  <div className="bubble bubble--typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="app-compose">
                  <span className="app-compose-field">Ask Branch anything…</span>
                  <span className="app-compose-send">↑</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
