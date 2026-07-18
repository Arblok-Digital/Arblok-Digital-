import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Terminal, BarChart2, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center bg-slate-950 bg-grid-pattern-dark overflow-hidden"
    >
      {/* Decorative Radial Gradients for Deep Cyber Vibe */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl glow-cyan" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl glow-indigo" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{language === "id" ? "Studio Inovasi Web Modern & Kecerdasan Buatan" : "Modern Web & AI Innovation Studio"}</span>
            </div>

            {/* Title */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              {language === "id" ? (
                <>
                  Akselerasi Bisnis Anda dengan Kekuatan <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                    AI & Sistem Digital Modern
                  </span>
                </>
              ) : (
                <>
                  Accelerate Your Business with the Power of <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                    AI & Modern Digital Systems
                  </span>
                </>
              )}
            </h1>

            {/* Sub-tagline */}
            <p className="font-sans text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {t("hero.desc")}
            </p>

            {/* Core Values Briefing */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2 w-full max-w-xl">
              <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Zero-Cost Serverless</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Row Level Security (RLS)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Monorepo Workspace</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={() => navigate("/consultant")}
                className="font-display font-semibold text-center bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group cursor-pointer border-none"
              >
                {t("hero.cta_consultant")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/#portfolio")}
                className="font-display font-semibold text-center bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 hover:text-white px-8 py-4 rounded-xl transition-all cursor-pointer"
              >
                {t("hero.cta_portfolio")}
              </button>
            </div>
          </div>

          {/* Hero Right Content - Futuristic Software Mockup Interface */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none rounded-2xl border border-slate-800 bg-slate-950/80 backdrop-blur-sm p-4 shadow-2xl overflow-hidden glow-cyan">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="font-mono text-[10px] text-slate-500 tracking-wider">
                  ARBLOK_CORE_SHELL.TSX
                </div>
              </div>

              {/* Console Code Section */}
              <div className="space-y-3 font-mono text-[11px] text-slate-400">
                <div className="text-slate-500">{language === "id" ? "// Mengaktifkan Integrasi Monorepo & AI" : "// Bootstrapping Monorepo & AI integrations"}</div>
                <div>
                  <span className="text-pink-500">import</span> {"{"} getNextStatusOnApprove {"}"}{" "}
                  <span className="text-pink-500">import</span>{" "}
                  <span className="text-emerald-400">"@e-warga/logic"</span>;
                </div>
                <div>
                  <span className="text-pink-500">import</span> {"{"} supabase {"}"}{" "}
                  <span className="text-pink-500">import</span>{" "}
                  <span className="text-emerald-400">"@e-warga/supabase"</span>;
                </div>
                
                {/* Visual Status Indicator Card */}
                <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-800/80 space-y-2 mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-cyan-400 tracking-wider uppercase font-bold">
                      {language === "id" ? "PROYEK AKTIF: E-WARGA PWA" : "ACTIVE PROJECT: E-WARGA PWA"}
                    </span>
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                  </div>
                  
                  {/* Fake stats */}
                  <div className="grid grid-cols-2 gap-2 text-slate-300">
                    <div className="p-2 bg-slate-950/40 rounded border border-slate-900">
                      <div className="text-[9px] text-slate-500">{language === "id" ? "Optimalisasi Biaya" : "Cost Optimization"}</div>
                      <div className="text-sm font-bold text-white">Zero-Cost</div>
                    </div>
                    <div className="p-2 bg-slate-950/40 rounded border border-slate-900">
                      <div className="text-[9px] text-slate-500">{language === "id" ? "Ukuran Aset KTP/KK" : "KTP/KK File Size"}</div>
                      <div className="text-sm font-bold text-emerald-400">&lt; 150 KB</div>
                    </div>
                  </div>
                </div>

                {/* Simulated Graph Widget */}
                <div className="bg-slate-900/40 rounded-lg p-3 border border-slate-800/50 mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-slate-400 uppercase font-bold flex items-center gap-1.5">
                      <BarChart2 className="w-3.5 h-3.5 text-indigo-400" />
                      {language === "id" ? "Efisiensi Alur Kerja (AI vs Manual)" : "Workflow Efficiency (AI vs Manual)"}
                    </span>
                    <span className="text-[9px] text-emerald-400 font-bold">{language === "id" ? "+85% Lebih Cepat" : "+85% Faster"}</span>
                  </div>
                  {/* Simple CSS bars */}
                  <div className="space-y-1.5 pt-1">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[9px] text-slate-500">
                        <span>{language === "id" ? "Proses Manual Surat RT/RW" : "Manual Document Flow"}</span>
                        <span>48 Hours</span>
                      </div>
                      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                        <div className="bg-rose-500 h-full w-3/4 rounded-full" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[9px] text-slate-500">
                        <span>{language === "id" ? "Digitalisasi Arblok (Workflow-pipeline)" : "Arblok Digitalization"}</span>
                        <span>15 Mins</span>
                      </div>
                      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                        <div className="bg-cyan-400 h-full w-1/12 rounded-full shadow-[0_0_10px_#22d3ee]" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
