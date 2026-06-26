# Portofolio Profesional - Hartono Adji Susanto

Portofolio interaktif modern yang dirancang untuk menampilkan keahlian, pengalaman, sertifikasi, serta proyek di bidang **Enterprise Networking**, **Cloud Architecture**, dan **Data Science**.

Aplikasi ini dibangun menggunakan **Next.js 16**, **React 19**, dan **Tailwind CSS v4**, dengan integrasi desain industri dari **IBM Carbon Design System**.

---

## 🚀 Fitur Utama

- **Maintenance Mode / Coming Soon**: Dilengkapi dengan penghitung waktu pengerjaan (*development uptime*) serta penarikan data commit secara waktu nyata (*real-time*) langsung dari API GitHub.
- **Direktori Proyek Berbasis MDX**: Mem-parsing konten proyek secara dinamis dari file Markdown di folder `src/content/projects/` menggunakan `next-mdx-remote` dan `gray-matter`.
- **Katalog Sertifikasi**: Tampilan grid responsif untuk sertifikasi industri di bidang Jaringan (Cisco, MikroTik), Keamanan (Palo Alto), Cloud (AWS), dan Data Science (IBM).
- **Galeri Dataset**: Daftar dataset terkurasi lengkap dengan informasi ukuran, catatan record, dan format file (CSV, JSON, Excel).
- **Desain Grid & Glow Teoretis**: Tampilan bertema gelap (*dark mode*) minimalis dengan pola garis grid arsitektural dan efek bias cahaya (*radial glow*) yang dioptimalkan untuk performa seluler (GPU-friendly).

---

## 🛠️ Tech Stack

- **Framework & Core**: Next.js 16.2 (App Router), React 19.2, TypeScript 5
- **Styling**: Tailwind CSS v4, `@tailwindcss/typography`
- **UI Components & Icons**: `@carbon/react` (IBM Design), `lucide-react`, `@carbon/icons-react`
- **Data & Content Parsing**: `gray-matter`, `next-mdx-remote`

---

## 📂 Struktur Folder Proyek

```text
my-portofolio/
├── .agents/               # Aturan dan skill khusus AI Assistant
├── public/                # Aset statis (gambar, logo, ikon)
└── src/
    ├── app/               # Struktur rute halaman (App Router)
    │   ├── about/         # Halaman profil dan visi-misi
    │   ├── certifications/# Halaman katalog sertifikasi
    │   ├── coming-soon/   # Halaman placeholder pemeliharaan
    │   ├── contacts/      # Halaman formulir kontak
    │   ├── datasets/      # Halaman daftar dataset
    │   ├── experience/    # Halaman linimasa pengalaman
    │   ├── projects/      # Halaman direktori dan detail proyek ([slug])
    │   ├── layout.tsx     # Tata letak global (Navbar, Footer, Background Grid)
    │   └── page.tsx       # Beranda utama (Hero, Tech Stack, Featured Projects)
    ├── components/        # Komponen modular
    │   ├── layout/        # Navbar & Footer
    │   ├── sections/      # Bagian konten spesifik per halaman
    │   ├── style/         # Konfigurasi CSS global (global.css)
    │   └── ui/            # Komponen UI interaktif (Logo, ScrollToTop, dll.)
    ├── content/           # Konten dinamis berbasis Markdown (.md)
    │   └── projects/      # File MD proyek (misal: turnnews.md)
    ├── data/              # Data statis fallback (sertifikasi, dataset, proyek)
    └── utils/             # Fungsi pembantu (MDX parser)
```

---

## ⚙️ Cara Menjalankan Proyek Secara Lokal

### 1. Prasyarat
Pastikan Anda telah menginstal **Node.js** (versi 18+ direkomendasikan) dan npm/yarn.

### 2. Instalasi Dependensi
Jalankan perintah berikut di direktori utama proyek:
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) pada browser Anda untuk melihat hasilnya.

### 4. Build untuk Produksi
Untuk melakukan kompilasi proyek sebelum di-deploy:
```bash
npm run build
```

---

## 🔒 Konfigurasi Mode Pemeliharaan (*Under Construction*)

Website ini memiliki mekanisme pengunci halaman bawaan:
- **Master Switch**: Terletak di [`src/app/page.tsx`](file:///d:/My%20Project/my-portofolio/src/app/page.tsx) lewat variabel `isUnderConstruction`.
- **Perilaku**: Jika bernilai `true`, semua rute produksi akan dilempar ke halaman `/coming-soon`. Namun, jika dijalankan di lokal (`npm run dev`), Anda tetap bisa mengakses dan mengembangkan halaman beranda secara normal.
