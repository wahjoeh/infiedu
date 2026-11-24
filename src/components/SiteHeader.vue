<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import logo from '../assets/images/brand/infiedu-mark-sm.png'
import { levelMenu, programMenu, whatsappUrl } from '../data/site'

const route = useRoute()
const menuOpen = ref(false)
const openDropdown = ref(null)
const scrolled = ref(false)
const headerEl = ref(null)

const dropdowns = [
  { id: 'jenjang', label: 'Jenjang', items: levelMenu },
  { id: 'program', label: 'Program', items: programMenu },
]

function toggleDropdown(id) {
  openDropdown.value = openDropdown.value === id ? null : id
}
function closeMenus() {
  menuOpen.value = false
  openDropdown.value = null
}
function onScroll() {
  scrolled.value = window.scrollY > 12
}
function onDocClick(event) {
  if (headerEl.value && !headerEl.value.contains(event.target)) openDropdown.value = null
}

watch(() => route.fullPath, closeMenus)
watch(menuOpen, (open) => document.documentElement.classList.toggle('nav-locked', open))

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onDocClick)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onDocClick)
  document.documentElement.classList.remove('nav-locked')
})
</script>

<template>
  <header ref="headerEl" class="site-header" :class="{ 'is-scrolled': scrolled || menuOpen }" @keydown.esc="closeMenus">
    <div class="site-header__inner container">
      <RouterLink class="brand" to="/" aria-label="InfiEdu, ke beranda">
        <img class="brand__mark" :src="logo" alt="" width="200" height="123" />
        <span class="brand__text">InfiEdu<small>Teman tumbuh dan belajar</small></span>
      </RouterLink>

      <button class="nav-toggle" type="button" :aria-expanded="menuOpen" aria-controls="main-nav" :aria-label="menuOpen ? 'Tutup menu' : 'Buka menu'" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>

      <nav id="main-nav" class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Navigasi utama">
        <div v-for="d in dropdowns" :key="d.id" class="main-nav__dropdown" :class="{ 'is-open': openDropdown === d.id }">
          <button type="button" class="main-nav__link main-nav__trigger" :aria-expanded="openDropdown === d.id" @click.stop="toggleDropdown(d.id)">
            {{ d.label }}
            <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </button>
          <div class="main-nav__panel">
            <RouterLink v-for="item in d.items" :key="item.label" :to="item.to" class="main-nav__item" @click="closeMenus">
              <strong>{{ item.label }}</strong><small>{{ item.note }}</small>
            </RouterLink>
          </div>
        </div>
        <RouterLink class="main-nav__link" :to="{ path: '/', hash: '#cerita' }" @click="closeMenus">Cerita Siswa</RouterLink>
        <RouterLink class="main-nav__link" :to="{ path: '/', hash: '#promo' }" @click="closeMenus">Promo</RouterLink>
        <RouterLink class="main-nav__link" to="/tentang-kami" @click="closeMenus">Tentang Kami</RouterLink>
        <a class="btn btn--primary main-nav__cta" :href="whatsappUrl" target="_blank" rel="noopener noreferrer" @click="closeMenus">
          Coba Kelas Gratis <span class="btn__arrow" aria-hidden="true">→</span>
        </a>
      </nav>
    </div>
  </header>
</template>
