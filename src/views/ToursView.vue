<template>
  <div class="tours-page">
    <div class="tours-hero">
      <h1>Our Umrah & Hajj Packages</h1>
      <p>Find the perfect package for your spiritual journey</p>
    </div>

    <div class="container">
      <div class="tours-layout">
        <aside class="filters-sidebar">
          <h3>Filter Packages</h3>
          <div class="filter-group">
            <label>Price Range</label>
            <input type="range" min="500" max="5000" v-model="priceRange" step="100">
            <div class="price-range">${{ priceRange }} - $5000</div>
          </div>
          <div class="filter-group">
            <label>Duration</label>
            <select v-model="durationFilter">
              <option value="all">All Durations</option>
              <option value="7">7 Days</option>
              <option value="10">10 Days</option>
              <option value="14">14 Days</option>
              <option value="21">21+ Days</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Sort By</label>
            <select v-model="sortBy">
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="duration-asc">Duration: Shortest First</option>
              <option value="duration-desc">Duration: Longest First</option>
            </select>
          </div>
        </aside>

        <div class="tours-content">
          <div class="tours-count">Showing {{ filteredTours.length }} packages</div>
          <div class="tours-grid">
            <TourCard v-for="tour in paginatedTours" :key="tour.id" :tour="tour" />
          </div>
          <div class="pagination" v-if="totalPages > 1">
            <button @click="currentPage--" :disabled="currentPage === 1">Previous</button>
            <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="currentPage++" :disabled="currentPage === totalPages">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TourCard from '@/components/TourCard.vue'
import { tours } from '@/data/tours'

const priceRange = ref(5000)
const durationFilter = ref('all')
const sortBy = ref('price-asc')
const currentPage = ref(1)
const itemsPerPage = 6

const filteredTours = computed(() => {
  let filtered = [...tours]
  
  // Filter by price
  filtered = filtered.filter(tour => tour.price <= priceRange.value)
  
  // Filter by duration
  if (durationFilter.value !== 'all') {
    filtered = filtered.filter(tour => {
      const days = parseInt(tour.duration.split(' ')[0])
      if (durationFilter.value === '21') return days >= 21
      return days === parseInt(durationFilter.value)
    })
  }
  
  // Sort
  switch(sortBy.value) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'duration-asc':
      filtered.sort((a, b) => parseInt(a.duration.split(' ')[0]) - parseInt(b.duration.split(' ')[0]))
      break
    case 'duration-desc':
      filtered.sort((a, b) => parseInt(b.duration.split(' ')[0]) - parseInt(a.duration.split(' ')[0]))
      break
  }
  
  return filtered
})

const totalPages = computed(() => Math.ceil(filteredTours.value.length / itemsPerPage))

const paginatedTours = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredTours.value.slice(start, end)
})
</script>

<style scoped>
.tours-page {
  margin-top: 60px;
}
.tours-hero {
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/tours-bg.jpg');
  background-size: cover;
  background-position: center;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}
.tours-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
}
.tours-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
}
.filters-sidebar {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  height: fit-content;
  position: sticky;
  top: 80px;
}
.filters-sidebar h3 {
  margin-bottom: 1.5rem;
  color: #1a472a;
}
.filter-group {
  margin-bottom: 1.5rem;
}
.filter-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}
.filter-group input[type="range"] {
  width: 100%;
}
.filter-group select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.price-range {
  margin-top: 0.5rem;
  color: #1a472a;
  font-weight: bold;
}
.tours-content {
  flex: 1;
}
.tours-count {
  margin-bottom: 1rem;
  color: #666;
}
.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}
.pagination button {
  padding: 0.5rem 1rem;
  background-color: #1a472a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.page-info {
  color: #555;
}
@media (max-width: 768px) {
  .tours-layout {
    grid-template-columns: 1fr;
  }
  .filters-sidebar {
    position: static;
  }
}
</style>