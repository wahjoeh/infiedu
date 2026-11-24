<script setup>
import { whatsappUrl } from '../data/site'

defineProps({
  caption: { type: String, default: 'Rincian Program' },
  rows: { type: Array, required: true },
  priceLarge: { type: String, required: true },
  pricePrivate: { type: String, required: true },
  footerLabel: { type: String, default: 'Biaya program' },
})
</script>

<template>
  <div class="compare">
    <div class="compare__scroll">
      <table class="compare__table">
        <thead>
          <tr>
            <th scope="col" class="compare__caption">{{ caption }}</th>
            <th scope="col"><span class="pill pill--group">Kelas Besar</span><small>Belajar bersama kelompok</small></th>
            <th scope="col"><span class="pill pill--private">Private</span><small>Fokus personal 1 siswa</small></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.title">
            <th scope="row">{{ row.title }}</th>
            <td><span class="compare__mobile-label pill pill--group" aria-hidden="true">Kelas Besar</span><span class="check" aria-hidden="true">✓</span>{{ row.large }}</td>
            <td><span class="compare__mobile-label pill pill--private" aria-hidden="true">Private</span><span class="check" aria-hidden="true">✓</span>{{ row.private }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">{{ footerLabel }}</th>
            <td>
              <div class="price" data-plan="Kelas Besar"><small>Mulai dari</small><strong>{{ priceLarge }}</strong></div>
              <a class="btn btn--ghost btn--sm" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Tanya Kelas Besar <span class="btn__arrow" aria-hidden="true">→</span></a>
            </td>
            <td>
              <div class="price" data-plan="Private"><small>Mulai dari</small><strong>{{ pricePrivate }}</strong></div>
              <a class="btn btn--primary btn--sm" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Tanya Private <span class="btn__arrow" aria-hidden="true">→</span></a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
