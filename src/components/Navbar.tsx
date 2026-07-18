import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Terminal, Menu, X, ArrowUpRight, Cpu } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTo = (path: string, anchor?: string) => {
    setIsOpen(false);
    if (anchor) {
      navigate(path + "#" + anchor);
    } else {
      navigate(path);
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navTo("/", "hero")}
            className="flex items-center space-x-2.5 group cursor-pointer text-left bg-transparent border-none focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-850 group-hover:rotate-6 transition-all duration-300 shadow-md">
              <img
                src="/arblok_logo.webp"
                alt="Logo Arblok Digital"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                id="nav-logo-image"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-white">
                ARBLOK
              </span>
              <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase">
                DIGITAL
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => navTo("/", "hero")}
              className={`font-sans text-sm font-medium transition-colors cursor-pointer bg-transparent border-none ${
                currentPath === "/"
                  ? "text-cyan-400 font-semibold"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => navTo("/", "about")}
              className="font-sans text-sm text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-none"
            >
              {t("nav.vision")}
            </button>
            <button
              onClick={() => navTo("/", "services")}
              className="font-sans text-sm text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-none"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => navTo("/", "portfolio")}
              className="font-sans text-sm text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-none"
            >
              {t("nav.portfolio")}
            </button>
            <button
              onClick={() => navTo("/articles")}
              className={`font-sans text-sm font-medium transition-colors cursor-pointer bg-transparent border-none ${
                currentPath === "/articles"
                  ? "text-cyan-400 font-semibold"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              {t("nav.articles")}
            </button>
            <button
              onClick={() => navTo("/consultant")}
              className={`font-sans text-sm font-medium transition-colors cursor-pointer bg-transparent border-none flex items-center gap-1.5 ${
                currentPath === "/consultant"
                  ? "text-cyan-400 font-semibold"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              {t("nav.consultant")}
            </button>
          </div>

          {/* Right Controls & Call to Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Sleek Language Switcher */}
            <button
              onClick={() => setLanguage(language === "id" ? "en" : "id")}
              className="px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-950/60 hover:bg-slate-900 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-all flex items-center gap-1.5 cursor-pointer"
              title="Ganti Bahasa / Change Language"
            >
              <span>🌐</span>
              <span>{language.toUpperCase()}</span>
            </button>

            <a
              href="https://wa.me/6289508053795"
              target="_blank"
              rel="noreferrer"
              className="font-display text-sm font-medium bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 border border-slate-700 px-5 py-2.5 rounded-full inline-flex items-center gap-2 group transition-all"
            >
              {t("nav.cta")}
              <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language Switcher in Mobile Header */}
            <button
              onClick={() => setLanguage(language === "id" ? "en" : "id")}
              className="px-2.5 py-1.5 rounded-lg border border-slate-800 bg-slate-950/60 text-xs font-mono font-bold text-cyan-400 flex items-center gap-1 cursor-pointer"
            >
              <span>🌐</span>
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none p-1.5 bg-transparent border-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 py-4 border-b border-slate-800 bg-slate-950" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          <button
            onClick={() => navTo("/", "hero")}
            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent border-none cursor-pointer"
          >
            {t("nav.home")}
          </button>
          <button
            onClick={() => navTo("/", "about")}
            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent border-none cursor-pointer"
          >
            {t("nav.vision")}
          </button>
          <button
            onClick={() => navTo("/", "services")}
            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent border-none cursor-pointer"
          >
            {t("nav.services")}
          </button>
          <button
            onClick={() => navTo("/", "portfolio")}
            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent border-none cursor-pointer"
          >
            {t("nav.portfolio")}
          </button>
          <button
            onClick={() => navTo("/articles")}
            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent border-none cursor-pointer"
          >
            {t("nav.articles")}
          </button>
          <button
            onClick={() => navTo("/consultant")}
            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800 flex items-center gap-2 bg-transparent border-none cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {t("nav.consultant")}
          </button>
          <div className="pt-2 px-3">
            <a
              href="https://wa.me/6289508053795"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center font-display text-sm font-medium bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-5 py-3 rounded-xl inline-flex items-center justify-center gap-2 transition-all"
            >
              {t("nav.cta")}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
