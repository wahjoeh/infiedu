<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a class="skip-link" href="#konten">Lewati ke konten</a>
  <SiteHeader />
  <main id="konten">
    <RouterView />
  </main>
  <SiteFooter />
</template>
