# Arblok Digital — Company Profile

> Website company profile + AI consultant untuk Arblok Digital, Tasikmalaya.
> Live: https://arblok-digital.vercel.app/

**Stack**: React 19 + Vite 6 + TypeScript 5.8 + Tailwind 4
**Routing**: React Router (path-based: `/articles`, `/consultant`)
**Deploy**: Vercel (auto-deploy dari `main` branch)
**Bilingual**: ID / EN via LanguageContext + hardcoded inline

---

## Run Locally

1. Install dependencies: `npm install`
2. Set `GEMINI_API_KEY` di `.env.local`
3. Run: `npm run dev`
4. Buka http://localhost:3000

---

## Menambah Artikel Baru (UNTUK AGENT)

### Langkah 1: Edit `src/data/articles.ts`

Tambah entry baru di array `ARTICLES_ID` (dan `ARTICLES_EN` kalau ada versi English). Format:

```typescript
{
  id: "slug-pendek-unik",
  slug: "slug-lengkap-untuk-url",
  title: "Judul Artikel",
  excerpt: "Ringkasan 1-2 kalimat (untuk meta description)",
  category: "Digitalisasi UMKM" | "Kecerdasan Buatan (AI)" | "Teknologi & Bisnis",
  publishedAt: "YYYY-MM-DD",
  readTime: "X Menit Bacaan",
  tags: ["tag1", "tag2"],
  author: { name: "Ardi", role: "Founder & Lead Software Architect @ Arblok Digital" },
  faq: [
    { question: "...", answer: "..." },  // Minimal 2-3 FAQ per artikel
  ],
  content: `Isi artikel dalam format markdown ringkas:
### Heading
Paragraf biasa.
* Bullet point
1. Numbered list
**teks bold**`
}
```

### Langkah 2: Update `scripts/prerender-articles.mjs`

Tambah entry di array `articles` di dalam script:

```javascript
{
  slug: "slug-yang-sama-dengan-di-articles-ts",
  title: "Judul Artikel",
  excerpt: "Ringkasan",
  category: "Kategori",
  publishedAt: "YYYY-MM-DD",
  author: { name: "Ardi", role: "..." },
  tags: ["tag1", "tag2"],
  content: `Isi artikel (plain text, tanpa markdown syntax)`,
  faq: [
    { q: "Pertanyaan?", a: "Jawaban." },
  ],
},
```

> **NOTE**: `content` di prerender script harus plain text (tanpa `###` / `*` / `**`).
> Script otomatis convert paragraph & bold.

### Langkah 3: Generate Static Articles & Sitemap

```bash
# Generate static HTML di public/articles/ + sitemap.xml
npm run prerender
```

**WAJIB jalanin `npm run prerender` SEBELUM commit & push.**

Kenapa? Karena:
- AI crawler (GPTBot, Claude, Gemini) **TIDAK bisa baca React SPA** — mereka butuh HTML statis
- Static HTML di `public/articles/[slug].html` berisi konten artikel + JSON-LD (BlogPosting + FAQPage)
- `sitemap.xml` harus include URL setiap artikel baru

### Langkah 4: Update `scripts/generate-sitemap.mjs`

Tambah entry di array `articles`:

```javascript
{ slug: "slug-artikel-baru", lastmod: "YYYY-MM-DD" }
```

### Langkah 5: Commit & Push

```bash
git add -A
git commit -m "content: tambah artikel [judul]"
git push origin main
```

Vercel auto-deploy. Static articles langsung live.

---

## Struktur File SEO/IEO

```
public/
├── articles/
│   ├── siasat-jitu-arblok-digital-...html    ← Static HTML (AI crawler readable)
│   ├── panduan-digitalisasi-umkm-...html     ← + JSON-LD baked (BlogPosting + FAQPage)
│   └── ...
├── sitemap.xml                                ← Auto-generated dari scripts/
├── robots.txt
├── llms.txt
├── og-image.png
└── arblok_logo.webp

scripts/
├── prerender-articles.mjs                     ← Generate static articles + sitemap
├── prerender-site.mjs                         ← Generate prerendered home + consultant
└── generate-sitemap.mjs                       ← Generate sitemap saja
```

---

## JSON-LD / Schema.org

| Schema | Lokasi | Notes |
|--------|--------|-------|
| ProfessionalService | `index.html` (hardcoded) | Company profile |
| FAQPage | `index.html` (hardcoded) + static articles | 5 FAQ utama |
| BreadcrumbList | `index.html` (hardcoded) | Navigasi |
| BlogPosting | Static articles (`public/articles/`) | Per artikel, baked ke HTML |
| FAQPage | Static articles (`public/articles/`) | Per artikel FAQ, baked ke HTML |
| ~~Product/AggregateRating~~ | ~~`index.html`~~ | **REMOVED** — risiko Google manual action |

---

## Aturan Penting

1. **JANGAN generate review/testimonial palsu** — risiko Google manual action
2. **WAJIB jalanin `npm run prerender`** setelah tambah artikel sebelum push
3. **Hardcode inline** `language === "id" ? ... : ...` — JANGAN pake `t("key")`
4. **No "AI" di marketing copy** — pakai "kecerdasan buatan" / "sistem otomatis"
5. **WhatsApp CTA**: `https://wa.me/6289508053795`
6. **Hash routing lama** masih di-redirect ke path routing (`#articles` → `/articles`)

---

## Commands

| Command | Fungsi |
|---------|--------|
| `npm run dev` | Local dev server |
| `npm run build` | Build untuk production |
| `npm run prerender` | Generate static articles + sitemap |
| `npm run build:sitemap` | Generate sitemap saja |

---

*Last updated: 22 Juli 2026*
*Owner: Ardi — Arblok Digital*
