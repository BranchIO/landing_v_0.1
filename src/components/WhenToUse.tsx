import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

/* "When do you use it" walk.

   A pinned two-column feature story (modelled on Granola's before/during/after
   block). The left rail lists the six things Branch does; each label has a bar
   that fills as you scroll through that step. The right side crossfades a short
   blurb + a little UI mock for the step you're on.

   How the scroll drives it:
   - `.wtu-walk` is tall; `.wtu-stage` sticks for its whole length.
   - We map scroll-into-the-walk onto t ∈ [0, N]. Panel/step i owns t ∈ [i,i+1).
   - `--t` (a float) is written to the grid every frame → the fill bars are pure
     CSS (scaleX(clamp(0, t - i, 1))), so they track the scrollbar exactly with
     no React churn.
   - `active` (an int) is React state, changing only when you cross into a new
     step (six times total) → the right panel crossfades via a CSS transition,
     which the emil playbook prefers over scrubbing opacity by hand. */

type Step = {
  nav: string;
  title: string;
  blurb: string;
  mock: ReactNode;
};

/* --- little UI mocks, one per step. Same cream/green language as the phone. --- */

function Avatar({ src, i }: { src?: string; i?: number }) {
  if (src) return <img className="wtu-av" src={src} alt="" loading="lazy" />;
  return <span className="wtu-av wtu-av--ph">{i}</span>;
}

const MockSearch = (
  // Proactively searches your network — a goal, and matches surfacing under it
  <div className="wtu-card">
    <div className="wtu-goal">
      <span className="wtu-goal-label">Your goal</span>
      <span className="wtu-goal-chip">Raise a seed round ✦</span>
    </div>
    <div className="wtu-scanline">
      <span className="wtu-dot" /> Watching your network…
    </div>
    <ul className="wtu-list">
      <li className="wtu-row" style={{ "--i": 0 } as CSSProperties}>
        <Avatar src="/team/team-3.jpg" />
        <div className="wtu-row-main">
          <span className="wtu-row-name">Priya Nair</span>
          <span className="wtu-row-sub">Partner · Atlas Ventures</span>
        </div>
        <span className="wtu-tag">New match</span>
      </li>
      <li className="wtu-row" style={{ "--i": 1 } as CSSProperties}>
        <Avatar src="/team/team-5.jpg" />
        <div className="wtu-row-main">
          <span className="wtu-row-name">Marcus Bell</span>
          <span className="wtu-row-sub">Angel · ex-Stripe</span>
        </div>
        <span className="wtu-tag">New match</span>
      </li>
    </ul>
  </div>
);

const MockWho = (
  // Who you should meet — ask, get the best-suited people back
  <div className="wtu-card">
    <div className="wtu-ask">Who can help me hire a founding engineer?</div>
    <div className="wtu-answer-label">3 people best placed to help</div>
    <ul className="wtu-list">
      <li className="wtu-row" style={{ "--i": 0 } as CSSProperties}>
        <Avatar src="/team/team-2.jpg" />
        <div className="wtu-row-main">
          <span className="wtu-row-name">Dev Shah</span>
          <span className="wtu-row-sub">Runs a 40-eng team · met twice</span>
        </div>
        <span className="wtu-score">96%</span>
      </li>
      <li className="wtu-row" style={{ "--i": 1 } as CSSProperties}>
        <Avatar src="/team/team-6.jpg" />
        <div className="wtu-row-main">
          <span className="wtu-row-name">Lena Ortiz</span>
          <span className="wtu-row-sub">Angel in dev-tools</span>
        </div>
        <span className="wtu-score">89%</span>
      </li>
    </ul>
  </div>
);

const MockWhy = (
  // Why you should meet them — real-time intel on a person
  <div className="wtu-card">
    <div className="wtu-profile">
      <Avatar src="/team/team-4.jpg" />
      <div className="wtu-row-main">
        <span className="wtu-row-name">Sarah Chen</span>
        <span className="wtu-row-sub">VP Product · Northwind</span>
      </div>
      <span className="wtu-live">
        <span className="wtu-dot" /> live
      </span>
    </div>
    <ul className="wtu-facts">
      <li>
        <span className="wtu-facts-k">Now</span> Just posted about scaling their
        AI team
      </li>
      <li>
        <span className="wtu-facts-k">Warm</span> You both know Priya Nair
      </li>
      <li>
        <span className="wtu-facts-k">Timing</span> Hiring for 3 roles this
        quarter
      </li>
    </ul>
  </div>
);

const MockHow = (
  // How you should meet them — A/B two openers in your voice
  <div className="wtu-card">
    <div className="wtu-ab">
      <div className="wtu-variant wtu-variant--a">
        <span className="wtu-variant-tag">A</span>
        <p>Hey Sarah — loved your post on scaling AI teams. Mind if I ask…</p>
        <span className="wtu-variant-rate">62% reply</span>
      </div>
      <div className="wtu-variant wtu-variant--b">
        <span className="wtu-variant-tag">B</span>
        <p>Sarah! Priya said we should talk — I'm building in your space.</p>
        <span className="wtu-variant-rate wtu-variant-rate--win">
          71% reply ✦
        </span>
      </div>
    </div>
    <div className="wtu-send">
      A/B in your voice
      <span className="wtu-send-btn">Send B ↑</span>
    </div>
  </div>
);

const MockWarm = (
  // Ensure your contacts stay warm — everyone followed up, nothing dropped
  <div className="wtu-card">
    <div className="wtu-warm-head">
      Follow-ups <span className="wtu-warm-count">on track</span>
    </div>
    <ul className="wtu-list">
      <li className="wtu-row" style={{ "--i": 0 } as CSSProperties}>
        <Avatar src="/team/team-1.jpg" />
        <div className="wtu-row-main">
          <span className="wtu-row-name">Alex Park</span>
          <span className="wtu-row-sub">Nudged 2 days ago</span>
        </div>
        <span className="wtu-check">✓</span>
      </li>
      <li className="wtu-row" style={{ "--i": 1 } as CSSProperties}>
        <Avatar src="/team/team-7.jpg" />
        <div className="wtu-row-main">
          <span className="wtu-row-name">Mina Rao</span>
          <span className="wtu-row-sub">Reply drafted for you</span>
        </div>
        <span className="wtu-tag wtu-tag--soft">Ready</span>
      </li>
      <li className="wtu-row" style={{ "--i": 2 } as CSSProperties}>
        <Avatar src="/team/team-5.jpg" />
        <div className="wtu-row-main">
          <span className="wtu-row-name">Marcus Bell</span>
          <span className="wtu-row-sub">Check-in scheduled Fri</span>
        </div>
        <span className="wtu-check">✓</span>
      </li>
    </ul>
  </div>
);

const MockNetwork = (
  // Tap into Branch's network — Branch spins up the intro group chat
  <div className="wtu-card">
    <div className="wtu-intro">
      <div className="wtu-intro-avs">
        <Avatar src="/team/team-2.jpg" />
        <Avatar src="/team/team-4.jpg" />
        <Avatar src="/team/team-6.jpg" />
      </div>
      <span className="wtu-intro-title">Branch made an intro</span>
    </div>
    <div className="wtu-thread">
      <div className="wtu-msg wtu-msg--branch">
        You + Sarah are both looking for a design partner — meet 👋
      </div>
      <div className="wtu-msg wtu-msg--them">Perfect timing, let's chat!</div>
    </div>
    <div className="wtu-intro-foot">
      <span className="wtu-dot" /> Group chat created
    </div>
  </div>
);

const STEPS: Step[] = [
  {
    nav: "Proactively searches your network",
    title: "Proactively searches your network",
    blurb:
      "Give Branch your goals and it keeps a constant eye on your network, surfacing the most relevant people you should be talking to.",
    mock: MockSearch,
  },
  {
    nav: "Who you should meet",
    title: "Who you should meet",
    blurb:
      "Ask questions about your network and Branch finds the people best suited to help you reach your goals.",
    mock: MockWho,
  },
  {
    nav: "Why you should meet them",
    title: "Why you should meet them",
    blurb:
      "Ask about anyone in your network and get real-time intel on them — what they're doing now and why it matters.",
    mock: MockWhy,
  },
  {
    nav: "How you should meet them",
    title: "How you should meet them",
    blurb:
      "Reach out in a way that works for you — Branch drafts in your voice and A/B tests different styles of message.",
    mock: MockHow,
  },
  {
    nav: "Ensure your contacts stay warm",
    title: "Ensure your contacts stay warm forever",
    blurb:
      "Branch makes sure everyone you've spoken to is followed up, so every lead stays warm and nothing is ever left cold.",
    mock: MockWarm,
  },
  {
    nav: "Tap into Branch's network",
    title: "Tap into Branch's network",
    blurb:
      "When we spot someone we're uniquely able to connect you with, we spin up a group chat with you both and get things going.",
    mock: MockNetwork,
  },
];

export default function WhenToUse() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const steps = Array.from(
      root.querySelectorAll<HTMLElement>(".wtu-step")
    );
    const fills = Array.from(
      root.querySelectorAll<HTMLElement>(".wtu-fill")
    );

    let raf = 0;
    let last = -1;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      // the focus line the steps pass through; a step's bar fills as it
      // travels from this line up by its own height, and it's "active" while
      // its top sits at or above the line.
      const refY = vh * 0.42;
      let act = 0;
      for (let i = 0; i < steps.length; i++) {
        const r = steps[i].getBoundingClientRect();
        let f = (refY - r.top) / r.height;
        f = f < 0 ? 0 : f > 1 ? 1 : f;
        fills[i]?.style.setProperty("--f", f.toFixed(4));
        if (r.top <= refY) act = i;
      }
      if (act !== last) {
        last = act;
        setActive(act);
      }
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

  // click a rail label → bring that step to the centre of the screen
  const goTo = (i: number) => {
    const root = rootRef.current;
    root
      ?.querySelectorAll<HTMLElement>(".wtu-step")
      [i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="wtu" ref={rootRef}>
      {/* heading sits top-right, over the right column, above the walk */}
      <div className="wtu-top">
        <h2 className="wtu-lead">
          Branch proactively gives you the who, why and what of the people you
          should meet.
        </h2>
      </div>

      <div className="wtu-inner">
        {/* left column — the rail, stays steady while the right scrolls */}
        <aside className="wtu-side">
          <nav className="wtu-rail" aria-label="What Branch does">
            {STEPS.map((s, i) => (
              <button
                key={s.nav}
                type="button"
                className="wtu-railitem"
                data-active={i === active ? "true" : "false"}
                onClick={() => goTo(i)}
              >
                <span className="wtu-railtext">{s.nav}</span>
                <span className="wtu-track">
                  <span className="wtu-fill" />
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* right column — the steps you scroll through */}
        <div className="wtu-flow">
          {STEPS.map((s) => (
            <article key={s.title} className="wtu-step">
              <h3 className="wtu-step-title">{s.title}</h3>
              <p className="wtu-step-blurb">{s.blurb}</p>
              <div className="wtu-media">{s.mock}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
