<script setup>
// Video promosi vertikal (9:16) untuk sisi kanan hero.
// Berputar otomatis tanpa suara; tombol "Tonton dengan suara" memutar ulang dari awal dengan suara.
// Jika file gagal dimuat, komponen mengirim event "failed" agar halaman menampilkan ilustrasi.
import { ref } from 'vue'

defineProps({
  src: { type: String, required: true },
  poster: { type: String, default: '' },
  label: { type: String, required: true },
})
const emit = defineEmits(['failed'])

const videoEl = ref(null)
const withSound = ref(false)
const reduceMotion = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function playWithSound() {
  withSound.value = true
  const v = videoEl.value
  if (!v) return
  v.muted = false
  v.currentTime = 0
  v.play().catch(() => {})
}
</script>

<template>
  <div class="hero-video">
    <div class="hero-video__frame">
      <video
        ref="videoEl"
        :src="src"
        :poster="poster || undefined"
        :controls="withSound"
        :autoplay="!reduceMotion"
        :muted="!withSound"
        loop
        playsinline
        preload="metadata"
        :aria-label="`Video promosi ${label} Infiedu`"
        @error="emit('failed')"
      ></video>
      <button v-if="!withSound" type="button" class="hero-video__sound" @click="playWithSound">
        <span aria-hidden="true">▶</span> Tonton dengan suara
      </button>
    </div>
    <div class="hero-video__badge" aria-hidden="true"><b>▶</b><span><small>Video promosi</small>{{ label }} Infiedu</span></div>
    <span class="hero-art__spark hero-art__spark--a" aria-hidden="true">✳</span><span class="hero-art__spark hero-art__spark--b" aria-hidden="true">✦</span>
  </div>
</template>
