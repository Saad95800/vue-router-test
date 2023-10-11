import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import LoginPage from './views/LoginPage.vue';

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
    component: () => LoginPage
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
// Création d'un navigation guard
router.beforeEach((to, from, next) => {
    console.log('On change de page !')
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isUserLoggedIn()) { // Si l'user n'est pas connecté
          next({ name: 'login' });
        } else { // Si l'user est connecté
          next();
        }
      } else {
        next();
      }
});

export default router;
