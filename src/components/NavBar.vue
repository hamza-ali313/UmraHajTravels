<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <router-link to="/">UmrahTravel</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/tours">Tours</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <button class="cta-btn">Build Package</button>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  background-color: #1a472a;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.logo a {
  color: #ffd700;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}
.nav-links a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
}
.nav-links a:hover {
  color: #ffd700;
}
.cta-btn {
  background-color: #ffd700;
  color: #1a472a;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
</style>