<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ComparisonTable from '../components/ComparisonTable.vue'
import CtaBand from '../components/CtaBand.vue'
import { prices, whatsappUrl } from '../data/site'

const route = useRoute()
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
  englishForYouth: {
    name: 'English For Youth', eyebrow: 'BAHASA INGGRIS UNTUK REMAJA',
    headline: 'Bahasa Inggris untuk remaja,', accent: 'makin percaya diri dipakai.',
    description: 'Program bahasa Inggris untuk siswa SMP dan SMA: perkuat grammar dan kosakata, latih percakapan, dan bangun kepercayaan diri memakai bahasa Inggris di sekolah maupun sehari-hari.',
    audience: 'SMP · SMA', image: '/images/programs/05.svg', tone: 'youth', visual: 'Speak up with confidence',
    optionsHeading: 'Program English For Youth',
    options: [
      { tag: 'BAHASA INGGRIS REMAJA', title: 'English For Youth', text: 'Latihan percakapan, grammar, dan kosakata untuk siswa SMP dan SMA bersama tutor.', to: 'https://wa.me/6285111630006', external: true, action: 'Tanya program' },
    ],
    features: [
      { icon: '🗣️', title: 'Latihan percakapan', text: 'Berlatih berbicara dalam situasi sehari-hari agar lebih lancar dan percaya diri.' },
      { icon: '📘', title: 'Grammar & kosakata', text: 'Perkuat tata bahasa dan kosakata yang dibutuhkan untuk pelajaran di sekolah.' },
      { icon: '🚀', title: 'Berani tampil', text: 'Latih kemampuan menyampaikan ide dalam bahasa Inggris, misalnya saat presentasi.' },
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
    audience: 'SMA · Gap Year', image: '/images/programs/04.svg', tone: 'snbt', visual: 'Rancang langkah menuju PTN',
    features: [
      { icon: '📝', title: 'Latihan soal SNBT', text: 'Asah kemampuan melalui latihan soal dan pembahasan terarah.' },
      { icon: '🧭', title: 'Strategi pengerjaan', text: 'Kenali pendekatan untuk mengatur waktu dan menyelesaikan soal.' },
      { icon: '💻', title: 'Simulasi tryout', text: 'Gunakan website tryout Infiedu untuk latihan simulasi.' },
    ],
  },
}
const program = computed(() => programs[route.meta.program] ?? programs.bimbinganBelajar)
const tones = {
  coral: { tone: 'var(--coral)', soft: 'var(--coral-50)' },
  english: { tone: 'var(--teal-600)', soft: 'var(--teal-50)' },
  youth: { tone: 'var(--violet)', soft: 'var(--violet-50)' },
  blue: { tone: '#1aa9c4', soft: 'var(--cyan-50)' },
  snbt: { tone: 'var(--navy-700)', soft: 'var(--lilac-50)' },
}
const toneStyle = computed(() => ({ '--tone': tones[program.value.tone]?.tone, '--tone-soft': tones[program.value.tone]?.soft }))
const tablePrice = (level) => prices[`tka-${level}`]
const planPriceKey = { bimbinganBelajar: 'bimbel-sd', englishForKids: 'english-for-kids', englishForYouth: 'english-for-youth', persiapanSnbt: 'snbt-sma' }
const planPrice = computed(() => prices[planPriceKey[route.meta.program]] ?? prices['bimbel-sd'])
</script>

<template>
  <div class="program-page" :style="toneStyle">
    <section class="page-hero">
      <div class="container page-hero__grid">
        <div class="page-hero__copy">
          <nav class="crumbs" aria-label="Breadcrumb"><RouterLink to="/">Beranda</RouterLink><span aria-hidden="true">/</span><RouterLink :to="{ path: '/', hash: '#program' }">Program</RouterLink><span aria-hidden="true">/</span><span>{{ program.name }}</span></nav>
          <p class="eyebrow">{{ program.eyebrow }}</p>
          <h1>{{ program.headline }} <em>{{ program.accent }}</em></h1>
          <p class="page-hero__lead">{{ program.description }}</p>
          <div class="page-hero__tags"><span class="chip"><i></i>{{ program.audience }}</span><span class="chip"><i></i>Kelas tatap muka</span></div>
          <div class="page-hero__actions">
            <a class="btn btn--primary btn--lg" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Konsultasi program <span class="btn__arrow" aria-hidden="true">→</span></a>
            <a class="link-arrow" href="#manfaat">Apa yang didapat <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <img :src="program.image" alt="" />
          <div class="hero-art__caption"><b>✦</b><span><small>{{ program.name }}</small>{{ program.visual }}</span></div>
          <span class="hero-art__spark hero-art__spark--a">✳</span><span class="hero-art__spark hero-art__spark--b">✦</span>
        </div>
      </div>
    </section>

    <section v-if="program.options" class="section--tight container" aria-labelledby="options-title">
      <div class="section-head" v-reveal>
        <div class="section-head__copy">
          <p class="eyebrow">Pilih program</p>
          <h2 id="options-title">{{ program.optionsHeading }}</h2>
        </div>
      </div>
      <div class="option-grid" :class="{ 'option-grid--single': program.options.length === 1 }">
        <template v-for="(option, i) in program.options" :key="option.title">
          <a v-if="option.external || option.to.startsWith('#')" class="option" :href="option.to" :target="option.external ? '_blank' : undefined" :rel="option.external ? 'noopener noreferrer' : undefined" v-reveal="i * 90">
            <span class="option__tag">{{ option.tag }}</span>
            <h3>{{ option.title }}</h3>
            <p>{{ option.text }}</p>
            <span class="option__action">{{ option.action }} <b aria-hidden="true">→</b></span>
          </a>
          <RouterLink v-else class="option" :to="option.to" v-reveal="i * 90">
            <span class="option__tag">{{ option.tag }}</span>
            <h3>{{ option.title }}</h3>
            <p>{{ option.text }}</p>
            <span class="option__action">{{ option.action }} <b aria-hidden="true">→</b></span>
          </RouterLink>
        </template>
      </div>
    </section>

    <section v-if="program.comparisonTables" class="section offerings" aria-label="Rincian dan biaya TKA per jenjang">
      <div class="container tka-list">
        <article v-for="table in program.comparisonTables" :id="table.id" :key="table.id" class="tka" v-reveal>
          <div class="tka__head">
            <span class="tka__level">{{ table.level.toUpperCase() }}</span>
            <div><h2>{{ table.title }}</h2><p>{{ table.subtitle }}</p></div>
          </div>
          <ComparisonTable :rows="table.rows" :price-large="tablePrice(table.level).large" :price-private="tablePrice(table.level).private" />
        </article>
      </div>
    </section>

    <section id="manfaat" class="section container" aria-labelledby="benefit-title">
      <div class="section-head section-head--center" v-reveal>
        <div class="section-head__copy">
          <p class="eyebrow">{{ program.name }}</p>
          <h2 id="benefit-title">Belajar dengan dukungan <span class="hl" :style="{ color: 'var(--tone)' }">yang dibutuhkan.</span></h2>
        </div>
      </div>
      <div class="feature-grid">
        <article v-for="(feature, i) in program.features" :key="feature.title" class="feature-card" v-reveal="i * 100">
          <span class="feature-card__num" aria-hidden="true">0{{ i + 1 }}</span>
          <span class="feature-card__icon" aria-hidden="true">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.text }}</p>
        </article>
      </div>
    </section>

    <section v-if="!program.comparisonTables" class="section--tight container" aria-labelledby="plan-title">
      <div class="section-head section-head--center" v-reveal>
        <div class="section-head__copy">
          <p class="eyebrow">Pilih format belajar</p>
          <h2 id="plan-title">Sesuaikan dengan <span class="hl">kebutuhanmu.</span></h2>
        </div>
      </div>
      <div class="plans">
        <article class="plan" v-reveal>
          <span class="pill pill--group">Kelas Besar</span>
          <h3>Belajar bersama kelompok</h3>
          <p>Belajar tatap muka bersama kelompok dengan pendampingan tutor.</p>
          <div class="price"><small>Mulai dari</small><strong>{{ planPrice.large }}</strong></div>
          <a class="btn btn--ghost" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Tanya Kelas Besar <span class="btn__arrow" aria-hidden="true">→</span></a>
        </article>
        <article class="plan plan--featured" v-reveal="100">
          <span class="pill pill--private">Private</span>
          <h3>Fokus personal 1 siswa</h3>
          <p>Belajar tatap muka privat dengan fokus pada kebutuhan siswa.</p>
          <div class="price"><small>Mulai dari</small><strong>{{ planPrice.private }}</strong></div>
          <a class="btn btn--primary" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Tanya Private <span class="btn__arrow" aria-hidden="true">→</span></a>
        </article>
      </div>
    </section>

    <CtaBand :title="`Siap mulai ${program.name}?`" text="Tanyakan jadwal kelas, biaya, dan kelas percobaan gratis kepada tim Infiedu." />
  </div>
</template>
