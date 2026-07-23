# SEO / IEO / GEO / AI Crawlability — Status Tervalidasi

> **Dokumen ini adalah source of truth.** Ditulis setelah proses debugging panjang di mana
> beberapa laporan "sudah selesai" ternyata tidak sinkron dengan kondisi live production.
> Semua status di bawah ini **dikonfirmasi lewat pengujian langsung** (curl + browser
> console), bukan asumsi dari commit message atau laporan audit semata.
>
> **Aturan buat agent manapun yang kerja di repo ini:** jangan klaim "sudah fix" hanya
> berdasarkan commit message atau membaca source code. Validasi dulu ke live URL
> production sebelum melaporkan status ke user.

Terakhir divalidasi: 2026-07-23, commit `319164f` (setelah redeploy tanpa build cache).

---

## 1. Isu yang Sudah Fixed (Confirmed di Production)

### 1.1 Canonical Mismatch — FIXED ✅
**Masalah lama:** File statis artikel di `public/articles/[slug].html` punya
`<link rel="canonical">` yang menunjuk ke URL tanpa ekstensi `.html`
(mis. `/articles/cara-memilih-software-house-umkm-tasikmalaya`), tapi URL itu sendiri
di-serve oleh SPA shell kosong (`index.html`) — bukan artikelnya. Ini self-contradicting
canonical yang berisiko bikin artikel tidak pernah ke-index Google.

**Fix:** Tambah rewrite rule di `vercel.json`, **sebelum** catch-all:
```json
{ "source": "/articles/:slug", "destination": "/articles/:slug.html" }
```

**Cara validasi (WAJIB pakai curl, bukan fetch tool AI manapun — banyak yang cache):**
```bash
curl -sI https://arblok-digital.vercel.app/articles/cara-memilih-software-house-umkm-tasikmalaya
```
Expected: `Content-Disposition: inline; filename="....html"` dan `X-Vercel-Cache: MISS` atau `HIT`
(bukan serve index.html SPA shell).

---

### 1.2 Nav/Footer `<button>` → `<a>`/`<Link>` — FIXED ✅
**Masalah lama:** Semua internal navigation (`Beranda`, `Layanan`, `Artikel`, dst) pakai
`<button onClick={() => navTo(...)}>`. Google/AI crawler tidak mengenali `<button>`
sebagai link — nol internal link equity, nol link graph untuk crawlability.

**Fix:** Diganti ke `<Link to="...">` (React Router) di `Navbar.tsx` (123 baris berubah)
dan `Footer.tsx` (63 baris berubah), commit `319164f`.

**PENTING — jangan ganti semua button jadi Link.** 3 button berikut **HARUS TETAP
BUTTON** karena bukan navigasi ke halaman lain, cuma toggle state UI:
- Language switcher desktop
- Language switcher mobile
- Hamburger menu toggle (buka/tutup nav mobile)

**Cara validasi (browser console, di halaman live):**
```js
document.querySelectorAll('nav button').length   // expected: 3
document.querySelectorAll('nav a[href]').length  // expected: 15
```

---

### 1.3 llms.txt — 7 Artikel Ditambahkan — FIXED ✅
**Masalah lama:** `llms.txt` cuma nge-list 2 prerendered page (`home.html`,
`consultant.html`). 7 artikel statis di `public/articles/*.html` gak ke-link dari
manapun yang bisa ditemukan AI crawler → orphaned content.

**Fix:** Section baru `## Articles (AI-crawlable static pages)` ditambahkan dengan
7 link lengkap.

**Cara validasi:**
```bash
curl -s https://arblok-digital.vercel.app/llms.txt | findstr /c:"articles/"
```
Expected: 7 baris.

---

### 1.4 Sitemap.xml — FIXED ✅
Sitemap sudah menunjuk ke path bersih `/articles/[slug]` (tanpa `#anchor`, tanpa
`.html`). Karena rewrite di poin 1.1 sudah jalan, URL-URL ini sekarang benar-benar
menyajikan konten yang tepat, bukan cuma path kosong.

**Cara validasi:**
```bash
curl -s https://arblok-digital.vercel.app/sitemap.xml | findstr /c:"articles/"
```
Expected: 7 baris `<loc>`.

---

## 2. Lesson Learned — Kenapa Validasi Manual Wajib

Selama proses fix ini terjadi 3x mismatch antara "klaim selesai" vs kenyataan:

1. **Klaim #1 round pertama:** commit message bilang "fix(seo): canonical mismatch",
   tapi isi `vercel.json` yang di-fetch dari GitHub ternyata masih versi lama (rewrite
   rule belum ada).
2. **Setelah file dikonfirmasi benar isinya:** live site tetap serve versi lama karena
   **Vercel build cache** menyimpan build lama meski commit baru sudah di-clone.
   Solusi: **Redeploy dari Vercel Dashboard dengan "Skip Build Cache" dicentang**,
   bukan `rm -rf node_modules/.vite` di lokal (itu cache lokal, gak ngaruh ke server
   Vercel yang selalu clone fresh dari GitHub tiap deploy).
3. **Nav button:** source code sudah benar dari awal, tapi live site masih nunjukin
   16 button karena alasan yang sama — stale build cache di Vercel.

**Kesimpulan:** kalau ada perubahan di kode yang gak keliatan efeknya di production
padahal source code sudah benar, **cek dulu apakah build di-deploy dengan cache
di-skip**, sebelum menyalahkan hal lain.

---

## 3. Struktur File Relevan (Jangan Dihapus)

```
public/
├── articles/*.html       ← 7 file statis, WAJIB ada, di-serve via vercel.json rewrite
├── prerendered/
│   ├── home.html         ← prerendered homepage untuk AI crawler
│   └── consultant.html   ← prerendered consultant page
├── llms.txt              ← WAJIB, referensi utama AI crawler
├── sitemap.xml           ← WAJIB
├── robots.txt            ← WAJIB
└── manifest.json / sw.js ← PWA, jangan dihapus

src/
├── components/Navbar.tsx, Footer.tsx  ← sudah pakai <Link>, jangan revert ke <button>
├── data/articles.ts                    ← source data artikel

scripts/
└── prerender-articles.mjs   ← generate static HTML dari articles.ts saat build

vercel.json    ← WAJIB, berisi semua rewrite rules kritis di atas
server.ts      ← Express server buat proxy AI chat (/api/chat), TIDAK terkait SEO
```

---

## 4. Belum Dikerjakan (Fase 2 — Prioritas Rendah)

Dari audit awal, poin-poin berikut belum divalidasi/dikerjakan, tidak kritis:
- Schema `sameAs` masih cuma WhatsApp — perlu tambah LinkedIn/GitHub untuk Knowledge Panel
- Belum ada `LocalBusiness` schema (geo coordinates Tasikmalaya)
- Belum ada `WebSite` + `SearchAction` schema (Sitelinks Search Box)
- `dateModified` artikel masih hardcode sama dengan `datePublished`
- OG image sama untuk semua artikel (belum unik per artikel)
- Missing `twitter:site` / `twitter:creator`
- `prerender-articles.mjs` — fungsi `contentToHtml()` cuma handle numbered list & bold,
  belum handle heading (`###`) dan bullet list (`*`) dengan benar
- Article data ada di 2 tempat (`articles.ts` + generated `.html`) — perlu dipastikan
  `prerender-articles.mjs` selalu generate ulang dari `articles.ts`, jangan manual edit
  file `.html` langsung

Jangan kerjakan poin-poin ini sampai ada instruksi eksplisit dari user.
