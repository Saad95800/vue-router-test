<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Accueil</router-link>
      <router-link to="/about">À propos</router-link>
      <router-link to="/login" v-if="!isUserLoggedIn">Connexion</router-link>
      <button v-if="isUserLoggedIn" @click="logout">Se déconnecter</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const isUserLoggedIn = ref(localStorage.getItem('userLoggedIn') === 'true');
const router = useRouter();

const logout = () => {
  localStorage.removeItem('userLoggedIn');
  isUserLoggedIn.value = false;
  router.push({ name: 'login' });
};

watch(
  () => router.currentRoute, 
  () => {
    isUserLoggedIn.value = localStorage.getItem('userLoggedIn') === 'true';
  }
);
</script>