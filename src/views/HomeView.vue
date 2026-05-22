<template>
  <div>
    <HeroBanner />
    <AboutTeaser />
    <ToursSection :tours="featuredTours" />
    <FAQSection />
  </div>
</template>

<script setup>
import HeroBanner from '@/components/HeroBanner.vue'
import AboutTeaser from '@/components/AboutTeaser.vue'
import ToursSection from '@/components/ToursSection.vue'
import FAQSection from '@/components/FAQSection.vue'
import { tours } from '@/data/tours'

const featuredTours = tours.slice(0, 4)
</script>