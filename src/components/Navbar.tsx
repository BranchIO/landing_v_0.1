import Logo from "./Logo";
import { useScrolled } from "../hooks/useScrolled";

export default function Navbar() {
  const scrolled = useScrolled(24);

  return (
    <div className={`nav-wrap${scrolled ? " scrolled" : ""}`}>
      <nav className="nav">
        <Logo />
        <button className="nav-cta" type="button">
          Start by meeting us!
        </button>
      </nav>
    </div>
  );
}
