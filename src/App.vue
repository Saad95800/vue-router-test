<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Accueil</router-link>
      <router-link to="/about">À propos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}
</style>
