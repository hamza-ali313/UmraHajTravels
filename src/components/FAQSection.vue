<template>
  <section class="faq-section">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about our Umrah packages</p>
      </div>
      <div class="faq-list">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
          <div class="faq-question" @click="toggleFAQ(index)">
            <h3>{{ faq.question }}</h3>
            <span class="icon">{{ openIndex === index ? '−' : '+' }}</span>
          </div>
          <div class="faq-answer" v-show="openIndex === index">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'What is included in the Umrah package?',
    answer:
      'Our Umrah packages include visa processing, accommodation (hotel stay in Makkah and Madinah), airport transfers, and ground transportation. Some packages also include guided tours and meals. Please check individual package details for specific inclusions.',
  },
  {
    question: 'How long does it take to get the Umrah visa?',
    answer:
      'Umrah visa processing typically takes 5-7 working days after submitting all required documents. We recommend applying at least 3-4 weeks before your intended travel date.',
  },
  {
    question: 'Can I customize my Umrah package?',
    answer:
      'Yes! We offer a complete Umrah package builder feature that allows you to choose your preferred hotel, transport, duration, and add-ons to create a personalized package that fits your budget and requirements.',
  },
  {
    question: 'What documents are required for Umrah visa?',
    answer:
      "You'll need a valid passport (minimum 6 months validity), passport-sized photos, completed visa application form, confirmed flight tickets, and hotel booking confirmation. We'll guide you through the entire process.",
  },
  {
    question: 'Do you offer group discounts?',
    answer:
      'Yes, we offer special discounts for groups of 10 or more people traveling together. Contact our group booking department for customized quotes.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Cancellation policies vary by package. Generally, cancellations made 30+ days before departure receive 80% refund, 15-29 days receive 50% refund, and less than 15 days are non-refundable. We recommend purchasing travel insurance.',
  },
]
</script>

<style scoped>
.faq-section {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
}
.container {
  max-width: 800px;
  margin: 0 auto;
}
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}
.section-header h2 {
  font-size: 2rem;
  color: #006d73;
  margin-bottom: 0.5rem;
}
.faq-list {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.faq-item {
  border-bottom: 1px solid #eee;
}
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
}
.faq-question:hover {
  background-color: #f5f5f5;
}
.faq-question h3 {
  font-size: 1.1rem;
  color: #006d73;
  margin: 0;
}
.icon {
  font-size: 1.5rem;
  font-weight: bold;
  color: #d8a113;
}
.faq-answer {
  padding: 0 1.25rem 1.25rem 1.25rem;
  color: #555;
  line-height: 1.6;
}
</style>
