<script setup>
import CtaBand from '../components/CtaBand.vue'
import { address, mapsUrl, whatsappUrl } from '../data/site'

const principles = [
  { icon: '♡', title: 'Memahami setiap siswa', text: 'Setiap anak memiliki kebutuhan dan cara belajar yang berbeda. Pendampingan dimulai dengan memahami prosesnya.' },
  { icon: '✦', title: 'Belajar dengan nyaman', text: 'Suasana belajar yang suportif membantu siswa bertanya, mencoba, dan berkembang dengan percaya diri.' },
  { icon: '↗', title: 'Tumbuh dengan terarah', text: 'Langkah belajar dibuat lebih jelas agar siswa dapat bergerak menuju tujuan akademiknya.' },
]
const values = ['Personal', 'Menyenangkan', 'Terarah', 'Berdampak']
</script>

<template>
  <div class="about">
    <section class="page-hero about-hero">
      <div class="container page-hero__grid">
        <div class="page-hero__copy">
          <nav class="crumbs" aria-label="Breadcrumb"><RouterLink to="/">Beranda</RouterLink><span aria-hidden="true">/</span><span>Tentang Kami</span></nav>
          <p class="eyebrow">Tentang Infiedu</p>
          <h1>Teman tumbuh dan <span class="hl hl--underline">belajar.</span></h1>
          <p class="page-hero__lead">Setiap anak punya cara hebatnya sendiri. Infiedu hadir untuk menemani perjalanan belajar dengan pendampingan yang suportif dan terarah.</p>
          <div class="page-hero__actions">
            <RouterLink class="btn btn--primary btn--lg" :to="{ path: '/', hash: '#program' }">Kenali program kami <span class="btn__arrow" aria-hidden="true">→</span></RouterLink>
            <a class="link-arrow" href="#nilai">Nilai yang kami pegang <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div class="about-collage">
          <figure class="about-collage__a"><img src="/images/photos/kelas-welcome.webp" alt="Ruang kelas Infiedu dengan banner Welcome to Class" width="1400" height="786" /></figure>
          <figure class="about-collage__b"><img src="/images/photos/kelas-anak.webp" alt="Area belajar anak dengan meja kecil" width="1400" height="788" loading="lazy" /></figure>
          <div class="about-collage__note"><span aria-hidden="true">♡</span><strong>Tumbuh</strong><small>bersama Infiedu</small></div>
        </div>
      </div>
    </section>

    <div class="value-strip" aria-label="Ruang belajar yang personal, menyenangkan, terarah, dan berdampak">
      <div class="container value-strip__inner">
        <span class="value-strip__label">Ruang belajar yang</span>
        <span v-for="(v, i) in values" :key="v" class="value-strip__item" v-reveal="i * 80">{{ v }}</span>
      </div>
    </div>

    <section id="nilai" class="section container" aria-labelledby="nilai-title">
      <div class="section-head section-head--center" v-reveal>
        <div class="section-head__copy">
          <p class="eyebrow">Nilai yang kami pegang</p>
          <h2 id="nilai-title">Belajar bukan hanya soal nilai, <span class="hl">tetapi juga proses bertumbuh.</span></h2>
        </div>
      </div>
      <div class="feature-grid">
        <article v-for="(p, i) in principles" :key="p.title" class="feature-card" v-reveal="i * 100">
          <span class="feature-card__num" aria-hidden="true">0{{ i + 1 }}</span>
          <span class="feature-card__icon" aria-hidden="true">{{ p.icon }}</span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
        </article>
      </div>
    </section>

    <section class="section--tight container approach" aria-labelledby="approach-title">
      <div class="approach__mark" v-reveal>
        <span>Infiedu</span>
        <b>Learn it.<br />Love it.<br /><em>Live it.</em></b>
      </div>
      <div class="approach__copy" v-reveal="120">
        <p class="eyebrow">Cara kami mendampingi</p>
        <h2 id="approach-title">Ruang belajar yang personal, menyenangkan, dan terarah.</h2>
        <p>Kami mendampingi siswa memahami materi, berlatih, dan membangun kepercayaan diri. Tutor hadir untuk membantu proses belajar terasa lebih jelas dan bermakna.</p>
        <RouterLink class="link-arrow" :to="{ path: '/', hash: '#fasilitas' }">Lihat fasilitas Infiedu <span aria-hidden="true">→</span></RouterLink>
      </div>
    </section>

    <section class="section container" aria-labelledby="lokasi-title">
      <div class="location" v-reveal>
        <div class="location__map">
          <iframe title="Peta lokasi bimbel Infiedu" src="https://maps.google.com/maps?output=embed&amp;hl=id&amp;q=INFIEDU%2C+-7.2647735%2C+112.6706015&amp;z=17" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
        <div class="location__copy">
          <p class="eyebrow">Lokasi Infiedu</p>
          <h2 id="lokasi-title">Kunjungi tempat belajar kami.</h2>
          <div class="location__card">
            <strong>INFIEDU</strong>
            <p>{{ address }}</p>
            <span class="location__rating"><b aria-hidden="true">★</b> 7 ulasan di Google Maps</span>
          </div>
          <div class="location__actions">
            <a class="btn btn--dark" :href="mapsUrl" target="_blank" rel="noopener noreferrer">Buka Google Maps <span class="btn__arrow" aria-hidden="true">↗</span></a>
            <a class="link-arrow" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Tanya arah via WhatsApp <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </section>

    <CtaBand title="Mari temukan langkah belajar" accent="yang pas." text="Konsultasikan kebutuhan belajar anak dan coba kelas tatap muka gratis." />
  </div>
</template>
