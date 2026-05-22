import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ToursView from '../views/ToursView.vue'
import TourDetailView from '../views/TourDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/tours',
      name: 'tours',
      component: ToursView
    },
    {
      path: '/tours/:id',
      name: 'tour-detail',
      component: TourDetailView,
      props: true
    }
  ]
})

export default router