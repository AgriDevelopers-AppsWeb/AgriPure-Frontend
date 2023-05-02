import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../plants/views/HomeView.vue'
import LoginView from '../auth/components/log-in.component.vue'
import PlansView from '../auth/components/plans.conponent.vue'
import RegisterView from '../auth/components/register.component.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/plans',
      component: PlansView,
    },
    {
      path: '/register',
      component: RegisterView,
    }
  ]
})

export default router
