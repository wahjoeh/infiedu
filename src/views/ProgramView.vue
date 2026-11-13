<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import infieduMark from '../assets/images/brand/infiedu-mark.png'

const route = useRoute()
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
const programs = {
  bimbinganBelajar: {
    name: 'Bimbingan Belajar', eyebrow: 'PENDAMPINGAN BELAJAR SEKOLAH',
    headline: 'Bimbingan belajar', accent: 'untuk kelas 1–4 SD.',
    description: 'Pendampingan tatap muka untuk membantu siswa kelas 1–4 memahami materi sekolah, mengerjakan tugas, dan membangun kebiasaan belajar yang baik.',
    audience: 'SD · Kelas 1–4', image: '/images/programs/01.svg', tone: 'coral', visual: 'Belajar selangkah demi selangkah',
    optionsHeading: 'Bimbingan belajar kelas 1–4',
    options: [
      { tag: 'SEKOLAH DASAR', title: 'Bimbingan Belajar Kelas 1–4', text: 'Pendampingan materi sekolah, tugas, dan kebiasaan belajar untuk siswa kelas 1 sampai 4.', to: '/sd#bimbel-sd', action: 'Lihat program SD' },
    ],
    features: [
      { icon: '📚', title: 'Materi sesuai jenjang', text: 'Pelajari materi sekolah dengan penjelasan yang disesuaikan dengan jenjang siswa.' },
      { icon: '✏️', title: 'Pendampingan tugas', text: 'Bawa tugas dan PR untuk dibahas bersama tutor.' },
      { icon: '🌱', title: 'Proses belajar terarah', text: 'Bangun pemahaman dan rutinitas belajar secara bertahap.' },
    ],
  },
  englishForKids: {
    name: 'English For Kids', eyebrow: 'BAHASA INGGRIS UNTUK ANAK',
    headline: 'Belajar bahasa Inggris', accent: 'dengan cara yang menyenangkan.',
    description: 'Kegiatan belajar bahasa Inggris yang ramah anak untuk mengenal kosakata, memahami ungkapan sehari-hari, dan berlatih berbicara.',
    audience: 'Program anak', image: '/images/programs/03.svg', tone: 'english', visual: 'Fun English, happy learning',
    optionsHeading: 'Program English For Kids',
    options: [
      { tag: 'BAHASA INGGRIS', title: 'English For Kids', text: 'Belajar kosakata, ungkapan sehari-hari, dan percakapan dengan aktivitas ramah anak.', to: 'https://wa.me/6285111630006', external: true, action: 'Tanya program' },
    ],
    features: [
      { icon: '🔤', title: 'Kosakata sehari-hari', text: 'Kenali kata dan ungkapan sederhana yang dekat dengan keseharian anak.' },
      { icon: '💬', title: 'Latihan berbicara', text: 'Berlatih menggunakan bahasa Inggris dengan percaya diri.' },
      { icon: '🎨', title: 'Aktivitas ramah anak', text: 'Belajar melalui kegiatan yang aktif dan menyenangkan.' },
    ],
  },
  persiapanTka: {
    name: 'Persiapan TKA', eyebrow: 'LATIHAN & PENGUATAN MATERI TKA',
    headline: 'Persiapan lebih terarah', accent: 'untuk menghadapi TKA.',
    description: 'Latihan soal dan penguatan materi bersama tutor untuk membantu siswa memahami bentuk soal dan mengenali materi yang perlu diperdalam.',
    audience: 'SD · SMP · SMA', image: '/images/programs/02.svg', tone: 'blue', visual: 'Siap menghadapi TKA',
    optionsHeading: 'Pilih jenjang persiapan TKA',
    options: [
      { tag: 'SEKOLAH DASAR', title: 'TKA SD', text: 'Persiapan dan latihan TKA untuk siswa Sekolah Dasar.', to: '#tka-sd-table', action: 'Lihat tabel TKA SD' },
      { tag: 'SEKOLAH MENENGAH PERTAMA', title: 'TKA SMP', text: 'Persiapan TKA dengan latihan terarah untuk siswa SMP.', to: '#tka-smp-table', action: 'Lihat tabel TKA SMP' },
      { tag: 'SEKOLAH MENENGAH ATAS', title: 'TKA SMA', text: 'Penguatan materi dan latihan TKA untuk siswa SMA.', to: '#tka-sma-table', action: 'Lihat tabel TKA SMA' },
    ],
    comparisonTables: [
      {
        id: 'tka-sd-table', level: 'sd', title: 'Persiapan TKA SD', subtitle: 'Latihan dan pendampingan untuk jenjang Sekolah Dasar.',
        rows: [
          { title: 'Latihan soal TKA SD', large: 'Latihan soal bersama kelompok', private: 'Latihan mengikuti kebutuhan siswa' },
          { title: 'Pembahasan soal', large: 'Diskusi strategi menjawab soal', private: 'Pembahasan lebih terarah per siswa' },
          { title: 'Evaluasi kesiapan', large: 'Kenali materi yang perlu diperkuat', private: 'Fokus evaluasi pada kemajuan siswa' },
          { title: 'Akses website tryout', large: 'Akses latihan dan simulasi tryout', private: 'Akses latihan dan simulasi tryout' },
        ],
      },
      {
        id: 'tka-smp-table', level: 'smp', title: 'Persiapan TKA SMP', subtitle: 'Penguatan materi dan evaluasi kesiapan untuk siswa SMP.',
        rows: [
          { title: 'Latihan soal TKA', large: 'Latihan dan diskusi dalam kelompok', private: 'Latihan sesuai kebutuhan siswa' },
          { title: 'Pembahasan materi', large: 'Bahas strategi bersama tutor dan teman', private: 'Fokus pada materi yang belum dikuasai' },
          { title: 'Evaluasi kesiapan', large: 'Kenali topik untuk latihan lanjutan', private: 'Pantau perkembangan belajar personal' },
          { title: 'Akses website tryout', large: 'Akses latihan dan simulasi tryout', private: 'Akses latihan dan simulasi tryout' },
        ],
      },
      {
        id: 'tka-sma-table', level: 'sma', title: 'Persiapan TKA SMA', subtitle: 'Latihan dan pembahasan materi untuk target TKA SMA.',
        rows: [
          { title: 'Latihan soal TKA', large: 'Latihan soal bersama kelompok', private: 'Latihan sesuai kebutuhan siswa' },
          { title: 'Pembahasan konsep', large: 'Diskusi strategi bersama tutor', private: 'Fokus pada topik pilihan siswa' },
          { title: 'Evaluasi belajar', large: 'Kenali area yang perlu diperkuat', private: 'Ulas perkembangan secara personal' },
          { title: 'Akses website tryout', large: 'Akses latihan dan simulasi tryout', private: 'Akses latihan dan simulasi tryout' },
        ],
      },
    ],
    features: [
      { icon: '📝', title: 'Latihan soal terarah', text: 'Berlatih soal TKA sesuai jenjang dan target belajar siswa.' },
      { icon: '🧠', title: 'Pembahasan materi', text: 'Pahami cara menjawab melalui pembahasan bersama tutor.' },
      { icon: '🎯', title: 'Evaluasi kesiapan', text: 'Kenali topik yang sudah dikuasai dan yang perlu diperkuat.' },
    ],
  },
  persiapanSnbt: {
    name: 'Persiapan SNBT', eyebrow: 'STRATEGI & LATIHAN MENUJU PTN',
    headline: 'Susun strategi belajar', accent: 'menuju target perguruan tinggi.',
    description: 'Persiapan SNBT melalui latihan soal, pembahasan strategi pengerjaan, dan simulasi tryout untuk membantu siswa belajar dengan lebih terarah.',
    audience: 'SMA · Gap Year', image: '/images/programs/03.svg', tone: 'snbt', visual: 'Rancang langkah menuju PTN',
    features: [
      { icon: '📝', title: 'Latihan soal SNBT', text: 'Asah kemampuan melalui latihan soal dan pembahasan terarah.' },
      { icon: '🧭', title: 'Strategi pengerjaan', text: 'Kenali pendekatan untuk mengatur waktu dan menyelesaikan soal.' },
      { icon: '💻', title: 'Simulasi tryout', text: 'Gunakan website tryout Infiedu untuk latihan simulasi.' },
    ],
  },
}
const program = computed(() => programs[route.meta.program] ?? programs.bimbinganBelajar)
function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? null : name
}
function closeMenus() {
  menuOpen.value = false
  openDropdown.value = null
}
</script>

<template>
  <div class="program-page" :class="`program-${program.tone}`" @keydown.esc="closeMenus">
    <header class="site-header program-header">
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
            <li v-for="item in programMenu" :key="item.label"><RouterLink :to="item.to" @click="closeMenus">{{ item.label }}</RouterLink></li>
          </ul>
        </div>
        <RouterLink :to="{ path: '/', hash: '#cerita' }" @click="closeMenus">Cerita Siswa</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#promo' }" @click="closeMenus">Promo</RouterLink>
        <a class="nav-cta" :href="whatsappUrl" target="_blank" rel="noopener noreferrer" @click="closeMenus">Coba Kelas Tatap Muka <span>↗</span></a>
      </nav>
    </header>

    <main class="program-main">
      <section class="program-hero layout-width">
        <div class="program-hero-copy">
          <RouterLink class="program-back" to="/">← Kembali ke beranda</RouterLink>
          <p class="eyebrow"><span></span>{{ program.eyebrow }}</p>
          <h1>{{ program.headline }} <em>{{ program.accent }}</em></h1>
          <p class="program-description">{{ program.description }}</p>
          <div class="program-audience"><span>{{ program.audience }}</span><span>Kelas tatap muka</span></div>
          <a class="button button-dark" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Konsultasi program <span>↗</span></a>
        </div>
        <div class="program-hero-art" aria-hidden="true">
          <div class="program-art-orbit"></div>
          <img :src="program.image" alt="" />
          <span>{{ program.visual }}</span>
          <i class="program-art-spark spark-a">✦</i><i class="program-art-spark spark-b">✳</i>
        </div>
      </section>

      <section v-if="program.options" class="program-options layout-width">
        <div class="program-options-heading">
          <p class="eyebrow"><span></span> PILIH PROGRAM</p>
          <h2>{{ program.optionsHeading }}</h2>
        </div>
        <div class="program-option-grid" :class="{ 'program-option-single': program.options.length === 1 }">
          <template v-for="option in program.options" :key="option.title">
            <a v-if="option.external" class="program-option-card" :href="option.to" target="_blank" rel="noopener noreferrer">
              <span class="program-option-tag">{{ option.tag }}</span>
              <h3>{{ option.title }}</h3>
              <p>{{ option.text }}</p>
              <span class="program-option-action">{{ option.action }} <b>↗</b></span>
            </a>
            <RouterLink v-else class="program-option-card" :to="option.to">
              <span class="program-option-tag">{{ option.tag }}</span>
              <h3>{{ option.title }}</h3>
              <p>{{ option.text }}</p>
              <span class="program-option-action">{{ option.action }} <b>↗</b></span>
            </RouterLink>
          </template>
        </div>
      </section>

      <section v-if="program.comparisonTables" class="program-tka-tables layout-width">
        <article v-for="table in program.comparisonTables" :id="table.id" :key="table.id" class="program-tka-table-section" :class="`program-tka-${table.level}`">
          <div class="program-tka-table-heading"><p class="eyebrow"><span></span> PILIHAN JENJANG TKA</p><h2>{{ table.title }}</h2><p>{{ table.subtitle }}</p></div>
          <div class="comparison-shell program-tka-table">
            <div class="comparison-table-wrap">
              <table class="comparison-table">
                <thead><tr>
                  <th scope="col">Rincian Program</th>
                  <th scope="col"><span class="plan-pill plan-group">Kelas Besar</span><small>Belajar bersama kelompok</small></th>
                  <th scope="col"><span class="plan-pill plan-private">Private</span><small>Fokus personal 1 siswa</small></th>
                </tr></thead>
                <tbody>
                  <tr v-for="row in table.rows" :key="row.title">
                    <th scope="row">{{ row.title }}</th>
                    <td><span class="benefit-check">✓</span>{{ row.large }}</td>
                    <td><span class="benefit-check">✓</span>{{ row.private }}</td>
                  </tr>
                </tbody>
                <tfoot><tr>
                  <th scope="row">Biaya program</th>
                  <td><div class="comparison-price"><small>Mulai dari</small><strong>Rp250.000</strong></div><a class="comparison-cta" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Tanya Kelas Besar <span>↗</span></a></td>
                  <td><div class="comparison-price"><small>Mulai dari</small><strong>Rp400.000</strong></div><a class="comparison-cta" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Tanya Private <span>↗</span></a></td>
                </tr></tfoot>
              </table>
            </div>
          </div>
        </article>
      </section>

      <section id="manfaat" class="program-benefits layout-width">
        <div class="program-section-heading">
          <p class="eyebrow"><span></span> {{ program.name.toUpperCase() }}</p>
          <h2>Belajar dengan dukungan<br /><em>yang dibutuhkan.</em></h2>
        </div>
        <div class="program-benefit-grid">
          <article v-for="(feature, index) in program.features" :key="feature.title" class="program-benefit-card">
            <span class="program-benefit-number">0{{ index + 1 }}</span>
            <span class="program-benefit-icon">{{ feature.icon }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.text }}</p>
          </article>
        </div>
      </section>

      <section v-if="!program.comparisonTables" class="program-pricing layout-width">
        <div class="program-pricing-heading"><p class="eyebrow"><span></span> PILIH FORMAT BELAJAR</p><h2>Sesuaikan dengan kebutuhanmu.</h2></div>
        <div class="program-plan-grid">
          <article class="program-plan-card plan-large">
            <span class="plan-pill plan-group">Kelas Besar</span>
            <p>Belajar tatap muka bersama kelompok dengan pendampingan tutor.</p>
            <small>Mulai dari</small><strong>Rp250.000</strong>
            <a class="comparison-cta" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Tanya Kelas Besar <span>↗</span></a>
          </article>
          <article class="program-plan-card plan-one-to-one">
            <span class="plan-pill plan-private">Private</span>
            <p>Belajar tatap muka privat dengan fokus pada kebutuhan siswa.</p>
            <small>Mulai dari</small><strong>Rp400.000</strong>
            <a class="comparison-cta" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Tanya Private <span>↗</span></a>
          </article>
        </div>
      </section>
    </main>

    <footer class="program-footer">
      <RouterLink class="logo" to="/" aria-label="Kembali ke beranda"><img class="logo-symbol" :src="infieduMark" alt="" /><span class="logo-wordmark">InfiEdu</span></RouterLink>
      <span>Teman tumbuh dan belajar.</span>
      <RouterLink to="/">Kembali ke beranda ↑</RouterLink>
    </footer>
  </div>
</template>
