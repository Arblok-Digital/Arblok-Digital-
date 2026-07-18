import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Articles from "./components/Articles";
import AiConsultant from "./components/AiConsultant";
import Footer from "./components/Footer";
import { LanguageProvider } from "./LanguageContext";

function ProfilePage() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
}

function ScrollToAnchor() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return null;
}

function OldHashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#articles") {
      navigate("/articles", { replace: true });
    } else if (hash === "#ai-consultant") {
      navigate("/consultant", { replace: true });
    }
  }, [navigate]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      <OldHashRedirect />
      <ScrollToAnchor />
      <Navbar />
      <main className="transition-all duration-300">
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/articles" element={<div className="animate-fade-in"><Articles /></div>} />
          <Route path="/consultant" element={<div className="animate-fade-in pt-12"><AiConsultant /></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}
