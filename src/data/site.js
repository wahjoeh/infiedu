// Data yang dipakai bersama oleh semua halaman (navbar, footer, kontak).
export const whatsappUrl = 'https://wa.me/6285111630006'
export const mapsUrl = 'https://maps.app.goo.gl/LVmFyfnahMea8iJcA'
export const email = 'info@infiedu.id'
export const address = 'Jl. Lempung Sari No. 32, Lontar, Kec. Sambikerep, Surabaya, Jawa Timur 60216'

// Daftar harga "mulai dari" — satu sumber untuk halaman jenjang dan halaman program.
// Ubah di sini saja agar harga di semua halaman tetap sama.
export const prices = {
  'bimbel-sd': { large: 'Rp150.000', private: 'Rp450.000' },
  'english-for-kids': { large: 'Rp250.000', private: 'Rp450.000' },
  'tka-sd': { large: 'Rp220.000', private: 'Rp800.000' },
  'tka-smp': { large: 'Rp250.000', private: 'Rp1.000.000' },
  'tka-sma': { large: 'Rp260.000', private: 'Rp1.100.000' },
  'snbt-sma': { large: 'Rp450.000', private: 'Rp1.500.000' },
}

export const levelMenu = [
  { label: 'SD', note: 'Kelas 1–6', to: '/sd' },
  { label: 'SMP', note: 'Kelas 7–9', to: '/smp' },
  { label: 'SMA', note: 'Kelas 10–12', to: '/sma' },
  { label: 'UTBK/SNBT', note: 'SMA & Gap Year', to: '/program/persiapan-snbt' },
]

export const programMenu = [
  { label: 'Bimbingan Belajar', note: 'SD kelas 1–4', to: '/program/bimbingan-belajar' },
  { label: 'English For Kids', note: 'Bahasa Inggris anak', to: '/program/english-for-kids' },
  { label: 'Persiapan TKA', note: 'SD · SMP · SMA', to: '/program/persiapan-tka' },
  { label: 'Persiapan SNBT', note: 'Menuju PTN', to: '/program/persiapan-snbt' },
]

export const footerColumns = [
  { title: 'Program', links: programMenu.map(({ label, to }) => ({ label, to })) },
  { title: 'Infiedu', links: [
    { label: 'Tentang Kami', to: '/tentang-kami' },
    { label: 'Cerita Siswa', to: '/#cerita' },
    { label: 'Promo', to: '/#promo' },
    { label: 'FAQ', to: '/#faq' },
  ] },
  { title: 'Layanan', links: [
    { label: 'Hubungi Kami', to: whatsappUrl, external: true },
    { label: 'Konsultasi Program', to: whatsappUrl, external: true },
    { label: 'Lokasi di Google Maps', to: mapsUrl, external: true },
  ] },
]
