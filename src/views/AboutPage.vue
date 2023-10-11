<template>
    <div>
      <h1>À propos</h1>
      <p>C'est la page à propos de notre application !</p>
      <button @click="goToHome">Retour à l'accueil</button>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
  
      const goToHome = () => {
        router.push({ name: 'home' });
      };
  
      return {
        goToHome
      };
    }
  };
  </script>
  