import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import FloatingNav from "./components/FloatingNav";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="main-bg min-h-screen text-white">
      <Navbar />

      {activeTab === "home" && (
        <>
          <Hero />
          <Stats />
          <Features />
        </>
      )}

      {activeTab === "signin" && (
        <LoginPage />
      )}

      <FloatingNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}