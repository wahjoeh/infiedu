<script setup>
import logo from '../assets/images/brand/infiedu-mark-sm.png'
import { address, email, footerColumns, whatsappUrl } from '../data/site'

const year = new Date().getFullYear()
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="site-footer__top">
        <div class="site-footer__brand">
          <RouterLink class="brand brand--light" to="/" aria-label="InfiEdu, ke beranda">
            <img class="brand__mark" :src="logo" alt="" width="200" height="123" />
            <span class="brand__text">InfiEdu<small>Teman tumbuh dan belajar</small></span>
          </RouterLink>
          <p>Bimbingan belajar tatap muka untuk SD, SMP, SMA, hingga Gap Year di Surabaya.</p>
          <ul class="site-footer__contact">
            <li><span aria-hidden="true">📍</span>{{ address }}</li>
            <li><span aria-hidden="true">✉️</span><a :href="`mailto:${email}`">{{ email }}</a></li>
            <li><span aria-hidden="true">💬</span><a :href="whatsappUrl" target="_blank" rel="noopener noreferrer">WhatsApp 0851-1163-0006</a></li>
          </ul>
        </div>
        <nav v-for="col in footerColumns" :key="col.title" class="site-footer__col" :aria-label="col.title">
          <h4>{{ col.title }}</h4>
          <template v-for="link in col.links" :key="link.label">
            <a v-if="link.external" :href="link.to" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
            <RouterLink v-else :to="link.to">{{ link.label }}</RouterLink>
          </template>
        </nav>
      </div>
      <div class="site-footer__bottom">
        <span>© {{ year }} Infiedu. Learn it, love it, live it.</span>
        <button type="button" @click="scrollTop">Kembali ke atas ↑</button>
      </div>
    </div>
  </footer>

  <a class="wa-fab" :href="whatsappUrl" target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp Infiedu">
    <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7 6.4 6.4 0 0 0 1.3 3.4 14.7 14.7 0 0 0 5.6 5c2.1.9 2.9 1 4 .8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5l-.6-.4Z"/></svg>
    <span>Tanya via WhatsApp</span>
  </a>
</template>
