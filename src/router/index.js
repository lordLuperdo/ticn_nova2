import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NosotrosView from '../views/NosotrosView.vue'
import ciber from '../views/services/cibercView.vue'
import data from '../views/services/dataccView.vue'
import rwc from '../views/services/rceView.vue'
import segu from '../views/services/seguView.vue'
import blog from '../views/blogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Nosotros',
      name: 'nosotros',
      component : NosotrosView
      
    },
    {
      path: '/Ciberseguridad',
      name: 'ciber',
      component : ciber
      
    },
    {
      path: '/DataCenter&Cloud',
      name: 'data',
      component : data
      
    },
    {
      path: '/RedesWifi&CableadoEstructurado',
      name: 'rwc',
      component : rwc
      
    },
    {
      path: '/SeguridadElectronica',
      name: 'segu',
      component : segu
      
    },
    {
      path: '/blog',
      name: 'blog',
      component : blog
      
    },

  ]
})

export default router
