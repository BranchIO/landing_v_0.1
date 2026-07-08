import Logo from "./Logo";
import { useScrolled } from "../hooks/useScrolled";
import { useScrolledPast } from "../hooks/useScrolledPast";
import { useCoversViewport } from "../hooks/useCoversViewport";

export default function Navbar() {
  const scrolled = useScrolled(24);
  // green only once the hero "Get coffee on us!" button slips under the navbar
  const ctaActive = useScrolledPast(
    ".cta-primary",
    () => document.querySelector(".nav-wrap")?.getBoundingClientRect().bottom ?? 0
  );
  // hide the navbar while the green divider fills the screen, so the phrase is
  // the only thing on screen
  const hidden = useCoversViewport(".divider-scroll");

  return (
    <div
      className={`nav-wrap${scrolled ? " scrolled" : ""}${
        ctaActive ? " cta-active" : ""
      }${hidden ? " nav-hidden" : ""}`}
    >
      <nav className="nav">
        <Logo />
        <button className="nav-cta" type="button">
          Want to meet us?
        </button>
      </nav>
    </div>
  );
}
