import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import FloatingNav from "./components/FloatingNav";

export default function App() {
  return (
    <div className="main-bg min-h-screen text-white">
      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <FloatingNav />
    </div>
  );
}