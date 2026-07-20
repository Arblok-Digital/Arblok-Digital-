import React, { useState, useEffect } from "react";
import { ExternalLink, Layers, ArrowUpRight, Award, Flame, CheckCircle, Smartphone } from "lucide-react";
import { PortfolioItem } from "../types";
import { useLanguage } from "../LanguageContext";

export default function Portfolio() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("Semua");

  // Sync filter state when language changes
  useEffect(() => {
    setActiveFilter(language === "id" ? "Semua" : "All");
  }, [language]);

  const portfolioItems: PortfolioItem[] = language === "id" ? [
    {
      id: "sekolah-rapi",
      title: "SekolahRapi",
      category: "Web Application",
      description: "Platform administrasi & keuangan sekolah paling praktis se-Indonesia. Pendaftaran siswa online tanpa antri, manajemen SPP otomatis, dan laporan keuangan real-time — semua dari HP, bahkan tanpa internet. Offline-ready, multi-sekolah, gratis selamanya. Solusi digitalisasi sekolah yang bikin yayasan dan bendahara bernafas lega.",
      badge: "Fintech Edukasi",
      status: "Production-ready",
      techStack: ["Next.js", "PWA", "PostgreSQL", "Offline-first", "Multi-tenant"],
      features: [
        "Pendaftaran siswa online dengan formulir digital + tracking pembayaran otomatis",
        "Manajemen SPP otomatis — tunggakan terdeteksi, laporan siap cetak tiap bulan",
        "Dashboard keuangan real-time untuk owner/yayasan dari mana saja",
        "Offline-ready — input transaksi tanpa internet, auto-sync pas online"
      ],
      link: "https://sekolah-rapi.vercel.app/",
      image: "/portfolio/sekolah-rapi.jpg"
    },
    {
      id: "sekolah-pro",
      title: "SekolahPro",
      category: "Web Application",
      description: "Sistem Informasi Akademik & Manajemen Sekolah terpadu untuk efisiensi administrasi, guru, siswa, dan orang tua. Transformasi ekosistem pendidikan ke era digital.",
      badge: "SaaS EduTech",
      status: "Production-ready",
      techStack: ["React", "Node.js", "PostgreSQL", "Role-based Auth", "Student Ledger"],
      features: [
        "Portal interaktif guru, siswa, dan wali murid dalam satu sistem",
        "Manajemen keuangan sekolah, SPP, dan tagihan terintegrasi",
        "Input nilai rapor kurikulum merdeka & rekap absen otomatis",
        "Sistem pengumuman massal berbasis WhatsApp/SMS Gateway"
      ],
      link: "https://sekolah-pro.vercel.app/",
      image: "/portfolio/sekolah-pro.jpg"
    },
    {
      id: "solana-warung",
      title: "Solana Warung",
      category: "Web3 & Blockchain",
      description: "Platform e-commerce Web3 mikro-pembayaran yang mengintegrasikan perdagangan retail tradisional dengan teknologi blockchain. Solusi pembayaran tanpa batas dunia.",
      badge: "Top 100 Global Google Comp.",
      status: "Production-ready",
      techStack: ["React", "Solana Web3.js", "Anchor Protocol", "Tailwind", "Durable Storage"],
      features: [
        "Meraih penghargaan Top 100 Global dalam kompetisi inovasi Google (Google Developer Groups)",
        "Mikro-pembayaran instan dengan biaya gas transaksi mendekati nol",
        "Verifikasi kepemilikan kupon belanja berbasis token digital",
        "Pencatatan inventori warung terenkripsi dan transparan"
      ],
      image: "/portfolio/solana-warung.jpg",
      certificateUrl: "https://goo.gle/jvc-cert-verifier",
      credentialId: "JVC2605-N74Z-Y7DN"
    },
    {
      id: "e-warga",
      title: "E-Warga",
      category: "Web Application",
      description: "Platform digitalisasi pengurusan surat pengantar desa/kelurahan otomatis dari tingkat RT, RW, Kecamatan, hingga Disdukcapil. Arsitektur modular handal siap kustomisasi birokrasi skala nasional.",
      badge: "Inovasi Birokrasi",
      status: "Production-ready",
      techStack: ["React PWA", "NPM Workspaces", "Supabase", "Workflow Pipeline", "RLS Security"],
      features: [
        "Sistem monorepo terukur memisahkan core-logic & UI",
        "Workflow pipeline terpusat untuk transisi persetujuan RT/RW",
        "Kompresi berkas KTP & KK otomatis di frontend (<150KB)",
        "Notifikasi WhatsApp click-to-chat gratis tanpa biaya API"
      ],
      link: "https://ewarga-tau.vercel.app/",
      image: "/portfolio/e-warga.jpg"
    },
    {
      id: "kasirpro-grosir",
      title: "KasirPro Grosiran",
      category: "Web Application",
      description: "Sistem Manajemen Kasir & Inventori skala grosir/gudang untuk optimasi transaksi rantai pasok dan volume tinggi. Solusi enterprise untuk efisiensi distribusi barang.",
      badge: "SaaS Grosir & Supply Chain",
      status: "Production-ready",
      techStack: ["React", "Express", "PostgreSQL", "Real-time Sync", "Analytics Dashboard"],
      features: [
        "Transaksi grosir & eceran super cepat teruji beban tinggi",
        "Manajemen multi-gudang dan sinkronisasi stok otomatis",
        "Skema harga grosir bertingkat berdasarkan kuantitas beli",
        "Laporan neraca laba-rugi & performa sales secara instan"
      ],
      link: "https://kasirproid-app-grosiran.vercel.app/",
      image: "/portfolio/kasirpro-grosir.jpg"
    },
    {
      id: "kasirpro",
      title: "KasirPro F&B",
      category: "Web Application",
      description: "Sistem Point of Sale (POS) modern berbasis cloud yang dirancang khusus untuk akselerasi operasional bisnis kuliner dan UMKM. Integrasi menu digital dan cetak struk instan.",
      badge: "SaaS F&B & Retail",
      status: "Production-ready",
      techStack: ["React", "Express", "PostgreSQL", "Recharts Analytics", "Offline-first"],
      features: [
        "Pencatatan kasir instan dengan performa tinggi",
        "Laporan analitik penjualan harian & bulanan",
        "Manajemen inventori bahan baku real-time",
        "Struktur cetak struk pembelanjaan digital ramah mobile"
      ],
      link: "https://kasirpro-fnb-app.vercel.app/",
      image: "/portfolio/kasirpro.jpg"
    },
    {
      id: "sekolah-pro",
      title: "SekolahPro",
      category: "Web Application",
      description: "Sistem Informasi Akademik & Manajemen Sekolah terpadu untuk efisiensi administrasi, guru, siswa, dan orang tua. Transformasi ekosistem pendidikan ke era digital.",
      badge: "SaaS EduTech",
      status: "Production-ready",
      techStack: ["React", "Node.js", "PostgreSQL", "Role-based Auth", "Student Ledger"],
      features: [
        "Portal interaktif guru, siswa, dan wali murid dalam satu sistem",
        "Manajemen keuangan sekolah, SPP, dan tagihan terintegrasi",
        "Input nilai rapor kurikulum merdeka & rekap absen otomatis",
        "Sistem pengumuman massal berbasis WhatsApp/SMS Gateway"
      ],
      link: "https://sekolah-pro.vercel.app/",
      image: "/portfolio/sekolah-pro.jpg"
    },
    {
      id: "onyx",
      title: "Onyx Terminal",
      category: "AI & Automation",
      description: "Platform intelijen pasar kripto berbasis kecerdasan buatan (AI) untuk membantu trader menganalisis sentimen pasar, pergerakan on-chain, dan sinyal trading presisi.",
      badge: "Crypto Intelligence",
      status: "Production-ready",
      techStack: ["React", "Gemini AI", "Tailwind CSS", "Market WebSockets", "D3 Charts"],
      features: [
        "Deteksi pola grafik & tren harga bertenaga AI",
        "Analisis sentimen sosial media real-time",
        "Dashboard modular yang dapat disesuaikan",
        "Sistem alarm anomali volume perdagangan pasar"
      ],
      link: "https://onyx-terminal-v1.vercel.app/",
      image: "/portfolio/onyx.jpg"
    },
    {
      id: "coordination",
      title: "CoordinationApp",
      category: "Web Application",
      description: "Sistem koordinasi tugas berstruktur hierarki untuk mengorganisir tim berskala besar, relawan kampanye, atau organizations kepemudaan dengan pelaporan berbasis bukti foto.",
      badge: "Manajemen Tim",
      status: "Featured",
      techStack: ["React", "Supabase Backend", "Hierarchical Auth", "Interactive Flowchart"],
      features: [
        "Struktur pembagian tugas bertingkat sesuai jabatan organisasi",
        "Pelaporan progres tugas terlampir foto koordinasi lapangan",
        "Sistem validasi laporan otomatis oleh pengawas di atasnya",
        "Log aktivitas terenkripsi untuk keamanan informasi internal"
      ],
      image: "/portfolio/coordination.jpg"
    }
  ] : [
    {
      id: "sekolah-rapi",
      title: "SekolahRapi",
      category: "Web Application",
      description: "The most practical school administration & financial platform in Indonesia. Online student registration with zero queuing, automated SPP tracking, and real-time financial reports — all from your phone, even offline. Offline-ready, multi-school, and free forever. The digital transformation solution that makes school foundations and treasurers breathe easy.",
      badge: "EduTech Fintech",
      status: "Production-ready",
      techStack: ["Next.js", "PWA", "PostgreSQL", "Offline-first", "Multi-tenant"],
      features: [
        "Online student registration with digital forms + automated payment tracking",
        "Automated SPP management — overdue detection, monthly reports ready to print",
        "Real-time financial dashboard for owners/foundations from anywhere",
        "Offline-ready — input transactions without internet, auto-sync when online"
      ],
      link: "https://sekolah-rapi.vercel.app/",
      image: "/portfolio/sekolah-rapi.jpg"
    },
    {
      id: "sekolah-pro",
      title: "SekolahPro",
      category: "Web Application",
      description: "Integrated school information and academic portal streamlining workflows for administration, teachers, students, and parents.",
      badge: "EduTech SaaS",
      status: "Production-ready",
      techStack: ["React", "Node.js", "PostgreSQL", "Role-based Auth", "Student Ledger"],
      features: [
        "Interactive unified portals for teachers, students, and parents",
        "Integrated school tuition and student balance ledgers",
        "Automated report card compiling & digital class attendance trackers",
        "Bulk announcement channel with pre-built WhatsApp/SMS gate integrations"
      ],
      link: "https://sekolah-pro.vercel.app/",
      image: "/portfolio/sekolah-pro.jpg"
    },
    {
      id: "solana-warung",
      title: "Solana Warung",
      category: "Web3 & Blockchain",
      description: "Web3 retail e-commerce platform integrating traditional brick-and-mortar stores with blockchain micro-payments. Borderless, friction-free checkout.",
      badge: "Top 100 Global - Google Comp.",
      status: "Production-ready",
      techStack: ["React", "Solana Web3.js", "Anchor Protocol", "Tailwind", "Durable Storage"],
      features: [
        "Awarded Top 100 Global in Google's worldwide developer competition (Google Developer Groups)",
        "Instant Web3 micro-transactions with near-zero gas fees",
        "Digital discount coupon ownership verified on-chain via tokens",
        "Encrypted, fully decentralized merchant inventory registers"
      ],
      image: "/portfolio/solana-warung.jpg",
      certificateUrl: "https://goo.gle/jvc-cert-verifier",
      credentialId: "JVC2605-N74Z-Y7DN"
    },
    {
      id: "e-warga",
      title: "E-Warga",
      category: "Web Application",
      description: "Village-level automatic certificate processing platform from RT, RW, District, to Civil Registry. Resilient modular architecture prepared for national scale governance.",
      badge: "GovTech Innovation",
      status: "Production-ready",
      techStack: ["React PWA", "NPM Workspaces", "Supabase", "Workflow Pipeline", "RLS Security"],
      features: [
        "Scalable monorepo separating core business logic from client UI",
        "Centralized state-machine/pipeline for RT/RW approval handshakes",
        "Automatic front-end file compression for KTP/KK (<150KB)",
        "Free, automated WhatsApp click-to-chat triggers (no API fees)"
      ],
      link: "https://ewarga-tau.vercel.app/",
      image: "/portfolio/e-warga.jpg"
    },
    {
      id: "kasirpro-grosir",
      title: "KasirPro Wholesale",
      category: "Web Application",
      description: "Wholesale POS & inventory management engine optimized for supply chains and high-volume transactions. Enterprise solution for massive stock distribution.",
      badge: "Wholesale & Supply Chain SaaS",
      status: "Production-ready",
      techStack: ["React", "Express", "PostgreSQL", "Real-time Sync", "Analytics Dashboard"],
      features: [
        "Ultra-fast wholesale/retail register built for heavy ledger loads",
        "Multi-warehouse management & real-time automated stock synchronization",
        "Tiered pricing system adjusting automatically by wholesale volume",
        "Instant profit/loss statements & automated sales performance charts"
      ],
      link: "https://kasirproid-app-grosiran.vercel.app/",
      image: "/portfolio/kasirpro-grosir.jpg"
    },
    {
      id: "kasirpro",
      title: "KasirPro F&B",
      category: "Web Application",
      description: "Modern cloud-native F&B point of sale system designed to accelerate restaurant and retail workflows. Built-in digital menus and mobile thermal receipt layouts.",
      badge: "F&B & Retail SaaS",
      status: "Production-ready",
      techStack: ["React", "Express", "PostgreSQL", "Recharts Analytics", "Offline-first"],
      features: [
        "High-performance instant cash registering with native speed",
        "Intuitive daily/monthly sales metrics and analytical dashboards",
        "Real-time raw ingredient and stock level controls",
        "Fully responsive mobile-friendly layout with offline PWA modes"
      ],
      link: "https://kasirpro-fnb-app.vercel.app/",
      image: "/portfolio/kasirpro.jpg"
    },
    {
      id: "sekolah-pro",
      title: "SekolahPro",
      category: "Web Application",
      description: "Integrated school information and academic portal streamlining workflows for administration, teachers, students, and parents.",
      badge: "EduTech SaaS",
      status: "Production-ready",
      techStack: ["React", "Node.js", "PostgreSQL", "Role-based Auth", "Student Ledger"],
      features: [
        "Interactive unified portals for teachers, students, and parents",
        "Integrated school tuition and student balance ledgers",
        "Automated report card compiling & digital class attendance trackers",
        "Bulk announcement channel with pre-built WhatsApp/SMS gate integrations"
      ],
      link: "https://sekolah-pro.vercel.app/",
      image: "/portfolio/sekolah-pro.jpg"
    },
    {
      id: "onyx",
      title: "Onyx Terminal",
      category: "AI & Automation",
      description: "AI-driven crypto market terminal helping traders capture market sentiment, track on-chain movements, and process precision trading signals.",
      badge: "Crypto Intelligence",
      status: "Production-ready",
      techStack: ["React", "Gemini AI", "Tailwind CSS", "Market WebSockets", "D3 Charts"],
      features: [
        "AI pattern detection identifying trading charts and price trends",
        "Real-time social media sentiment parsing",
        "Fully modular layout allowing customizable trading blocks",
        "Anomalous market volume alerts and whale wallet tracker"
      ],
      link: "https://onyx-terminal-v1.vercel.app/",
      image: "/portfolio/onyx.jpg"
    },
    {
      id: "solana-warung",
      title: "Solana Warung",
      category: "Web3 & Blockchain",
      description: "Web3 retail e-commerce platform integrating traditional brick-and-mortar stores with blockchain micro-payments. Borderless, friction-free checkout.",
      badge: "Top 100 Global - Google Comp.",
      status: "Production-ready",
      techStack: ["React", "Solana Web3.js", "Anchor Protocol", "Tailwind", "Durable Storage"],
      features: [
        "Awarded Top 100 Global in Google's worldwide developer competition (Google Developer Groups)",
        "Instant Web3 micro-transactions with near-zero gas fees",
        "Digital discount coupon ownership verified on-chain via tokens",
        "Encrypted, fully decentralized merchant inventory registers"
      ],
      image: "/portfolio/solana-warung.jpg",
      certificateUrl: "https://goo.gle/jvc-cert-verifier",
      credentialId: "JVC2605-N74Z-Y7DN"
    },
    {
      id: "coordination",
      title: "CoordinationApp",
      category: "Web Application",
      description: "Hierarchical task coordination tool designed for large field organizations, campaign volunteers, or youth communities with proof-of-work photo uploads.",
      badge: "Team Management",
      status: "Featured",
      techStack: ["React", "Supabase Backend", "Hierarchical Auth", "Interactive Flowchart"],
      features: [
        "Bespoke task division matched to structural ranks",
        "Progress validation using location-tracked photo attachments",
        "Hierarchical review dashboard for high-level managers",
        "Encrypted security logs protecting internal campaign briefs"
      ],
      image: "/portfolio/coordination.jpg"
    },
    {
      id: "sekolah-rapi",
      title: "SekolahRapi",
      category: "Web Application",
      description: "The most practical school administration & financial platform in Indonesia. Online student registration with zero queuing, automated SPP tracking, and real-time financial reports — all from your phone, even offline. Offline-ready, multi-school, and free forever. The digital transformation solution that makes school foundations and treasurers breathe easy.",
      badge: "EduTech Fintech",
      status: "Production-ready",
      techStack: ["Next.js", "PWA", "PostgreSQL", "Offline-first", "Multi-tenant"],
      features: [
        "Online student registration with digital forms + automated payment tracking",
        "Automated SPP management — overdue detection, monthly reports ready to print",
        "Real-time financial dashboard for owners/foundations from anywhere",
        "Offline-ready — input transactions without internet, auto-sync when online"
      ],
      link: "https://sekolah-rapi.vercel.app/",
      image: "/portfolio/sekolah-rapi.jpg"
    }
  ];

  const filters = language === "id"
    ? ["Semua", "Web Application", "AI & Automation", "Web3 & Blockchain"]
    : ["All", "Web Application", "AI & Automation", "Web3 & Blockchain"];

  const filteredItems = (activeFilter === "Semua" || activeFilter === "All")
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase font-semibold">
              {language === "id" ? "Karya Kami" : "Our Work"}
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              {language === "id" ? "Portofolio Produk Pilihan" : "Featured Products Portfolio"}
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base">
              {language === "id"
                ? "Menampilkan platform digital mandiri dan sistem bertenaga kecerdasan buatan (AI) yang kami kembangkan dengan ketelitian tinggi untuk memecahkan tantangan nyata."
                : "Showcasing bespoke digital platforms and AI-driven systems engineered with meticulous precision to solve real-world problems."}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border bg-transparent ${
                  activeFilter === filter
                    ? "bg-cyan-500 text-slate-950 border-cyan-500 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-slate-950 text-slate-400 hover:text-white border-slate-800/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Bento/Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-slate-950 p-6 sm:p-8 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Image Preview Mockup */}
                {item.image && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-900 border border-slate-800/80 group-hover:border-cyan-500/30 transition-all duration-300 shadow-inner">
                    <img
                      src={item.image}
                      alt={`${item.title} Screenshot Mockup`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                )}

                {/* Header info */}
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] sm:text-xs text-cyan-400 font-bold tracking-widest uppercase border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 rounded">
                    {item.badge}
                  </span>
                  
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                    <CheckCircle className={`w-3.5 h-3.5 ${item.status === "Production-ready" ? "text-emerald-400" : "text-amber-400"}`} />
                    <span>{item.status}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white flex items-center gap-2">
                    {item.title}
                    {item.id === "solana-warung" && (
                      <span className="inline-flex items-center gap-1 text-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full font-sans font-medium">
                        <Flame className="w-3 h-3 text-amber-500" /> Top 100 Global
                      </span>
                    )}
                  </h3>
                  <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Features Bullet points */}
                <div className="space-y-2">
                  <h4 className="font-display font-semibold text-xs text-slate-400 uppercase tracking-wider">
                    {language === "id" ? "Fitur & Keunggulan Utama:" : "Key Features & Advantages:"}
                  </h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Google Developer Groups Certificate Verification Block */}
                {item.certificateUrl && item.credentialId && (
                  <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-slate-800/80 flex flex-col gap-3">
                    <div className="flex items-center gap-2.5">
                      <Award className="w-5 h-5 text-amber-400 shrink-0 animate-pulse" />
                      <div>
                        <p className="font-display font-bold text-xs text-white">
                          {language === "id" ? "Sertifikat Google Developer Groups" : "Google Developer Groups Certificate"}
                        </p>
                        <p className="font-sans text-[10px] text-slate-400">
                          {language === "id" ? "Peringkat TOP 100 #JuaraVibeCoding" : "TOP 100 #JuaraVibeCoding Rank"}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/60 pt-2.5">
                      <div className="font-mono text-[10px] text-slate-500">
                        ID: <span className="text-slate-400">{item.credentialId}</span>
                      </div>
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[10px] font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        {language === "id" ? "Verifikasi Sertifikat" : "Verify Certificate"}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

              </div>

              {/* Tech Stack Badge List */}
              <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-full sm:max-w-[65%]">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] bg-slate-900 text-slate-400 px-2 py-1 rounded border border-slate-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-1 cursor-pointer border border-cyan-500/20 hover:border-cyan-500"
                    >
                      <span>{language === "id" ? "Kunjungi" : "Visit"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a
                    href={`https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(item.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 rounded-lg text-slate-400 transition-colors inline-flex items-center justify-center cursor-pointer border border-slate-800"
                    title={language === "id" ? "Konsultasikan produk sejenis" : "Discuss a similar product"}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
