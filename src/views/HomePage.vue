<template>
    <div>
      <h1>Accueil</h1>
      <p>Bienvenue sur la page d'accueil !</p>
      <button @click="goToAbout">Aller à la page "À propos"</button>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
  
      const goToAbout = () => {
        router.push({ name: 'about' });
      };
  
      return {
        goToAbout
      };
    }
  };
  </script>
  