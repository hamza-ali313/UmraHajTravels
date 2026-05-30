<template>
  <div class="contact-page">
    <div class="contact-hero">
      <h1>Contact Us</h1>
      <p>We're here to help with your Umrah journey</p>
    </div>

    <div class="container">
      <div class="contact-grid">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <div class="info-item">
            <div class="info-icon">📍</div>
            <div>
              <h3>Visit Us</h3>
              <p>123 Main Street, Suite 100<br />New York, NY 10001<br />United States</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
              <p class="hours">Mon-Fri: 9AM - 8PM EST</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">✉️</div>
            <div>
              <h3>Email Us</h3>
              <p>info@umrahtravel.com<br />support@umrahtravel.com</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">💬</div>
            <div>
              <h3>Live Chat</h3>
              <p>Chat with our support team<br />Available 24/7</p>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2>Send us a Message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input type="text" id="name" v-model="form.name" required />
            </div>
            <div class="form-group">
              <label for="email">Email Address *</label>
              <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" v-model="form.phone" />
            </div>
            <div class="form-group">
              <label for="subject">Subject *</label>
              <select id="subject" v-model="form.subject" required>
                <option value="">Select a subject</option>
                <option value="package">Package Inquiry</option>
                <option value="customization">Custom Package Request</option>
                <option value="visa">Visa Assistance</option>
                <option value="support">Customer Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" rows="6" v-model="form.message" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
          <div v-if="submitted" class="success-message">
            Thank you! We'll get back to you within 24 hours.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const submitted = ref(false)

const submitForm = () => {
  // Here you would typically send data to your backend API
  console.log('Form submitted:', form)
  submitted.value = true

  // Reset form after 3 seconds
  setTimeout(() => {
    submitted.value = false
    Object.assign(form, {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }, 3000)
}
</script>

<style scoped>
.contact-page {
  margin-top: 60px;
}
.contact-hero {
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/contact-bg.jpg');
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
.contact-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}
.contact-info h2,
.contact-form h2 {
  font-size: 1.8rem;
  color: #006d73;
  margin-bottom: 2rem;
}
.info-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
.info-icon {
  font-size: 2rem;
}
.info-item h3 {
  color: #006d73;
  margin-bottom: 0.25rem;
}
.info-item p {
  color: #555;
  line-height: 1.5;
}
.hours {
  font-size: 0.9rem;
  color: #888;
  margin-top: 0.5rem;
}
.form-group {
  margin-bottom: 1.5rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #006d73;
  font-weight: bold;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #d8a113;
}
.submit-btn {
  background-color: #006d73;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
}
.submit-btn:hover {
  background-color: #2d6a4f;
}
.success-message {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border-radius: 5px;
  text-align: center;
}
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
