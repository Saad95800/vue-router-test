import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: {
      requiresAuth: true // Ceci est un marqueur pour les routes qui nécessitent une authentification
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/LoginPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Simuler un utilisateur connecté ou non
const isUserLoggedIn = () => {
    return localStorage.getItem('userLoggedIn') === 'true';
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isUserLoggedIn()) {
          next({ name: 'login' });
        } else {
          next();
        }
      } else {
        next();
      }
});

export default router;
