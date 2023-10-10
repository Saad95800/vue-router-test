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

<script>
export default {
  name: 'App',
  data() {
    return {
      isUserLoggedIn: localStorage.getItem('userLoggedIn') === 'true'
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('userLoggedIn');
      this.isUserLoggedIn = false;
      this.$router.push({ name: 'login' });
    }
  },
  watch: {
    $route(to, from) {
      this.isUserLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    }
  }
};
</script>
