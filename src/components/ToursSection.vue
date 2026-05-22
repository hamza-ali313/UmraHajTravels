<template>
  <section class="tours-section">
    <div class="container">
      <div class="section-header">
        <h2>Popular Umrah Packages</h2>
        <p>Choose from our most requested packages trusted by thousands</p>
      </div>
      <div class="tours-grid">
        <TourCard v-for="tour in tours" :key="tour.id" :tour="tour" />
      </div>
      <div class="view-all">
        <router-link to="/tours" class="view-all-btn">View All Tours →</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import TourCard from './TourCard.vue'

defineProps(['tours'])
</script>

<style scoped>
.tours-section {
  padding: 4rem 2rem;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}
.section-header h2 {
  font-size: 2rem;
  color: #1a472a;
  margin-bottom: 0.5rem;
}
.section-header p {
  color: #666;
}
.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}
.view-all {
  text-align: center;
}
.view-all-btn {
  display: inline-block;
  background-color: #1a472a;
  color: white;
  padding: 0.75rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.view-all-btn:hover {
  background-color: #2d6a4f;
}
</style>