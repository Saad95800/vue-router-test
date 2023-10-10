<template>
    <div>
      <h1>Connexion</h1>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Identifiant" />
        <input type="password" v-model="password" placeholder="Mot de passe" />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        if (this.username === 'user' && this.password === '1234') {
          localStorage.setItem('userLoggedIn', 'true');
          this.$router.push({ name: 'home' });
        } else {
          alert('Identifiant ou mot de passe incorrect!');
        }
      }
    }
  };
  </script>
  