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
  { label: 'UTBK/SNBT', to: '/#program' },
]
const programMenu = [
  { label: 'Bimbingan Belajar', to: '/program/bimbingan-belajar' },
  { label: 'English For Kids', to: '/program/english-for-kids' },
  { label: 'Persiapan TKA', to: '/program/persiapan-tka' },
  { label: 'Persiapan SNBT', to: '/program/persiapan-snbt' },
]
const pages = {
  sd: {
    label: 'SD',
    eyebrow: 'PROGRAM BIMBINGAN SD',
    headline: 'Bangun fondasi belajar yang',
    headlineAccent: 'kuat dan menyenangkan.',
    description: 'Pendampingan belajar untuk membantu anak memahami pelajaran sekolah, mengerjakan tugas, dan tumbuh percaya diri.',
    grade: 'Kelas 1–6',
    visualTitle: 'Belajar selangkah demi selangkah',
    illustration: '/images/programs/01.svg',
    tone: 'coral',
    offeringsEyebrow: 'PILIH PROGRAM SD',
    offeringsHeading: 'Tiga program untuk',
    offeringsAccent: 'setiap langkah belajar.',
    focuses: [
      { icon: '📖', title: 'Literasi & numerasi', text: 'Kuatkan pemahaman membaca, menulis, dan berhitung sesuai tahap belajar anak.' },
      { icon: '✏️', title: 'Pendampingan tugas', text: 'Belajar mengerjakan tugas sekolah dengan bimbingan tutor yang sabar.' },
      { icon: '🌱', title: 'Kebiasaan belajar', text: 'Bangun rutinitas belajar yang terarah dan tetap menyenangkan.' },
    ],
    offerings: [
      {
        id: 'bimbel-sd',
        title: 'Bimbel SD',
        kicker: 'PENDAMPINGAN PELAJARAN SEKOLAH',
        text: 'Bantu anak memahami materi sekolah, menyelesaikan tugas, dan membangun kebiasaan belajar yang baik.',
        points: ['Belajar materi sesuai jenjang', 'Pendampingan tugas dan PR', 'Tutor mendampingi proses belajar'],
        visual: 'Belajar makin percaya diri',
        illustration: '/images/programs/01.svg',
        tone: 'coral',
        tableTone: 'bimbel',
        comparisonRows: [
          { title: 'Materi pelajaran', large: 'Belajar sesuai jenjang SD bersama kelompok', private: 'Fokus pada kebutuhan belajar anak' },
          { title: 'Pendampingan PR', large: 'Diskusi tugas dalam sesi belajar', private: 'Pembahasan tugas dengan fokus personal' },
          { title: 'Penguatan konsep', large: 'Belajar dan bertanya bersama tutor', private: 'Tempo belajar menyesuaikan siswa' },
        ],
      },
      {
        id: 'tka-sd',
        title: 'TKA SD',
        kicker: 'PERSIAPAN TES KEMAMPUAN AKADEMIK',
        text: 'Persiapan TKA SD dengan latihan yang terarah agar anak lebih siap menghadapi soal dan memahami cara menjawabnya.',
        points: ['Latihan soal TKA SD', 'Pembahasan materi bersama tutor', 'Evaluasi untuk mengenali materi yang perlu diperkuat'],
        visual: 'Siap menghadapi TKA',
        illustration: '/images/programs/02.svg',
        tone: 'blue',
        tableTone: 'tka',
        comparisonRows: [
          { title: 'Latihan TKA SD', large: 'Latihan soal bersama kelompok', private: 'Latihan sesuai kebutuhan siswa' },
          { title: 'Pembahasan soal', large: 'Diskusi strategi menjawab soal', private: 'Pembahasan lebih terarah per siswa' },
          { title: 'Evaluasi kesiapan', large: 'Kenali materi yang perlu diperkuat', private: 'Fokus evaluasi pada kemajuan siswa' },
          { title: 'Akses website tryout', large: 'Akses latihan dan simulasi tryout', private: 'Akses latihan dan simulasi tryout' },
        ],
      },
      {
        id: 'english-for-kids',
        title: 'English For Kids',
        kicker: 'BAHASA INGGRIS UNTUK ANAK',
        text: 'Kenalkan bahasa Inggris dengan kegiatan belajar yang menyenangkan dan sesuai tahap perkembangan anak.',
        points: ['Kosakata dan ungkapan sehari-hari', 'Latihan berbicara dengan percaya diri', 'Aktivitas belajar yang ramah anak'],
        visual: 'Fun English, happy learning',
        illustration: '/images/programs/03.svg',
        tone: 'sage',
        tableTone: 'english',
        comparisonRows: [
          { title: 'Kosakata & ungkapan', large: 'Belajar bersama teman sekelas', private: 'Materi mengikuti kemampuan anak' },
          { title: 'Latihan berbicara', large: 'Latihan percakapan dalam kelompok', private: 'Kesempatan latihan lebih personal' },
          { title: 'Aktivitas belajar', large: 'Kegiatan interaktif bersama tutor', private: 'Kegiatan menyesuaikan kebutuhan anak' },
        ],
      },
    ],
  },
  smp: {
    label: 'SMP',
    eyebrow: 'PROGRAM BIMBINGAN SMP',
    headline: 'Temukan cara belajar',
    headlineAccent: 'efektif di masa SMP.',
    description: 'Persiapkan TKA SMP dengan latihan terarah, penguatan konsep, dan pendampingan tutor.',
    grade: 'Kelas 7–9',
    visualTitle: 'Pahami konsep, bukan sekadar hafalan',
    illustration: '/images/programs/02.svg',
    tone: 'blue',
    focuses: [
      { icon: '🧠', title: 'Pemahaman konsep', text: 'Urai materi sekolah menjadi langkah yang lebih mudah dipahami.' },
      { icon: '📝', title: 'Persiapan TKA SMP', text: 'Latihan terarah untuk membantu siswa lebih siap menghadapi TKA.' },
      { icon: '🎯', title: 'Strategi belajar', text: 'Kenali prioritas materi dan susun kebiasaan belajar yang konsisten.' },
    ],
    offeringsEyebrow: 'PROGRAM SMP',
    offeringsHeading: 'Satu program,',
    offeringsAccent: 'fokus persiapan TKA.',
    offerings: [
      {
        id: 'tka-smp',
        title: 'Persiapan TKA SMP',
        kicker: 'LATIHAN & PENGUATAN MATERI TKA',
        text: 'Bantu siswa SMP memahami materi dan berlatih menjawab soal TKA dengan lebih terarah.',
        points: ['Latihan soal untuk persiapan TKA', 'Pembahasan materi bersama tutor', 'Kenali materi yang perlu diperkuat'],
        visual: 'Lebih siap menghadapi TKA',
        illustration: '/images/programs/02.svg',
        tone: 'blue',
        tableTone: 'tka',
        comparisonRows: [
          { title: 'Latihan soal TKA', large: 'Latihan dan diskusi dalam kelompok', private: 'Latihan mengikuti kebutuhan siswa' },
          { title: 'Pembahasan materi', large: 'Bahas strategi bersama tutor dan teman', private: 'Fokus pada materi yang belum dikuasai' },
          { title: 'Evaluasi kesiapan', large: 'Kenali topik untuk latihan lanjutan', private: 'Pantau perkembangan belajar personal' },
          { title: 'Akses website tryout', large: 'Akses latihan dan simulasi tryout', private: 'Akses latihan dan simulasi tryout' },
        ],
      },
    ],
  },
  sma: {
    label: 'SMA',
    eyebrow: 'PROGRAM BIMBINGAN SMA',
    headline: 'Mantapkan pelajaran dan siapkan',
    headlineAccent: 'langkah berikutnya.',
    description: 'Pilih persiapan TKA atau SNBT dengan latihan dan pendampingan yang disesuaikan dengan target belajar siswa SMA.',
    grade: 'Kelas 10–12',
    visualTitle: 'Fokus pada target masa depan',
    illustration: '/images/programs/03.svg',
    tone: 'sage',
    focuses: [
      { icon: '📚', title: 'Pendalaman materi', text: 'Belajar konsep inti dan latihan soal untuk mendukung pelajaran di sekolah.' },
      { icon: '🎓', title: 'Persiapan SNBT', text: 'Latihan dan strategi belajar untuk mempersiapkan diri menuju perguruan tinggi.' },
      { icon: '🧭', title: 'Rencana belajar', text: 'Atur target akademik dan langkah persiapan secara bertahap.' },
    ],
    offeringsEyebrow: 'PILIH PROGRAM SMA',
    offeringsHeading: 'Persiapan TKA dan SNBT',
    offeringsAccent: 'sesuai targetmu.',
    offerings: [
      {
        id: 'tka-sma',
        title: 'Persiapan TKA SMA',
        kicker: 'PENGUATAN MATERI & LATIHAN TKA',
        text: 'Latihan terarah dan pembahasan materi untuk membantu siswa SMA lebih siap menghadapi TKA.',
        points: ['Latihan soal TKA', 'Pembahasan konsep bersama tutor', 'Evaluasi materi yang perlu diperkuat'],
        visual: 'Siapkan diri untuk TKA',
        illustration: '/images/programs/02.svg',
        tone: 'blue',
        tableTone: 'tka',
        comparisonRows: [
          { title: 'Latihan soal TKA', large: 'Latihan soal bersama kelompok', private: 'Latihan sesuai kebutuhan siswa' },
          { title: 'Pembahasan konsep', large: 'Diskusi strategi bersama tutor', private: 'Fokus pada topik pilihan siswa' },
          { title: 'Evaluasi belajar', large: 'Kenali area yang perlu diperkuat', private: 'Ulas perkembangan secara personal' },
          { title: 'Akses website tryout', large: 'Akses latihan dan simulasi tryout', private: 'Akses latihan dan simulasi tryout' },
        ],
      },
      {
        id: 'snbt-sma',
        title: 'Persiapan SNBT',
        kicker: 'STRATEGI & LATIHAN MENUJU PTN',
        text: 'Susun strategi belajar dan berlatih soal untuk mendukung persiapan seleksi masuk perguruan tinggi.',
        points: ['Latihan soal persiapan SNBT', 'Pembahasan strategi pengerjaan', 'Gunakan website tryout untuk simulasi'],
        visual: 'Rancang langkah menuju PTN',
        illustration: '/images/programs/03.svg',
        tone: 'sage',
        tableTone: 'snbt',
        comparisonRows: [
          { title: 'Latihan SNBT', large: 'Latihan dan diskusi soal dalam kelompok', private: 'Latihan terarah sesuai kebutuhan' },
          { title: 'Strategi pengerjaan', large: 'Bahas pendekatan soal bersama tutor', private: 'Fokus pada strategi individual' },
          { title: 'Simulasi tryout', large: 'Gunakan website tryout Infiedu', private: 'Gunakan website tryout Infiedu' },
        ],
      },
    ],
  },
}
const page = computed(() => pages[route.meta.level] ?? pages.sd)
const comparisonRows = [
  { title: 'Format belajar', large: 'Belajar tatap muka bersama kelompok', private: 'Belajar tatap muka privat 1 siswa' },
  { title: 'Pendampingan tutor', large: 'Pembahasan materi bersama teman sekelas', private: 'Fokus tutor mengikuti kebutuhan siswa' },
  { title: 'Konsultasi PR', large: 'Diskusi tugas dalam sesi belajar', private: 'Pembahasan PR dengan perhatian personal' },
  { title: 'Website tryout', large: 'Latihan soal dan simulasi ujian', private: 'Latihan soal dan simulasi ujian' },
  { title: 'Konselor belajar', large: 'Dukungan untuk perjalanan belajar', private: 'Dukungan untuk perjalanan belajar' },
]
function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? null : name
}
function closeMenu() {
  menuOpen.value = false
  openDropdown.value = null
}
</script>

<template>
  <div class="level-page" :class="`level-${page.tone}`" @keydown.esc="closeMenu">
    <header class="site-header level-header">
      <RouterLink class="logo" to="/" aria-label="InfiEdu, beranda" @click="closeMenu">
        <img class="logo-symbol" :src="infieduMark" alt="" />
        <span class="logo-wordmark">InfiEdu<small>Teman tumbuh dan belajar</small></span>
      </RouterLink>
      <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-label="Buka menu" @click="menuOpen = !menuOpen">{{ menuOpen ? '×' : '☰' }}</button>
      <nav class="navigation" :class="{ 'navigation-open': menuOpen }" aria-label="Navigasi utama">
        <div class="nav-dropdown">
          <button type="button" class="nav-trigger" :aria-expanded="openDropdown === 'jenjang'" @click="toggleDropdown('jenjang')">Pilih Jenjang <span>▾</span></button>
          <ul v-show="openDropdown === 'jenjang'" class="dropdown-panel">
            <li v-for="level in levels" :key="level.label"><RouterLink :to="level.to" @click="closeMenu">{{ level.label }}</RouterLink></li>
          </ul>
        </div>
        <div class="nav-dropdown">
          <button type="button" class="nav-trigger" :aria-expanded="openDropdown === 'program'" @click="toggleDropdown('program')">Pilih Program <span>▾</span></button>
          <ul v-show="openDropdown === 'program'" class="dropdown-panel">
            <li v-for="program in programMenu" :key="program.label"><RouterLink :to="program.to" @click="closeMenu">{{ program.label }}</RouterLink></li>
          </ul>
        </div>
        <RouterLink :to="{ path: '/', hash: '#cerita' }" @click="closeMenu">Cerita Siswa</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#promo' }" @click="closeMenu">Promo</RouterLink>
        <a class="nav-cta" :href="whatsappUrl" target="_blank" rel="noopener noreferrer" @click="closeMenu">Coba Kelas Tatap Muka <span>↗</span></a>
      </nav>
    </header>

    <main class="level-main">
      <section class="level-hero layout-width">
        <div class="level-copy">
          <p class="eyebrow"><span></span>{{ page.eyebrow }}</p>
          <h1>{{ page.headline }} <em>{{ page.headlineAccent }}</em></h1>
          <p class="level-description">{{ page.description }}</p>
          <div class="level-tags">
            <span>{{ page.grade }}</span><span>Kelas tatap muka</span><span>Tutor pendamping</span>
          </div>
          <div class="level-actions">
            <a class="button button-dark" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Konsultasi sekarang <span>↗</span></a>
            <a class="level-text-link" href="#fokus">Lihat fokus belajar <span>↓</span></a>
          </div>
        </div>
        <div class="level-visual" aria-hidden="true">
          <div class="level-visual-orbit"></div>
          <img :src="page.illustration" alt="" />
          <div class="level-visual-caption"><span>INFIEDU {{ page.label }}</span><strong>{{ page.visualTitle }}</strong></div>
          <span class="level-spark spark-one">✦</span><span class="level-spark spark-two">✳</span>
        </div>
      </section>

      <section v-if="page.offerings" id="fokus" class="sd-programs layout-width">
        <div class="level-section-heading">
          <p class="eyebrow"><span></span> {{ page.offeringsEyebrow }}</p>
          <h2>{{ page.offeringsHeading }}<br /><em>{{ page.offeringsAccent }}</em></h2>
        </div>
        <div class="sd-program-list">
          <div v-for="(program, index) in page.offerings" :id="program.id" :key="program.title" class="sd-program-entry" :class="`sd-entry-${program.tableTone}`">
            <article class="sd-program-card" :class="[`sd-program-${program.tone}`, { 'sd-program-reverse': index === 1 }]">
              <div class="sd-program-copy">
                <p class="sd-program-kicker">{{ program.kicker }}</p>
                <h3>{{ program.title }}</h3>
                <p class="sd-program-description">{{ program.text }}</p>
                <ul><li v-for="point in program.points" :key="point">{{ point }}</li></ul>
                <a class="sd-program-link" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Tanya program <span>↗</span></a>
              </div>
              <div class="sd-program-art" aria-hidden="true">
                <img :src="program.illustration" alt="" />
                <span>{{ program.visual }}</span>
              </div>
            </article>
            <div class="comparison-shell sd-program-comparison">
              <div class="comparison-table-wrap">
                <table class="comparison-table">
                  <thead><tr>
                    <th scope="col">{{ program.title }} · Rincian Program</th>
                    <th scope="col"><span class="plan-pill plan-group">Kelas Besar</span><small>Belajar bersama kelompok</small></th>
                    <th scope="col"><span class="plan-pill plan-private">Private</span><small>Fokus personal 1 siswa</small></th>
                  </tr></thead>
                  <tbody>
                    <tr v-for="row in program.comparisonRows" :key="row.title">
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
          </div>
        </div>
      </section>

      <section v-if="!page.offerings" class="level-comparison layout-width">
        <div class="level-section-heading">
          <p class="eyebrow"><span></span> PILIH FORMAT BELAJARMU</p>
          <h2>Dua cara belajar,<br /><em>satu tujuan.</em></h2>
        </div>
        <div class="comparison-shell">
          <div class="comparison-table-wrap">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Fasilitas &amp; pendampingan</th>
                  <th scope="col"><span class="plan-pill plan-group">Kelas Besar</span><small>Belajar bersama kelompok</small></th>
                  <th scope="col"><span class="plan-pill plan-private">Private</span><small>Fokus personal 1 siswa</small></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in comparisonRows" :key="row.title">
                  <th scope="row">{{ row.title }}</th>
                  <td><span class="benefit-check">✓</span>{{ row.large }}</td>
                  <td><span class="benefit-check">✓</span>{{ row.private }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row">Jadwal &amp; biaya</th>
                  <td><div class="comparison-price"><small>Mulai dari</small><strong>Rp250.000</strong></div><a class="comparison-cta" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Tanya Kelas Besar <span>↗</span></a></td>
                  <td><div class="comparison-price"><small>Mulai dari</small><strong>Rp400.000</strong></div><a class="comparison-cta" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Tanya Private <span>↗</span></a></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      <section v-if="!page.offerings" id="fokus" class="level-focus layout-width">
        <div class="level-section-heading">
          <p class="eyebrow"><span></span> BELAJAR SESUAI TAHAP TUMBUH</p>
          <h2>Fokus belajar untuk<br /><em>{{ page.label }}</em></h2>
        </div>
        <div class="level-focus-grid">
          <article v-for="(focus, index) in page.focuses" :key="focus.title" class="level-focus-card" :class="`focus-${index + 1}`">
            <span class="level-focus-icon">{{ focus.icon }}</span>
            <h3>{{ focus.title }}</h3>
            <p>{{ focus.text }}</p>
          </article>
        </div>
      </section>

      <section class="level-cta layout-width">
        <div><p class="eyebrow"><span></span> MULAI BERSAMA INFIEDU</p><h2>Temukan program yang pas untuk {{ page.label }}.</h2><p>Tanyakan jadwal dan pilihan pendampingan kepada tim Infiedu.</p></div>
        <a class="button button-dark" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Hubungi Infiedu <span>↗</span></a>
      </section>
    </main>

    <footer class="level-footer">
      <RouterLink class="logo" to="/" aria-label="Kembali ke beranda">
        <img class="logo-symbol" :src="infieduMark" alt="" />
        <span class="logo-wordmark">InfiEdu</span>
      </RouterLink>
      <span>Teman tumbuh dan belajar.</span>
      <RouterLink to="/">Kembali ke beranda ↑</RouterLink>
    </footer>
  </div>
</template>
