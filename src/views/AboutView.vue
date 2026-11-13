<script setup>
import { ref } from 'vue'
import infieduMark from '../assets/images/brand/infiedu-mark.png'

const menuOpen = ref(false)
const openDropdown = ref(null)
const whatsappUrl = 'https://wa.me/6285111630006'
const levels = [
  { label: 'SD', to: '/sd' },
  { label: 'SMP', to: '/smp' },
  { label: 'SMA', to: '/sma' },
  { label: 'UTBK/SNBT', to: '/program/persiapan-snbt' },
]
const programMenu = [
  { label: 'Bimbingan Belajar', to: '/program/bimbingan-belajar' },
  { label: 'English For Kids', to: '/program/english-for-kids' },
  { label: 'Persiapan TKA', to: '/program/persiapan-tka' },
  { label: 'Persiapan SNBT', to: '/program/persiapan-snbt' },
]
const principles = [
  { icon: '♡', title: 'Memahami setiap siswa', text: 'Setiap anak memiliki kebutuhan dan cara belajar yang berbeda. Pendampingan dimulai dengan memahami prosesnya.' },
  { icon: '✦', title: 'Belajar dengan nyaman', text: 'Suasana belajar yang suportif membantu siswa bertanya, mencoba, dan berkembang dengan percaya diri.' },
  { icon: '↗', title: 'Tumbuh dengan terarah', text: 'Langkah belajar dibuat lebih jelas agar siswa dapat bergerak menuju tujuan akademiknya.' },
]
function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? null : name
}
function closeMenus() {
  menuOpen.value = false
  openDropdown.value = null
}
</script>

<template>
  <div class="about-page" @keydown.esc="closeMenus">
    <header class="site-header about-header">
      <RouterLink class="logo" to="/" aria-label="InfiEdu, beranda" @click="closeMenus">
        <img class="logo-symbol" :src="infieduMark" alt="" />
        <span class="logo-wordmark">InfiEdu<small>Teman tumbuh dan belajar</small></span>
      </RouterLink>
      <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-label="Buka menu" @click="menuOpen = !menuOpen">{{ menuOpen ? '×' : '☰' }}</button>
      <nav class="navigation" :class="{ 'navigation-open': menuOpen }" aria-label="Navigasi utama">
        <div class="nav-dropdown">
          <button type="button" class="nav-trigger" :aria-expanded="openDropdown === 'jenjang'" @click="toggleDropdown('jenjang')">Pilih Jenjang <span>▾</span></button>
          <ul v-show="openDropdown === 'jenjang'" class="dropdown-panel">
            <li v-for="level in levels" :key="level.label"><RouterLink :to="level.to" @click="closeMenus">{{ level.label }}</RouterLink></li>
          </ul>
        </div>
        <div class="nav-dropdown">
          <button type="button" class="nav-trigger" :aria-expanded="openDropdown === 'program'" @click="toggleDropdown('program')">Pilih Program <span>▾</span></button>
          <ul v-show="openDropdown === 'program'" class="dropdown-panel">
            <li v-for="program in programMenu" :key="program.label"><RouterLink :to="program.to" @click="closeMenus">{{ program.label }}</RouterLink></li>
          </ul>
        </div>
        <RouterLink :to="{ path: '/', hash: '#cerita' }" @click="closeMenus">Cerita Siswa</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#promo' }" @click="closeMenus">Promo</RouterLink>
        <a class="nav-cta" :href="whatsappUrl" target="_blank" rel="noopener noreferrer" @click="closeMenus">Coba Kelas Tatap Muka <span>↗</span></a>
      </nav>
    </header>

    <main class="about-main">
      <section class="about-hero layout-width">
        <div class="about-hero-copy">
          <p class="eyebrow"><span></span> TENTANG INFIEDU</p>
          <h1>Teman tumbuh<br />dan <em>belajar.</em></h1>
          <p>Setiap anak punya cara hebatnya sendiri. Infiedu hadir untuk menemani perjalanan belajar dengan pendampingan yang suportif dan terarah.</p>
          <div class="about-actions">
            <a class="button button-dark" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Kenali program kami <span>↗</span></a>
            <a class="about-text-link" href="#nilai">Nilai yang kami pegang <span>↓</span></a>
          </div>
        </div>
        <div class="about-hero-art" aria-hidden="true">
          <div class="about-art-orbit orbit-a"></div><div class="about-art-orbit orbit-b"></div>
          <div class="about-art-card card-back"><span>✦</span><b>Belajar</b></div>
          <div class="about-art-card card-front"><span>♡</span><b>Tumbuh</b><small>Bersama Infiedu</small></div>
          <span class="about-art-star star-a">✳</span><span class="about-art-star star-b">✦</span>
        </div>
      </section>

      <section id="nilai" class="about-principles layout-width">
        <div class="about-section-heading">
          <p class="eyebrow"><span></span> NILAI YANG KAMI PEGANG</p>
          <h2>Belajar bukan hanya soal nilai,<br /><em>tetapi juga proses bertumbuh.</em></h2>
        </div>
        <div class="about-principle-grid">
          <article v-for="(principle, index) in principles" :key="principle.title" class="about-principle-card" :class="`principle-${index + 1}`">
            <span class="about-principle-icon">{{ principle.icon }}</span>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.text }}</p>
          </article>
        </div>
      </section>

      <section class="about-approach layout-width">
        <div class="about-art-mark"><span>Infiedu</span><b>Learn it.<br />Love it.<br /><em>Live it.</em></b></div>
        <div>
          <p class="eyebrow"><span></span> CARA KAMI MENDAMPINGI</p>
          <h2>Ruang belajar yang personal, menyenangkan, dan terarah.</h2>
          <p>Kami mendampingi siswa memahami materi, berlatih, dan membangun kepercayaan diri. Tutor hadir untuk membantu proses belajar terasa lebih jelas dan bermakna.</p>
          <RouterLink class="about-text-link" :to="{ path: '/', hash: '#fasilitas' }">Lihat fasilitas Infiedu <span>↗</span></RouterLink>
        </div>
      </section>

      <section class="about-location layout-width">
        <div class="about-location-card">
          <div class="about-map-art">
            <iframe title="Peta lokasi bimbel Infiedu" src="https://maps.google.com/maps?output=embed&amp;hl=id&amp;q=INFIEDU%2C+-7.2647735%2C+112.6706015&amp;z=17" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
            <div class="about-map-place-card">
              <strong>INFIEDU</strong>
              <p>Jl. Lempung Sari No. 32, Lontar, Kec. Sambikerep, Surabaya, Jawa Timur 60216</p>
              <span class="about-map-rating"><b>★</b> 7 ulasan di Google Maps</span>
              <a href="https://maps.app.goo.gl/LVmFyfnahMea8iJcA" target="_blank" rel="noopener noreferrer"><span>↗</span> Buka di Maps</a>
            </div>
          </div>
          <div class="about-location-copy">
            <p class="eyebrow"><span></span> LOKASI INFIEDU</p>
            <h2>Kunjungi tempat belajar kami.</h2>
            <p>Buka Google Maps untuk melihat lokasi bimbel dan mendapatkan petunjuk arah.</p>
            <a class="button button-dark" href="https://maps.app.goo.gl/LVmFyfnahMea8iJcA" target="_blank" rel="noopener noreferrer">Buka Google Maps <span>↗</span></a>
          </div>
        </div>
      </section>

      <section class="about-cta layout-width">
        <div><p class="eyebrow"><span></span> MULAI BERSAMA INFIEDU</p><h2>Mari temukan langkah belajar yang pas.</h2></div>
        <a class="button button-dark" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Hubungi Infiedu <span>↗</span></a>
      </section>
    </main>

    <footer class="about-footer">
      <RouterLink class="logo" to="/" aria-label="Kembali ke beranda"><img class="logo-symbol" :src="infieduMark" alt="" /><span class="logo-wordmark">InfiEdu</span></RouterLink>
      <span>Teman tumbuh dan belajar.</span>
      <RouterLink to="/">Kembali ke beranda ↑</RouterLink>
    </footer>
  </div>
</template>
