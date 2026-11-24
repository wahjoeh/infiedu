import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LevelView from '../views/LevelView.vue'
import ProgramView from '../views/ProgramView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 84 }
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/sd', name: 'sd', component: LevelView, meta: { level: 'sd' } },
    { path: '/smp', name: 'smp', component: LevelView, meta: { level: 'smp' } },
    { path: '/sma', name: 'sma', component: LevelView, meta: { level: 'sma' } },
    { path: '/program/bimbingan-belajar', name: 'program-bimbingan-belajar', component: ProgramView, meta: { program: 'bimbinganBelajar' } },
    { path: '/program/english-for-kids', name: 'program-english-for-kids', component: ProgramView, meta: { program: 'englishForKids' } },
    { path: '/program/persiapan-tka', name: 'program-persiapan-tka', component: ProgramView, meta: { program: 'persiapanTka' } },
    { path: '/program/persiapan-snbt', name: 'program-persiapan-snbt', component: ProgramView, meta: { program: 'persiapanSnbt' } },
    { path: '/tentang-kami', name: 'about', component: AboutView },
    { path: '/:pathMatch(.*)*', redirect: { name: 'home' } },
  ],
})

export default router
