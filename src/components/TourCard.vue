<template>
  <div class="tour-card">
    <div class="tour-image">
      <img :src="tour.image" :alt="tour.title" />
    </div>
    <div class="tour-info">
      <h3>{{ tour.title }}</h3>
      <p class="duration">{{ tour.duration }}</p>
      <p class="description">{{ tour.shortDescription }}</p>
      <p class="price">From ${{ tour.price }}*</p>
      <button @click="viewDetails" class="details-btn">View Details</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps(['tour'])
const router = useRouter()

const viewDetails = () => {
  router.push(`/tours/${props.tour.id}`)
}
</script>

<style scoped>
.tour-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
  background: white;
}
.tour-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.tour-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.tour-info {
  padding: 1rem;
}
.tour-info h3 {
  margin: 0 0 0.5rem 0;
  color: #006d73;
}
.duration {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}
.description {
  color: #555;
  margin: 0.5rem 0;
}
.price {
  color: #d8a113;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0.5rem 0;
}
.details-btn {
  background-color: #006d73;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}
.details-btn:hover {
  background-color: #2d6a4f;
}
</style>
