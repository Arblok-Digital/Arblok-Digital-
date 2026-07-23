import React from "react";
import { Link } from "react-router-dom";
import { Cpu, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const services = language === "id"
    ? [
        "Integrasi Kecerdasan Buatan (AI)",
        "Aplikasi Web & Progressive Web Apps (PWA)",
        "Otomatisasi Alur Kerja (Workflow Pipeline)",
        "Arsitektur Monorepo (NPM Workspaces)",
        "Optimasi Serverless Hosting"
      ]
    : [
        "Applied Artificial Intelligence (AI)",
        "Web Applications & Progressive Web Apps (PWA)",
        "Workflow Automation Pipelines",
        "Monorepo Systems (NPM Workspaces)",
        "Zero-Cost Serverless Hosting Optimization"
      ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <Link
                to="/#hero"
                className="flex items-center space-x-2.5 no-underline"
              >
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-850 shadow-md">
                  <img
                    src="/arblok_logo.webp"
                    alt="Logo Arblok Digital"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-base tracking-wider text-white">
                    ARBLOK
                  </span>
                  <span className="font-mono text-[9px] text-cyan-400 tracking-widest uppercase">
                    DIGITAL
                  </span>
                </div>
              </Link>
            </div>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-slate-500">
              {language === "id"
                ? "Studio inovasi perangkat lunak modern dan integrasi kecerdasan buatan (AI) terapan untuk menunjang produktivitas dan pertumbuhan bisnis Anda."
                : "Modern software innovation and applied artificial intelligence (AI) integration studio to power up your business productivity and growth."}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm text-white uppercase tracking-wider">
              {language === "id" ? "Navigasi Cepat" : "Quick Navigation"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm list-none p-0 m-0">
              <li>
                <Link to="/#hero" className="hover:text-cyan-400 transition-colors font-sans text-slate-400">
                  {language === "id" ? "Beranda" : "Home"}
                </Link>
              </li>
              <li>
                <Link to="/#about" className="hover:text-cyan-400 transition-colors font-sans text-slate-400">
                  {language === "id" ? "Visi & Misi" : "Vision & Mission"}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-cyan-400 transition-colors font-sans text-slate-400">
                  {language === "id" ? "Layanan" : "Services"}
                </Link>
              </li>
              <li>
                <Link to="/#portfolio" className="hover:text-cyan-400 transition-colors font-sans text-slate-400">
                  {language === "id" ? "Portofolio" : "Portfolio"}
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-cyan-400 transition-colors font-sans text-slate-400">
                  {language === "id" ? "Artikel & Edukasi" : "Articles & Insights"}
                </Link>
              </li>
              <li>
                <Link to="/consultant" className="hover:text-cyan-400 transition-colors font-sans text-slate-400">
                  AI Consultant
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm text-white uppercase tracking-wider">
              {language === "id" ? "Layanan Utama" : "Core Services"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500 list-none p-0 m-0">
              {services.map((svc) => (
                <li key={svc} className="font-sans">{svc}</li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm text-white uppercase tracking-wider">
              {language === "id" ? "Hubungi Kami" : "Contact Us"}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm list-none p-0 m-0">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-slate-500 font-sans">Tasikmalaya, Jawa Barat, Indonesia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href="https://wa.me/6289508053795"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors font-sans text-slate-400"
                >
                  +62 895-0805-3795
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:ardiblokchine@gmail.com" className="hover:text-cyan-400 transition-colors font-sans text-slate-400">
                  ardiblokchine@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright banner */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>&copy; {currentYear} Arblok Digital. {language === "id" ? "Seluruh hak cipta dilindungi." : "All rights reserved."}</p>
          <div className="flex space-x-6">
            <span className="hover:text-slate-500 cursor-pointer">{language === "id" ? "Syarat & Ketentuan" : "Terms & Conditions"}</span>
            <span className="hover:text-slate-500 cursor-pointer">{language === "id" ? "Kebijakan Privasi" : "Privacy Policy"}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
