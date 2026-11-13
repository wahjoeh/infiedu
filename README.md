# Infiedu

Website lembaga bimbingan belajar Infiedu, dibuat dengan Vue 3, Vue Router, dan Vite. `index.html` adalah entry point dokumen; `src/App.vue` menampilkan halaman aktif dari router.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite. Untuk membuat versi siap deploy, jalankan `npm run build`; untuk melihat hasil build secara lokal jalankan `npm run preview`.

## Struktur folder

```text
public/             Aset statis yang disajikan apa adanya
  images/facilities/ Foto fasilitas yang dipanggil dari halaman
  images/tutors/     Foto tutor untuk bagian tutor
src/
  assets/           Gambar dan aset yang diimpor dari Vue
    images/
      brand/        Logo, ikon, dan identitas visual
      hero/         Gambar utama beranda
      programs/     Gambar program belajar
      facilities/   Gambar fasilitas
      testimonials/ Foto atau dokumentasi siswa
      tutors/       Foto tutor
  components/       Komponen antarmuka yang dapat dipakai ulang
  router/           Konfigurasi route aplikasi
  views/            Halaman untuk setiap route
  App.vue           Komposisi halaman utama
  main.js           Inisialisasi Vue dan stylesheet global
  style.css         Token desain, layout, dan responsive styles
index.html          Metadata dokumen dan mount point #app
```

## Alur pengembangan

1. Jalankan server dengan `npm run dev`.
2. Tambahkan route di `src/router/index.js` dan buat halaman terkait di `src/views/`.
3. Susun section beranda di `src/views/HomeView.vue`; pindahkan bagian yang berulang atau kompleks ke `src/components/`.
4. Simpan gambar terkelola di `src/assets/images/`; foto fasilitas dan tutor yang dirujuk dengan URL seperti `/images/facilities/...` diletakkan di `public/images/` pada kategori masing-masing.
5. Atur warna, tipografi, layout, dan breakpoint pada `src/style.css`.
6. Perbarui judul, bahasa, dan deskripsi halaman di `index.html`.
7. Jalankan `npm run build` sebelum deploy; hasil produksi tersedia di `dist/`.

## Acuan desain

`index.html` adalah entry point dokumen. Aplikasi menggunakan Vue Router dengan beranda pada `/`; desain beranda berada di `src/views/HomeView.vue` dan styling global berada di `src/style.css`.
