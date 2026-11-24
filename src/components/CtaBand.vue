<script setup>
import { whatsappUrl } from '../data/site'

defineProps({
  eyebrow: { type: String, default: 'Mulai bersama Infiedu' },
  title: { type: String, required: true },
  accent: { type: String, default: '' },
  text: { type: String, default: '' },
  action: { type: String, default: 'Hubungi Infiedu' },
})
</script>

<template>
  <section class="cta-band container" v-reveal>
    <div class="cta-band__shapes" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="cta-band__copy">
      <p class="eyebrow eyebrow--light">{{ eyebrow }}</p>
      <h2>{{ title }} <em v-if="accent">{{ accent }}</em></h2>
      <p v-if="text">{{ text }}</p>
    </div>
    <div class="cta-band__actions">
      <a class="btn btn--primary btn--lg" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">{{ action }} <span class="btn__arrow" aria-hidden="true">→</span></a>
      <small>Chat langsung dengan tim Infiedu</small>
    </div>
  </section>
</template>
