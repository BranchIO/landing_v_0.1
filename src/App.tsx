import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Navbar />
      <header className="hero">
        <Hero />
      </header>
      {/* spacer so the navbar scroll transition is demonstrable */}
      <section style={{ height: "120vh", background: "#ffffff" }} />
    </>
  );
}
