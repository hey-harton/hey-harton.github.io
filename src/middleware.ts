import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  // =================================================================
  // [1] SAKLAR UTAMA (MASTER SWITCH)
  // Ubah ke 'true'  = SELURUH WEBSITE digembok (termasuk Beranda)
  // Ubah ke 'false' = HANYA rute di dalam array di bawah yang digembok
  // =================================================================
  const isEntireSiteUnderConstruction = true; 

  // =================================================================
  // [2] DAFTAR RUTE SPESIFIK 
  // (Hanya aktif jika SAKLAR UTAMA di atas bernilai 'false')
  // =================================================================
  const underConstructionRoutes = [
    '/experience',
    '/gallery', 
    '/blog'
  ];

  // PROTEKSI INFINITE LOOP: 
  // Jika pengunjung sudah berada di halaman '/coming-soon', biarkan saja, jangan dialihkan lagi.
  if (currentPath === '/coming-soon') {
    return NextResponse.next();
  }

  // LOGIKA EKSEKUSI PENGALIHAN (REDIRECT)
  if (isEntireSiteUnderConstruction) {
    // Mode 1: Gembok Total. Semua rute apapun akan dilempar ke coming-soon
    return NextResponse.redirect(new URL('/coming-soon', request.url));
  } else if (underConstructionRoutes.includes(currentPath)) {
    // Mode 2: Gembok Parsial. Hanya rute yang belum selesai yang dilempar ke coming-soon
    return NextResponse.redirect(new URL('/coming-soon', request.url));
  }

  // Jika sistem sedang dalam Mode 2 dan rute aman, izinkan lewat
  return NextResponse.next();
}

// Konfigurasi pengecualian aset (gambar, css, js, api) agar desain coming-soon tidak rusak
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};