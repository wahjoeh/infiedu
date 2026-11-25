<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ComparisonTable from '../components/ComparisonTable.vue'
import CtaBand from '../components/CtaBand.vue'
import HeroVideo from '../components/HeroVideo.vue'
import { prices, whatsappUrl } from '../data/site'

const route = useRoute()
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
    offeringsHeading: 'Dua program untuk',
    offeringsAccent: 'masa SMP.',
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
      {
        id: 'english-for-youth',
        title: 'English For Youth',
        kicker: 'BAHASA INGGRIS UNTUK REMAJA',
        text: 'Perkuat grammar dan kosakata, latih percakapan, dan bangun kepercayaan diri memakai bahasa Inggris di sekolah maupun sehari-hari.',
        points: ['Latihan percakapan sehari-hari', 'Grammar dan kosakata sesuai jenjang SMP', 'Berani menyampaikan ide dalam bahasa Inggris'],
        visual: 'Speak up with confidence',
        illustration: '/images/programs/05.svg',
        tone: 'youth',
        tableTone: 'english',
        comparisonRows: [
          { title: 'Latihan percakapan', large: 'Berlatih bicara bersama teman sekelas', private: 'Kesempatan latihan bicara lebih banyak' },
          { title: 'Grammar & kosakata', large: 'Belajar materi bersama kelompok', private: 'Materi mengikuti kemampuan siswa' },
          { title: 'Pendampingan tutor', large: 'Diskusi dan tanya jawab bersama tutor', private: 'Fokus tutor pada kebutuhan siswa' },
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
    illustration: '/images/programs/04.svg',
    // Video promosi: taruh file di public/videos/. Jika file tidak ada, ilustrasi tetap tampil.
    video: '/videos/promo-tka-sma-snbt.mp4', videoPoster: '/videos/promo-tka-sma-snbt-poster.webp',
    tone: 'sage',
    focuses: [
      { icon: '📚', title: 'Pendalaman materi', text: 'Belajar konsep inti dan latihan soal untuk mendukung pelajaran di sekolah.' },
      { icon: '🎓', title: 'Persiapan SNBT', text: 'Latihan dan strategi belajar untuk mempersiapkan diri menuju perguruan tinggi.' },
      { icon: '🧭', title: 'Rencana belajar', text: 'Atur target akademik dan langkah persiapan secara bertahap.' },
    ],
    offeringsEyebrow: 'PILIH PROGRAM SMA',
    offeringsHeading: 'TKA, SNBT, dan bahasa Inggris',
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
        illustration: '/images/programs/04.svg',
        tone: 'sage',
        tableTone: 'snbt',
        comparisonRows: [
          { title: 'Latihan SNBT', large: 'Latihan dan diskusi soal dalam kelompok', private: 'Latihan terarah sesuai kebutuhan' },
          { title: 'Strategi pengerjaan', large: 'Bahas pendekatan soal bersama tutor', private: 'Fokus pada strategi individual' },
          { title: 'Simulasi tryout', large: 'Gunakan website tryout Infiedu', private: 'Gunakan website tryout Infiedu' },
        ],
      },
      {
        id: 'english-for-youth',
        title: 'English For Youth',
        kicker: 'BAHASA INGGRIS UNTUK REMAJA',
        text: 'Perkuat grammar dan kosakata, latih percakapan, dan bangun kepercayaan diri memakai bahasa Inggris di sekolah maupun sehari-hari.',
        points: ['Latihan percakapan sehari-hari', 'Grammar dan kosakata sesuai jenjang SMA', 'Berani menyampaikan ide dalam bahasa Inggris'],
        visual: 'Speak up with confidence',
        illustration: '/images/programs/05.svg',
        tone: 'youth',
        tableTone: 'english',
        comparisonRows: [
          { title: 'Latihan percakapan', large: 'Berlatih bicara bersama teman sekelas', private: 'Kesempatan latihan bicara lebih banyak' },
          { title: 'Grammar & kosakata', large: 'Belajar materi bersama kelompok', private: 'Materi mengikuti kemampuan siswa' },
          { title: 'Pendampingan tutor', large: 'Diskusi dan tanya jawab bersama tutor', private: 'Fokus tutor pada kebutuhan siswa' },
        ],
      },
    ],
  },
}
const page = computed(() => pages[route.meta.level] ?? pages.sd)
const videoFailed = ref(false)
watch(() => page.value.video, () => { videoFailed.value = false })
const comparisonRows = [
  { title: 'Format belajar', large: 'Belajar tatap muka bersama kelompok', private: 'Belajar tatap muka privat 1 siswa' },
  { title: 'Pendampingan tutor', large: 'Pembahasan materi bersama teman sekelas', private: 'Fokus tutor mengikuti kebutuhan siswa' },
  { title: 'Konsultasi PR', large: 'Diskusi tugas dalam sesi belajar', private: 'Pembahasan PR dengan perhatian personal' },
  { title: 'Website tryout', large: 'Latihan soal dan simulasi ujian', private: 'Latihan soal dan simulasi ujian' },
  { title: 'Konselor belajar', large: 'Dukungan untuk perjalanan belajar', private: 'Dukungan untuk perjalanan belajar' },
]
const tones = {
  coral: { tone: 'var(--coral)', soft: 'var(--coral-50)' },
  blue: { tone: '#1aa9c4', soft: 'var(--cyan-50)' },
  sage: { tone: 'var(--teal-600)', soft: 'var(--teal-50)' },
  youth: { tone: 'var(--violet)', soft: 'var(--violet-50)' },
}
const toneStyle = (name) => ({ '--tone': tones[name]?.tone, '--tone-soft': tones[name]?.soft })
const generalPrice = computed(() => prices[`tka-${route.meta.level ?? 'sd'}`])
</script>

<template>
  <div class="level" :style="toneStyle(page.tone)">
    <section class="page-hero">
      <div class="container page-hero__grid">
        <div class="page-hero__copy">
          <nav class="crumbs" aria-label="Breadcrumb"><RouterLink to="/">Beranda</RouterLink><span aria-hidden="true">/</span><span>Jenjang {{ page.label }}</span></nav>
          <p class="eyebrow">{{ page.eyebrow }}</p>
          <h1>{{ page.headline }} <em>{{ page.headlineAccent }}</em></h1>
          <p class="page-hero__lead">{{ page.description }}</p>
          <div class="page-hero__tags">
            <span class="chip"><i></i>{{ page.grade }}</span><span class="chip"><i></i>Kelas tatap muka</span><span class="chip"><i></i>Tutor pendamping</span>
          </div>
          <div class="page-hero__actions">
            <a class="btn btn--primary btn--lg" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Konsultasi sekarang <span class="btn__arrow" aria-hidden="true">→</span></a>
            <a class="link-arrow" href="#fokus">Lihat program {{ page.label }} <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <HeroVideo v-if="page.video && !videoFailed" :key="page.video" :src="page.video" :poster="page.videoPoster" :label="`Jenjang ${page.label}`" @failed="videoFailed = true" />
        <div v-else class="hero-art" aria-hidden="true">
          <img :src="page.illustration" alt="" />
          <div class="hero-art__caption"><b>✦</b><span><small>Infiedu {{ page.label }}</small>{{ page.visualTitle }}</span></div>
          <span class="hero-art__spark hero-art__spark--a">✳</span><span class="hero-art__spark hero-art__spark--b">✦</span>
        </div>
      </div>
    </section>

    <section class="section--tight container" aria-labelledby="focus-title">
      <div class="section-head section-head--center" v-reveal>
        <div class="section-head__copy">
          <p class="eyebrow">Belajar sesuai tahap tumbuh</p>
          <h2 id="focus-title">Fokus belajar untuk <span class="hl" :style="{ color: 'var(--tone)' }">{{ page.label }}</span></h2>
        </div>
      </div>
      <div class="feature-grid">
        <article v-for="(focus, i) in page.focuses" :key="focus.title" class="feature-card" v-reveal="i * 100">
          <span class="feature-card__num" aria-hidden="true">0{{ i + 1 }}</span>
          <span class="feature-card__icon" aria-hidden="true">{{ focus.icon }}</span>
          <h3>{{ focus.title }}</h3>
          <p>{{ focus.text }}</p>
        </article>
      </div>
    </section>

    <section v-if="page.offerings" id="fokus" class="section offerings" aria-labelledby="offer-title">
      <div class="container">
        <div class="section-head" v-reveal>
          <div class="section-head__copy">
            <p class="eyebrow">{{ page.offeringsEyebrow }}</p>
            <h2 id="offer-title">{{ page.offeringsHeading }} <span class="hl" :style="{ color: 'var(--tone)' }">{{ page.offeringsAccent }}</span></h2>
          </div>
          <nav v-if="page.offerings.length > 1" class="jump" aria-label="Lompat ke program">
            <a v-for="program in page.offerings" :key="program.id" :href="`#${program.id}`">{{ program.title }}</a>
          </nav>
        </div>
        <div class="offer-list">
          <div v-for="(program, index) in page.offerings" :id="program.id" :key="program.id" class="offer" :style="toneStyle(program.tone)">
            <article class="offer__card" :class="{ 'offer__card--reverse': index % 2 === 1 }" v-reveal>
              <div class="offer__copy">
                <p class="offer__kicker">{{ program.kicker }}</p>
                <h3>{{ program.title }}</h3>
                <p>{{ program.text }}</p>
                <ul><li v-for="point in program.points" :key="point">{{ point }}</li></ul>
                <a class="btn btn--dark" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Tanya program <span class="btn__arrow" aria-hidden="true">→</span></a>
              </div>
              <div class="offer__art" aria-hidden="true">
                <img :src="program.illustration" alt="" loading="lazy" />
                <span>{{ program.visual }}</span>
              </div>
            </article>
            <div v-reveal="80">
              <ComparisonTable :caption="`${program.title} · Rincian Program`" :rows="program.comparisonRows" :price-large="prices[program.id].large" :price-private="prices[program.id].private" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-else id="fokus" class="section container" aria-labelledby="format-title">
      <div class="section-head section-head--center" v-reveal>
        <div class="section-head__copy">
          <p class="eyebrow">Pilih format belajarmu</p>
          <h2 id="format-title">Dua cara belajar, <span class="hl">satu tujuan.</span></h2>
        </div>
      </div>
      <ComparisonTable v-reveal caption="Fasilitas &amp; pendampingan" :rows="comparisonRows" :price-large="generalPrice.large" :price-private="generalPrice.private" footer-label="Jadwal &amp; biaya" />
    </section>

    <CtaBand :title="`Temukan program yang pas untuk ${page.label}.`" text="Tanyakan jadwal dan pilihan pendampingan kepada tim Infiedu." />
  </div>
</template>
