<script setup>
import { ref } from 'vue'
import infieduMark from '../assets/images/brand/infiedu-mark.png'

/* ---------- Navbar ---------- */
const menuOpen = ref(false)
const openDropdown = ref(null)
const whatsappUrl = 'https://wa.me/6285111630006'
const levels = [
  { label: 'SD', to: '/sd' },
  { label: 'SMP', to: '/smp' },
  { label: 'SMA', to: '/sma' },
  { label: 'UTBK/SNBT', to: '/#program' },
]
const programMenu = [
  { label: 'Bimbingan Belajar', to: '/program/bimbingan-belajar' },
  { label: 'English For Kids', to: '/program/english-for-kids' },
  { label: 'Persiapan TKA', to: '/program/persiapan-tka' },
  { label: 'Persiapan SNBT', to: '/program/persiapan-snbt' },
]

function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? null : name
}
function closeMenus() {
  menuOpen.value = false
  openDropdown.value = null
}

/* ---------- Register cards ---------- */
const registerCards = [
  { badge: '', title: 'Kelas Bimbingan Belajar', cta: 'Daftar Sekarang', href: whatsappUrl, tone: 'coral' },
  { badge: 'BARU', title: 'Persiapan TKA', cta: 'Lihat Program', href: '/program/persiapan-tka', tone: 'sage' },
  { badge: '', title: 'Tanya Langsung', cta: 'Chat Konsultan', href: whatsappUrl, tone: 'sun' },
]

/* ---------- Programs ---------- */
const programs = [
  { number: '01', title: 'Bimbingan sekolah', text: 'Pendampingan materi dan tugas agar pelajaran terasa lebih mudah dipahami.', tone: 'coral' },
  { number: '02', title: 'Persiapan ujian', text: 'Latihan terarah dan strategi belajar untuk menghadapi ujian dengan percaya diri.', tone: 'lilac' },
  { number: '03', title: 'Kelas privat', text: 'Belajar fokus bersama tutor dengan metode yang sesuai kebutuhan setiap siswa.', tone: 'sage' },
]

/* ---------- Facilities (USP) ---------- */
const facilities = [
  // Isi image dengan path file di public/, contoh: '/images/facilities/ruang-belajar.jpg'.
  { icon: '▣', art: '🏫', artLabel: 'Ruang belajar', tone: 'coral', title: 'Ruang belajar nyaman', text: 'Kelas tatap muka dengan audio visual lengkap, TV, dan AC.', image: '' },
  { icon: '✎', art: '📚', artLabel: 'Klinik PR', tone: 'blue', title: 'Konsultasi PR langsung', text: 'Bawa PR dan tugas sekolah, tutor siap membantu sampai paham.', image: '' },
  { icon: '♡', art: '🧑‍🏫', artLabel: 'Pendampingan', tone: 'sage', title: 'Konselor belajar', text: 'Diskusikan kendala belajar bersama konselor yang suportif.', image: '' },
  { icon: '✳', art: '📝', artLabel: 'Latihan tryout', tone: 'sun', title: 'Website tryout', text: 'Latihan soal dan simulasi ujian melalui website tryout Infiedu.', image: '' },
]

/* ---------- Promo ---------- */
const promos = [
  { label: 'Diskon pendaftaran', value: 'Hingga Rp50 rb', note: 'Isi nomor WhatsApp untuk klaim.', tone: 'coral' },
  { label: 'Kelas percobaan', value: 'GRATIS', note: 'Coba kelas tatap muka sebelum mendaftar.', tone: 'sage' },
  { label: 'Paket keluarga', value: 'Spesial', note: 'Untuk kakak-adik yang belajar bersama.', tone: 'lilac' },
]

/* ---------- Testimonials ---------- */
const testimonies = [
  { name: 'Nama Siswa', level: '12 SMA', place: 'Surabaya', text: 'Dulu susah paham pelajaran, sekarang jadi lebih percaya diri karena dibimbing tutor yang sabar dan suportif.', highlight: 'Lolos jalur SNBP' },
  { name: 'Nama Siswa', level: 'UTBK', place: 'Sidoarjo', text: 'Belajarnya enjoy, tutor ramah, dan ada pendampingan memilih prodi serta analisis nilai tryout.', highlight: 'Diterima di PTN impian' },
  { name: 'Nama Siswa', level: '9 SMP', place: 'Malang', text: 'Klinik PR-nya sangat membantu. Kalau belum paham, tutor datang satu per satu sampai mengerti.', highlight: 'Nilai rapor naik' },
]
const activeTestimony = ref(0)
const prevTestimony = () => { activeTestimony.value = (activeTestimony.value - 1 + testimonies.length) % testimonies.length }
const nextTestimony = () => { activeTestimony.value = (activeTestimony.value + 1) % testimonies.length }

/* ---------- Teachers ---------- */
const teachers = [
  // Isi image dengan path foto di public/, contoh: '/images/tutors/nama-tutor.jpg'.
  { name: 'Nama Tutor', subject: 'Bahasa Inggris', education: 'S1 Pendidikan Bahasa Inggris', image: '', points: ['Pengalaman mengajar di sekolah dan bimbel', 'Pengalaman menyusun materi persiapan tes'] },
  { name: 'Nama Tutor', subject: 'Matematika', education: 'S1 Pendidikan Matematika', image: '', points: ['Pengalaman membimbing persiapan ujian', 'Juara lomba tingkat daerah'] },
  { name: 'Nama Tutor', subject: 'IPA', education: 'S1 Pendidikan IPA', image: '', points: ['Terbiasa dengan kurikulum nasional', 'Metode belajar berbasis praktik'] },
]

/* ---------- FAQ ---------- */
const faqs = [
  { q: 'Apa bedanya Infiedu dengan bimbel lain?', a: 'Kami menekankan pendampingan personal: materi disesuaikan dengan kebutuhan tiap anak, tutor diseleksi dan terus dilatih, dan orang tua ikut memantau perkembangan belajar.' },
  { q: 'Bagaimana Infiedu membantu meningkatkan nilai di sekolah?', a: 'Setiap sesi diawali diagnostic test untuk memetakan topik yang belum dikuasai, dilanjutkan latihan terarah, klinik PR, dan post test untuk mengukur kemajuan.' },
  { q: 'Bagaimana latar belakang para tutor?', a: 'Tutor berasal dari lulusan perguruan tinggi pilihan dengan rekam jejak yang baik di bidangnya, lalu mengikuti pelatihan materi dan teknik mengajar secara berkala.' },
  { q: 'Apakah ada kelas percobaan?', a: 'Ada. Kamu bisa mencoba kelas tatap muka secara gratis sebelum memutuskan mendaftar.' },
]
const openFaq = ref(0)
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? -1 : i }

/* ---------- Footer ---------- */
const footerColumns = [
  { title: 'Produk Infiedu', links: [
    { label: 'Bimbingan Belajar', to: '/program/bimbingan-belajar' },
    { label: 'English For Kids', to: '/program/english-for-kids' },
    { label: 'Persiapan TKA', to: '/program/persiapan-tka' },
    { label: 'Persiapan SNBT', to: '/program/persiapan-snbt' },
  ] },
  { title: 'Infiedu', links: [
    { label: 'Tentang Kami', to: '/tentang-kami' },
    { label: 'Cerita Siswa', to: '/#cerita' },
    { label: 'Promo', to: '/#promo' },
    { label: 'FAQ', to: '/#faq' },
  ] },
  { title: 'Layanan Pelanggan', links: [
    { label: 'Hubungi Kami', to: whatsappUrl, external: true },
    { label: 'Konsultasi Program', to: whatsappUrl, external: true },
  ] },
]
</script>

<template>
  <div class="home-page" @keydown.esc="closeMenus">
    <!-- ================= NAVBAR ================= -->
    <header class="site-header">
      <a class="logo" href="#home" aria-label="InfiEdu, beranda"><img class="logo-symbol" :src="infieduMark" alt="" /><span class="logo-wordmark">InfiEdu<small>Teman tumbuh dan belajar</small></span></a>
      <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-label="Buka menu" @click="menuOpen = !menuOpen">{{ menuOpen ? '×' : '☰' }}</button>

      <nav class="navigation" :class="{ 'navigation-open': menuOpen }" aria-label="Navigasi utama">
        <div class="nav-dropdown">
          <button type="button" class="nav-trigger" :aria-expanded="openDropdown === 'jenjang'" @click="toggleDropdown('jenjang')">Pilih Jenjang <span>▾</span></button>
          <ul v-show="openDropdown === 'jenjang'" class="dropdown-panel">
            <li v-for="l in levels" :key="l.label"><RouterLink :to="l.to" @click="closeMenus">{{ l.label }}</RouterLink></li>
          </ul>
        </div>
        <div class="nav-dropdown">
          <button type="button" class="nav-trigger" :aria-expanded="openDropdown === 'program'" @click="toggleDropdown('program')">Pilih Program <span>▾</span></button>
          <ul v-show="openDropdown === 'program'" class="dropdown-panel">
            <li v-for="p in programMenu" :key="p.label"><RouterLink :to="p.to" @click="closeMenus">{{ p.label }}</RouterLink></li>
          </ul>
        </div>
        <a href="#cerita" @click="closeMenus">Cerita Siswa</a>
        <a href="#promo" @click="closeMenus">Promo</a>
        <a class="nav-cta" :href="whatsappUrl" target="_blank" rel="noopener noreferrer" @click="closeMenus">Coba Kelas Tatap Muka <span>↗</span></a>
      </nav>
    </header>

    <main id="home">
      <div class="ambient-background" aria-hidden="true">
        <span class="ambient-orb orb-one"></span>
        <span class="ambient-cube cube-one"><i></i></span>
        <span class="ambient-ring ring-one"></span>
        <span class="ambient-cube cube-two"><i></i></span>
        <span class="ambient-orb orb-two"></span>
        <span class="ambient-ring ring-two"></span>
        <span class="ambient-cube cube-three"><i></i></span>
      </div>
      <!-- ================= HERO ================= -->
      <section class="hero layout-width">
        <div class="hero-copy">
          <p class="eyebrow"><span></span> BELAJAR JADI LEBIH BERARTI</p>
          <h1>Bersama Infiedu, setiap anak punya cara <em>hebatnya</em> sendiri.</h1>
          <p class="hero-description">Dibimbing langsung oleh tutor terbaik, kami menemani langkah kecil hari ini agar anak tumbuh jadi versi terbaik dirinya.</p>

        </div>

        <div class="hero-illustration" role="img" aria-label="Ilustrasi suasana belajar Infiedu yang ceria">
          <div class="illustration-sun"></div><div class="note-card"><span>✳</span><strong>Belajar<br />dengan hati</strong></div>
          <div class="student"><div class="student-hair"></div><div class="student-face"><i></i><b></b><span></span></div><div class="student-neck"></div><div class="student-shirt"><span>✦</span></div><div class="student-arm"></div></div>
          <div class="book book-back"></div><div class="book book-middle"></div><div class="book book-front"></div>
          <div class="plant"><i></i><i></i><i></i><b></b></div><span class="art-spark spark-a">✳</span><span class="art-spark spark-b">✦</span>
          <div class="art-caption"><span>01 / 03</span><i></i><span>Tumbuh bersama</span></div>
        </div>
      </section>

      <!-- ================= REGISTER CARDS ================= -->
      <section class="register layout-width" aria-label="Pendaftaran">
        <div class="register-intro">
          <div class="register-intro-copy">
            <p class="register-kicker"><span>✦</span> PROGRAM BELAJAR INFIEDU</p>
            <h2 class="register-title">Belajar terarah untuk <em>setiap jenjang.</em></h2>
            <p class="register-lead">Kelas tatap muka untuk siswa SD, SMP, SMA, hingga Gap Year.</p>
          </div>
          <div class="register-feature">
            <span class="register-feature-icon">✎</span>
            <span><strong>TKA SMP &amp; SNBT</strong><small>Program terpopuler</small></span>
            <span class="register-feature-arrow">↗</span>
          </div>
        </div>
        <div class="register-grid">
          <a v-for="c in registerCards" :key="c.title" :href="c.href" :target="c.href === whatsappUrl ? '_blank' : undefined" :rel="c.href === whatsappUrl ? 'noopener noreferrer' : undefined" class="register-card" :class="`card-${c.tone}`">
            <span v-if="c.badge" class="register-badge">{{ c.badge }}</span>
            <h3>{{ c.title }}</h3>
            <span class="register-cta">{{ c.cta }} <span>↗</span></span>
          </a>
        </div>
      </section>

      <!-- ================= VALUES BAR / TAGLINE ================= -->
      <section class="values-bar" aria-label="Keunggulan Infiedu">
        <div class="values-inner"><span class="values-label">RUANG BELAJAR YANG</span><span>♡ <b>Personal</b></span><span>✳ <b>Menyenangkan</b></span><span>↗ <b>Terarah</b></span><span>✦ <b>Berdampak</b></span></div>
      </section>

      <section id="tentang" class="manifesto">
        <span class="quote-mark">“</span>
        <blockquote>Learn it, love it, <em>live it.</em><br />Infiedu siap bantu taklukkan semua ujian dan menemani perjuanganmu.</blockquote>
        <p><a href="#fasilitas"><span></span> Lihat fasilitas Infiedu</a></p>
      </section>

      <!-- ================= PROGRAM ================= -->
      <section id="program" class="program-section layout-width">
        <div class="section-heading"><div><p class="eyebrow">PILIH JALAN BELAJARMU</p><h2>Tempat belajar yang<br /><em>pas untukmu.</em></h2></div><RouterLink class="all-programs" :to="{ path: '/', hash: '#program' }">Lihat semua program <span>↗</span></RouterLink></div>
        <div class="program-grid"><article v-for="program in programs" :key="program.number" class="program-card" :class="`card-${program.tone}`"><img class="program-illustration" :src="`/images/programs/${program.number}.svg`" alt="" aria-hidden="true" /><h3>{{ program.title }}</h3><p>{{ program.text }}</p><a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" :aria-label="`Tanya tentang ${program.title}`">↗</a></article></div>
      </section>

      <!-- ================= FASILITAS ================= -->
      <section id="fasilitas" class="usp layout-width">
        <div class="section-heading"><div><p class="eyebrow">HANYA ADA DI INFIEDU</p><h2>Fasilitas belajar yang<br /><em>anti bosan.</em></h2></div></div>
        <p class="section-sub">Fasilitas belajar yang nyaman, didukung tutor yang suportif.</p>
        <div class="usp-grid">
          <article v-for="f in facilities" :key="f.title" class="usp-card">
            <img v-if="f.image" class="facility-photo" :src="f.image" :alt="f.title" />
            <div v-else class="facility-photo-placeholder" :class="`facility-art-${f.tone}`" aria-hidden="true"><span>{{ f.art }}</span><small>{{ f.artLabel }}</small></div>
            <span class="usp-icon">{{ f.icon }}</span><h3>{{ f.title }}</h3><p>{{ f.text }}</p>
          </article>
        </div>
        <div class="usp-actions"><a class="button button-dark" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Gabung Sekarang <span>↗</span></a></div>
      </section>

      <!-- ================= PROMO ================= -->
      <section id="promo" class="promo layout-width">
        <div class="section-heading"><div><p class="eyebrow">PROMO SPESIAL</p><h2>Khusus <em>untukmu!</em></h2></div></div>
        <div class="promo-grid">
          <article v-for="p in promos" :key="p.label" class="promo-card" :class="`card-${p.tone}`"><small>{{ p.label }}</small><strong>{{ p.value }}</strong><p>{{ p.note }}</p><a :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Ambil promo ↗</a></article>
        </div>
      </section>

      <!-- ================= TESTIMONI ================= -->
      <section id="cerita" class="testimonies layout-width">
        <div class="section-heading"><div><p class="eyebrow">CERITA SISWA</p><h2>Mengapa mereka memilih<br /><em>Infiedu?</em></h2></div>
          <div class="slider-controls"><button type="button" aria-label="Sebelumnya" @click="prevTestimony">←</button><button type="button" aria-label="Berikutnya" @click="nextTestimony">→</button></div>
        </div>
        <figure class="testimony-card">
          <figcaption><strong>{{ testimonies[activeTestimony].name }}</strong><small>({{ testimonies[activeTestimony].level }}) · {{ testimonies[activeTestimony].place }}</small></figcaption>
          <blockquote>{{ testimonies[activeTestimony].text }}</blockquote>
          <p class="testimony-highlight">{{ testimonies[activeTestimony].highlight }}</p>
        </figure>
        <div class="dots"><i v-for="(t, i) in testimonies" :key="i" :class="{ active: i === activeTestimony }"></i></div>
        <p class="bottom-cta">Yuk, raih target belajarmu bersama Infiedu seperti mereka! <a class="button button-dark" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Daftar Sekarang <span>↗</span></a></p>
      </section>

      <!-- ================= TUTOR ================= -->
      <section id="tutor" class="master layout-width">
        <div class="master-heading"><p class="eyebrow">TUTOR PILIHAN INFIEDU</p><h2>Dibimbing langsung oleh Master Teacher<br /><em>lulusan universitas favorit.</em></h2></div>
        <div class="master-grid">
          <article v-for="(t, i) in teachers" :key="i" class="master-card">
            <img v-if="t.image" class="master-photo" :src="t.image" :alt="`Foto ${t.name}`" />
            <div v-else class="master-photo-placeholder" aria-label="Slot foto tutor"><span class="portrait-head"></span><i class="portrait-body"></i><small>Tambahkan foto tutor</small></div>
            <h3>{{ t.name }}</h3><small class="master-role">Master Teacher {{ t.subject }}</small>
            <p class="master-edu">{{ t.education }}</p>
            <h4>Pengalaman dan prestasi</h4>
            <ul><li v-for="p in t.points" :key="p">{{ p }}</li></ul>
          </article>
        </div>
        <p class="bottom-cta">Mau coba diajar langsung oleh tutor kami? <a class="button button-dark" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Daftar Sekarang <span>↗</span></a></p>
      </section>

      <!-- ================= FAQ ================= -->
      <section id="faq" class="faq layout-width">
        <div class="section-heading"><div><p class="eyebrow">FAQ</p><h2>Paling sering <em>ditanyakan.</em></h2></div></div>
        <div class="faq-list">
          <div v-for="(item, i) in faqs" :key="item.q" class="faq-item" :class="{ open: openFaq === i }">
            <button type="button" :aria-expanded="openFaq === i" @click="toggleFaq(i)"><span>{{ item.q }}</span><b>{{ openFaq === i ? '−' : '+' }}</b></button>
            <p v-show="openFaq === i">{{ item.a }}</p>
          </div>
        </div>
      </section>

      <!-- ================= KONTAK ================= -->
      <section class="contact-section layout-width">
        <div><p class="eyebrow">MULAI DARI SATU OBROLAN</p><h2>Yuk, cari tahu<br /><em>potensi hebatnya.</em></h2></div>
        <a class="button button-dark" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Ngobrol dengan kami <span>↗</span></a>
      </section>
      <div id="kontak" class="contact-anchor"></div>
    </main>

    <!-- ================= FOOTER ================= -->
    <footer class="site-footer layout-width">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="logo footer-logo" href="#home"><img class="logo-symbol" :src="infieduMark" alt="" /><span class="logo-wordmark">InfiEdu</span></a>
          <p>Teman tumbuh dan belajar.</p>
          <p class="footer-contact">info@infiedu.id</p>
        </div>
        <nav v-for="col in footerColumns" :key="col.title" class="footer-col" :aria-label="col.title">
          <h4>{{ col.title }}</h4>
          <template v-for="link in col.links" :key="link.label">
            <a v-if="link.external" :href="link.to" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
            <RouterLink v-else :to="link.to">{{ link.label }}</RouterLink>
          </template>
        </nav>
      </div>
      <div class="footer-bottom"><span>© 2026 Infiedu. Belajar tumbuh bersama.</span><a href="#home">Kembali ke atas ↑</a></div>
    </footer>

  </div>
</template>


