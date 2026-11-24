<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import CtaBand from '../components/CtaBand.vue'
import { levelMenu, whatsappUrl } from '../data/site'

/* ---------- Jenjang ---------- */
const levels = [
  { label: 'SD', grade: 'Kelas 1–6', text: 'Bangun fondasi belajar yang kuat dan menyenangkan.', to: '/sd', tone: 'coral', icon: '🎒' },
  { label: 'SMP', grade: 'Kelas 7–9', text: 'Pahami konsep dan bersiap menghadapi TKA SMP.', to: '/smp', tone: 'cyan', icon: '🧠' },
  { label: 'SMA', grade: 'Kelas 10–12', text: 'Mantapkan pelajaran, siapkan TKA dan SNBT.', to: '/sma', tone: 'teal', icon: '📚' },
  { label: 'UTBK/SNBT', grade: 'SMA · Gap Year', text: 'Susun strategi belajar menuju PTN impian.', to: '/program/persiapan-snbt', tone: 'navy', icon: '🎓' },
]

/* ---------- Program ---------- */
const programs = [
  { title: 'Bimbingan Belajar', tag: 'SD kelas 1–4', text: 'Pendampingan materi dan tugas agar pelajaran sekolah terasa lebih mudah dipahami.', to: '/program/bimbingan-belajar', image: '/images/programs/01.svg', tone: 'sun' },
  { title: 'Persiapan TKA', tag: 'SD · SMP · SMA', badge: 'BARU', text: 'Latihan soal terarah dan pembahasan materi untuk menghadapi TKA dengan percaya diri.', to: '/program/persiapan-tka', image: '/images/programs/02.svg', tone: 'cyan' },
  { title: 'English For Kids', tag: 'Program anak', text: 'Kenal kosakata, ungkapan sehari-hari, dan berani berbicara lewat aktivitas yang seru.', to: '/program/english-for-kids', image: '/images/programs/03.svg', tone: 'teal' },
  { title: 'Persiapan SNBT', tag: 'SMA · Gap Year', text: 'Latihan soal, strategi pengerjaan, dan simulasi di website tryout Infiedu.', to: '/program/persiapan-snbt', tone: 'navy' },
]

/* ---------- Cara belajar ---------- */
const steps = [
  { title: 'Diagnostic test', text: 'Setiap awal sesi, kami memetakan topik yang belum dikuasai.' },
  { title: 'Latihan terarah', text: 'Materi dan latihan disesuaikan dengan kebutuhan tiap anak.' },
  { title: 'Klinik PR', text: 'Bawa PR dan tugas sekolah, tutor membantu sampai paham.' },
  { title: 'Post test', text: 'Kemajuan diukur, orang tua ikut memantau perkembangan.' },
]

/* ---------- Fasilitas ---------- */
// Isi image dengan path file di public/, contoh: '/images/photos/kelas-utama.webp'.
const facilities = [
  { title: 'Ruang belajar nyaman', text: 'Kelas tatap muka dengan audio visual lengkap, TV, dan AC.', image: '/images/photos/kelas-utama.webp', art: '🏫' },
  { title: 'Konsultasi PR langsung', text: 'Bawa PR dan tugas sekolah, tutor siap membantu sampai paham.', image: '/images/photos/kelas-anak.webp', art: '📚' },
  { title: 'Konselor belajar', text: 'Diskusikan kendala belajar bersama konselor yang suportif.', image: '', art: '🧑‍🏫' },
  { title: 'Website tryout', text: 'Latihan soal dan simulasi ujian melalui website tryout Infiedu.', image: '/images/photos/website-tryout.webp', art: '📝' },
]

/* ---------- Promo ---------- */
const promos = [
  { label: 'Diskon pendaftaran', value: 'Hingga Rp50 rb', note: 'Isi nomor WhatsApp untuk klaim.', icon: '🏷️' },
  { label: 'Kelas percobaan', value: 'GRATIS', note: 'Coba kelas tatap muka sebelum mendaftar.', icon: '🎁', featured: true },
  { label: 'Paket keluarga', value: 'Spesial', note: 'Untuk kakak-adik yang belajar bersama.', icon: '👨‍👩‍👧' },
]

/* ---------- Testimoni ---------- */
const testimonies = [
  { name: 'Nama Siswa', level: '12 SMA', place: 'Surabaya', text: 'Dulu susah paham pelajaran, sekarang jadi lebih percaya diri karena dibimbing tutor yang sabar dan suportif.', highlight: 'Lolos jalur SNBP' },
  { name: 'Nama Siswa', level: 'UTBK', place: 'Sidoarjo', text: 'Belajarnya enjoy, tutor ramah, dan ada pendampingan memilih prodi serta analisis nilai tryout.', highlight: 'Diterima di PTN impian' },
  { name: 'Nama Siswa', level: '9 SMP', place: 'Malang', text: 'Klinik PR-nya sangat membantu. Kalau belum paham, tutor datang satu per satu sampai mengerti.', highlight: 'Nilai rapor naik' },
]
const activeTestimony = ref(0)
const goTestimony = (i) => { activeTestimony.value = (i + testimonies.length) % testimonies.length }
let timer
const startAuto = () => { stopAuto(); timer = setInterval(() => goTestimony(activeTestimony.value + 1), 7000) }
const stopAuto = () => clearInterval(timer)
onMounted(() => { if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) startAuto() })
onBeforeUnmount(stopAuto)

/* ---------- Tutor ---------- */
// Isi image dengan path foto di public/, contoh: '/images/tutors/nama-tutor.jpg'.
const teachers = [
  { name: 'Nama Tutor', subject: 'Bahasa Inggris', education: 'S1 Pendidikan Bahasa Inggris', image: '', tone: 'coral', points: ['Pengalaman mengajar di sekolah dan bimbel', 'Pengalaman menyusun materi persiapan tes'] },
  { name: 'Nama Tutor', subject: 'Matematika', education: 'S1 Pendidikan Matematika', image: '', tone: 'cyan', points: ['Pengalaman membimbing persiapan ujian', 'Juara lomba tingkat daerah'] },
  { name: 'Nama Tutor', subject: 'IPA', education: 'S1 Pendidikan IPA', image: '', tone: 'teal', points: ['Terbiasa dengan kurikulum nasional', 'Metode belajar berbasis praktik'] },
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

const marquee = ['Personal', 'Menyenangkan', 'Terarah', 'Berdampak', 'Kelas tatap muka', 'Klinik PR', 'Konselor belajar', 'Website tryout']
</script>

<template>
  <div class="home">
    <!-- ================= HERO ================= -->
    <section class="hero">
      <div class="hero__bg" aria-hidden="true"><i class="blob blob--teal"></i><i class="blob blob--coral"></i><i class="hero__grid-dots"></i></div>
      <div class="container hero__grid">
        <div class="hero__copy">
          <a class="hero__badge" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">
            <span>Promo</span> Kelas percobaan tatap muka GRATIS <b aria-hidden="true">→</b>
          </a>
          <h1>Setiap anak punya cara <span class="hl hl--underline">hebatnya</span> sendiri.</h1>
          <p class="hero__lead">Dibimbing langsung oleh tutor terbaik, Infiedu menemani langkah kecil hari ini agar anak tumbuh jadi versi terbaik dirinya.</p>
          <div class="hero__actions">
            <a class="btn btn--primary btn--lg" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Coba Kelas Gratis <span class="btn__arrow" aria-hidden="true">→</span></a>
            <a class="btn btn--ghost btn--lg" href="#program">Lihat Program</a>
          </div>
          <div class="hero__levels">
            <span>Pilih jenjang:</span>
            <RouterLink v-for="l in levelMenu" :key="l.label" :to="l.to" class="hero__level">{{ l.label }}</RouterLink>
          </div>
        </div>

        <div class="hero__visual">
          <div class="hero__ring" aria-hidden="true"></div>
          <figure class="hero__photo hero__photo--main">
            <img src="/images/photos/kelas-utama.webp" alt="Ruang kelas Infiedu yang terang dengan papan tulis dan kursi belajar" width="1400" height="786" fetchpriority="high" />
          </figure>
          <figure class="hero__photo hero__photo--small">
            <img src="/images/photos/kelas-anak.webp" alt="Area belajar anak di Infiedu dengan meja kecil dan alas lantai" width="1400" height="788" loading="lazy" />
          </figure>
          <div class="float-card float-card--tutor">
            <b aria-hidden="true">✓</b>
            <span><strong>Tutor pendamping</strong><small>Sabar &amp; suportif</small></span>
          </div>
          <div class="float-card float-card--levels">
            <span class="float-card__dots" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
            <span><strong>SD · SMP · SMA</strong><small>hingga Gap Year</small></span>
          </div>
          <span class="hero__spark" aria-hidden="true">✦</span>
        </div>
      </div>
    </section>

    <!-- ================= MARQUEE ================= -->
    <div class="marquee" aria-label="Ruang belajar yang personal, menyenangkan, terarah, dan berdampak">
      <div class="marquee__track" aria-hidden="true">
        <template v-for="n in 2" :key="n">
          <span v-for="item in marquee" :key="`${n}-${item}`">{{ item }} <i>✦</i></span>
        </template>
      </div>
    </div>

    <!-- ================= JENJANG ================= -->
    <section class="section levels container" aria-labelledby="jenjang-title">
      <div class="section-head" v-reveal>
        <div class="section-head__copy">
          <p class="eyebrow">Program belajar Infiedu</p>
          <h2 id="jenjang-title">Belajar terarah untuk <span class="hl">setiap jenjang.</span></h2>
        </div>
        <p class="lead section-head__aside">Kelas tatap muka untuk siswa SD, SMP, SMA, hingga Gap Year — pilih jenjang untuk melihat programnya.</p>
      </div>
      <div class="level-cards">
        <RouterLink v-for="(l, i) in levels" :key="l.label" :to="l.to" class="level-card" :class="`level-card--${l.tone}`" v-reveal="i * 90">
          <span class="level-card__icon" aria-hidden="true">{{ l.icon }}</span>
          <span class="level-card__grade">{{ l.grade }}</span>
          <strong class="level-card__label">{{ l.label }}</strong>
          <p>{{ l.text }}</p>
          <span class="level-card__go" aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </section>

    <!-- ================= PROGRAM ================= -->
    <section id="program" class="section programs" aria-labelledby="program-title">
      <div class="container">
        <div class="section-head" v-reveal>
          <div class="section-head__copy">
            <p class="eyebrow">Pilih jalan belajarmu</p>
            <h2 id="program-title">Tempat belajar yang <span class="hl">pas untukmu.</span></h2>
          </div>
          <a class="link-arrow" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Bingung pilih? Konsultasi dulu <span aria-hidden="true">→</span></a>
        </div>
        <div class="bento">
          <RouterLink v-for="(p, i) in programs" :key="p.title" :to="p.to" class="program-card" :class="`program-card--${p.tone}`" v-reveal="i * 90">
            <div class="program-card__top">
              <span class="program-card__tag">{{ p.tag }}</span>
              <span v-if="p.badge" class="badge-new">{{ p.badge }}</span>
            </div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.text }}</p>
            <span class="program-card__cta">Lihat program <b aria-hidden="true">→</b></span>
            <img v-if="p.image" class="program-card__art" :src="p.image" alt="" aria-hidden="true" loading="lazy" />
            <span v-else class="program-card__target" aria-hidden="true"><i></i><i></i><i></i><b>PTN</b></span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ================= CARA BELAJAR ================= -->
    <section id="tentang" class="section method" aria-labelledby="method-title">
      <div class="method__glow" aria-hidden="true"></div>
      <div class="container">
        <div class="method__head" v-reveal>
          <p class="eyebrow eyebrow--light">Cara Infiedu mendampingi</p>
          <h2 id="method-title">Learn it, love it, <em>live it.</em></h2>
          <p>Infiedu siap bantu taklukkan semua ujian dan menemani perjuanganmu — lewat empat langkah belajar yang jelas di setiap sesi.</p>
        </div>
        <ol class="steps">
          <li v-for="(s, i) in steps" :key="s.title" class="step" v-reveal="i * 110">
            <span class="step__num">0{{ i + 1 }}</span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- ================= FASILITAS ================= -->
    <section id="fasilitas" class="section container facilities" aria-labelledby="fasilitas-title">
      <div class="section-head" v-reveal>
        <div class="section-head__copy">
          <p class="eyebrow">Hanya ada di Infiedu</p>
          <h2 id="fasilitas-title">Fasilitas belajar yang <span class="hl">anti bosan.</span></h2>
        </div>
        <p class="lead section-head__aside">Ruang belajar yang nyaman, didukung tutor dan konselor yang suportif.</p>
      </div>
      <div class="facility-grid">
        <article v-for="(f, i) in facilities" :key="f.title" class="facility" :class="{ 'facility--art': !f.image }" v-reveal="i * 90">
          <img v-if="f.image" :src="f.image" :alt="f.title" loading="lazy" />
          <span v-else class="facility__art" aria-hidden="true">{{ f.art }}</span>
          <div class="facility__body">
            <h3>{{ f.title }}</h3>
            <p>{{ f.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- ================= PROMO ================= -->
    <section id="promo" class="section--tight promo" aria-labelledby="promo-title">
      <div class="container promo__inner">
        <div class="promo__head" v-reveal>
          <p class="eyebrow">Promo spesial</p>
          <h2 id="promo-title">Khusus <span class="hl">untukmu!</span></h2>
          <p>Klaim promonya lewat WhatsApp — tim kami bantu pilihkan program yang pas.</p>
        </div>
        <div class="tickets">
          <article v-for="(p, i) in promos" :key="p.label" class="ticket" :class="{ 'ticket--featured': p.featured }" v-reveal="i * 90">
            <div class="ticket__top">
              <span class="ticket__icon" aria-hidden="true">{{ p.icon }}</span>
              <small>{{ p.label }}</small>
              <strong>{{ p.value }}</strong>
            </div>
            <div class="ticket__bottom">
              <p>{{ p.note }}</p>
              <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Ambil promo <b aria-hidden="true">→</b></a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ================= TESTIMONI ================= -->
    <section id="cerita" class="section container stories" aria-labelledby="cerita-title" @mouseenter="stopAuto" @mouseleave="startAuto">
      <div class="section-head" v-reveal>
        <div class="section-head__copy">
          <p class="eyebrow">Cerita siswa</p>
          <h2 id="cerita-title">Mengapa mereka memilih <span class="hl">Infiedu?</span></h2>
        </div>
        <div class="stories__controls">
          <button type="button" aria-label="Cerita sebelumnya" @click="goTestimony(activeTestimony - 1)">←</button>
          <button type="button" aria-label="Cerita berikutnya" @click="goTestimony(activeTestimony + 1)">→</button>
        </div>
      </div>
      <div class="stories__layout" v-reveal>
        <div class="stories__card" aria-live="polite">
          <span class="stories__quote" aria-hidden="true">“</span>
          <Transition name="story" mode="out-in">
            <figure :key="activeTestimony">
              <blockquote>{{ testimonies[activeTestimony].text }}</blockquote>
              <figcaption>
                <span class="avatar" aria-hidden="true">{{ testimonies[activeTestimony].name.charAt(0) }}</span>
                <span><strong>{{ testimonies[activeTestimony].name }}</strong><small>{{ testimonies[activeTestimony].level }} · {{ testimonies[activeTestimony].place }}</small></span>
                <em class="stories__win">🏆 {{ testimonies[activeTestimony].highlight }}</em>
              </figcaption>
            </figure>
          </Transition>
        </div>
        <div class="stories__list" role="tablist" aria-label="Pilih cerita siswa">
          <button v-for="(t, i) in testimonies" :key="i" type="button" role="tab" :aria-selected="i === activeTestimony" class="stories__tab" :class="{ 'is-active': i === activeTestimony }" @click="goTestimony(i)">
            <span class="avatar avatar--sm" aria-hidden="true">{{ t.name.charAt(0) }}</span>
            <span><strong>{{ t.highlight }}</strong><small>{{ t.level }} · {{ t.place }}</small></span>
          </button>
          <a class="btn btn--dark" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Raih targetmu juga <span class="btn__arrow" aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>

    <!-- ================= TUTOR ================= -->
    <section id="tutor" class="section tutors" aria-labelledby="tutor-title">
      <div class="container">
        <div class="section-head section-head--center" v-reveal>
          <div class="section-head__copy">
            <p class="eyebrow">Tutor pilihan Infiedu</p>
            <h2 id="tutor-title">Dibimbing langsung oleh Master Teacher <span class="hl">lulusan universitas favorit.</span></h2>
          </div>
        </div>
        <div class="tutor-grid">
          <article v-for="(t, i) in teachers" :key="i" class="tutor" :class="`tutor--${t.tone}`" v-reveal="i * 100">
            <div class="tutor__photo">
              <img v-if="t.image" :src="t.image" :alt="`Foto ${t.name}`" loading="lazy" />
              <svg v-else viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="78" r="36" fill="rgba(255,255,255,.9)" /><path d="M30 200c4-46 34-72 70-72s66 26 70 72Z" fill="rgba(255,255,255,.9)" /></svg>
              <span class="tutor__subject">{{ t.subject }}</span>
            </div>
            <div class="tutor__body">
              <h3>{{ t.name }}</h3>
              <p class="tutor__role">Master Teacher {{ t.subject }}</p>
              <p class="tutor__edu">🎓 {{ t.education }}</p>
              <ul>
                <li v-for="p in t.points" :key="p">{{ p }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ================= FAQ ================= -->
    <section id="faq" class="section container faq" aria-labelledby="faq-title">
      <div class="faq__side" v-reveal>
        <p class="eyebrow">FAQ</p>
        <h2 id="faq-title">Paling sering <span class="hl">ditanyakan.</span></h2>
        <div class="faq__help">
          <strong>Masih ada pertanyaan?</strong>
          <p>Tim Infiedu siap membantu memilih program yang paling pas.</p>
          <a class="link-arrow" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Chat kami di WhatsApp <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="faq__list" v-reveal="120">
        <div v-for="(item, i) in faqs" :key="item.q" class="faq-item" :class="{ 'is-open': openFaq === i }">
          <h3>
            <button type="button" :id="`faq-q-${i}`" :aria-expanded="openFaq === i" :aria-controls="`faq-a-${i}`" @click="toggleFaq(i)">
              <span>{{ item.q }}</span><b aria-hidden="true"></b>
            </button>
          </h3>
          <div :id="`faq-a-${i}`" class="faq-item__panel" role="region" :aria-labelledby="`faq-q-${i}`">
            <div><p>{{ item.a }}</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= KONTAK ================= -->
    <div id="kontak">
      <CtaBand eyebrow="Mulai dari satu obrolan" title="Yuk, cari tahu" accent="potensi hebatnya." text="Ceritakan kebutuhan belajar anak, kami bantu pilihkan program dan jadwal kelas percobaan." action="Ngobrol dengan kami" />
    </div>
  </div>
</template>
