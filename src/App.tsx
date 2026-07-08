import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import WhenToUse from "./components/WhenToUse";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* green divider — the phrase rises from behind the green and settles on it */}
      <Divider />
      {/* "when do you use it" — pinned feature walk with scroll-filling rail */}
      <WhenToUse />
      {/*
        TODO: Build the last page — a photo of me and Leom showing how we met.
        The story: the most important thing we did was reach out to people.
        Reaching out was everything. Make it the green box, and do it beautifully.
      */}
    </>
  );
}
