<template>
  <div class="tour-detail-page" v-if="tour">
    <div class="tour-hero" :style="{ backgroundImage: `url(${tour.image})` }">
      <div class="hero-overlay">
        <div class="container">
          <h1>{{ tour.title }}</h1>
          <div class="tour-meta">
            <span class="duration">📅 {{ tour.duration }}</span>
            <span class="price">💰 From ${{ tour.price }}*</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="tour-content">
        <div class="main-content">
          <section class="overview">
            <h2>Package Overview</h2>
            <p>
              {{
                tour.description ||
                'Experience a spiritually enriching journey with our carefully curated package.'
              }}
            </p>
          </section>

          <section class="included-excluded">
            <div class="included">
              <h3>✅ Included in Package</h3>
              <ul>
                <li v-for="item in tour.included" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="excluded">
              <h3>❌ Not Included</h3>
              <ul>
                <li v-for="item in tour.excluded" :key="item">{{ item }}</li>
              </ul>
            </div>
          </section>

          <section class="itinerary" v-if="tour.itinerary && tour.itinerary.length">
            <h2>Day by Day Itinerary</h2>
            <div class="itinerary-list">
              <div v-for="day in tour.itinerary" :key="day.day" class="itinerary-item">
                <div class="day">Day {{ day.day }}</div>
                <div class="description">{{ day.description }}</div>
              </div>
            </div>
          </section>
        </div>

        <aside class="sidebar">
          <div class="booking-card">
            <h3>Book This Package</h3>
            <div class="price-large">${{ tour.price }}</div>
            <p class="price-note">*per person based on double occupancy</p>
            <button class="book-btn" @click="customizePackage">Customize This Package</button>
            <button class="inquiry-btn" @click="makeInquiry">Request Details</button>
          </div>

          <div class="info-card">
            <h4>Need Help?</h4>
            <p>Call our travel experts:</p>
            <p class="phone">📞 +1 (555) 123-4567</p>
            <p>or</p>
            <button class="chat-btn" @click="startChat">💬 Live Chat</button>
          </div>
        </aside>
      </div>

      <section class="related-tours" v-if="relatedTours.length">
        <h2>You May Also Like</h2>
        <div class="related-grid">
          <TourCard v-for="related in relatedTours" :key="related.id" :tour="related" />
        </div>
      </section>
    </div>
  </div>
  <div v-else class="loading">
    <p>Loading tour details...</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TourCard from '@/components/TourCard.vue'
import { tours } from '@/data/tours'

const route = useRoute()
const router = useRouter()
const tour = ref(null)

const relatedTours = computed(() => {
  if (!tour.value) return []
  return tours.filter((t) => t.id !== tour.value.id).slice(0, 3)
})

const customizePackage = () => {
  // This will redirect to the Umrah Package Builder feature
  router.push(`/customize/${tour.value.id}`)
}

const makeInquiry = () => {
  router.push('/contact')
}

const startChat = () => {
  // Implement chat functionality
  alert('Live chat feature coming soon!')
}

onMounted(() => {
  const tourId = parseInt(route.params.id)
  tour.value = tours.find((t) => t.id === tourId)
})
</script>

<style scoped>
.tour-detail-page {
  margin-top: 60px;
}
.tour-hero {
  height: 60vh;
  background-size: cover;
  background-position: center;
  position: relative;
}
.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: 3rem 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.tour-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.tour-meta {
  display: flex;
  gap: 2rem;
  font-size: 1.1rem;
}
.tour-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin: 3rem 0;
}
.main-content section {
  margin-bottom: 3rem;
}
.main-content h2 {
  color: #006d73;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}
.included-excluded {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
}
.included h3,
.excluded h3 {
  margin-bottom: 1rem;
}
.included ul,
.excluded ul {
  list-style: none;
  padding: 0;
}
.included li,
.excluded li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}
.itinerary-list {
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
}
.itinerary-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  border-bottom: 1px solid #eee;
  padding: 1rem;
}
.itinerary-item:last-child {
  border-bottom: none;
}
.day {
  font-weight: bold;
  color: #006d73;
}
.sidebar {
  position: sticky;
  top: 80px;
  height: fit-content;
}
.booking-card {
  background: linear-gradient(135deg, #006d73 0%, #2d6a4f 100%);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  text-align: center;
}
.booking-card h3 {
  margin-bottom: 1rem;
}
.price-large {
  font-size: 3rem;
  font-weight: bold;
  margin: 1rem 0;
}
.price-note {
  font-size: 0.9rem;
  opacity: 0.9;
}
.book-btn,
.inquiry-btn,
.chat-btn {
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
.book-btn {
  background-color: #d8a113;
  color: #006d73;
}
.inquiry-btn {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}
.chat-btn {
  background-color: #d8a113;
  color: #006d73;
}
.info-card {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}
.info-card .phone {
  font-size: 1.2rem;
  font-weight: bold;
  color: #006d73;
  margin: 0.5rem 0;
}
.related-tours {
  margin: 4rem 0;
}
.related-tours h2 {
  text-align: center;
  font-size: 2rem;
  color: #006d73;
  margin-bottom: 2rem;
}
.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.2rem;
  color: #666;
}
@media (max-width: 768px) {
  .tour-content {
    grid-template-columns: 1fr;
  }
  .included-excluded {
    grid-template-columns: 1fr;
  }
  .tour-hero h1 {
    font-size: 1.8rem;
  }
}
</style>
