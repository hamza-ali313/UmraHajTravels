<template>
  <div class="about-page">
    <div class="about-hero">
      <h1>About Us</h1>
      <p>Your Trusted Partner for Umrah & Hajj Journeys</p>
    </div>
    
    <div class="container">
      <div class="company-story">
        <h2>Our Story</h2>
        <p>Founded in 2008, UmrahTravel began with a simple mission: to help Muslims worldwide perform their spiritual obligations with ease and dignity. What started as a small family business has grown into one of the most trusted Umrah and Hajj service providers, serving over 50,000 pilgrims from 30+ countries.</p>
        <p>We understand that embarking on a spiritual journey requires more than just booking tickets and hotels. It requires trust, reliability, and deep understanding of the religious and cultural needs of pilgrims. That's why every package we offer is carefully curated to ensure you can focus entirely on your worship.</p>
        <p>Our team of experienced professionals, including religious scholars and travel experts, work tirelessly to ensure your journey is smooth, comfortable, and spiritually fulfilling.</p>
      </div>

      <div class="mission-vision">
        <div class="mission">
          <h3>Our Mission</h3>
          <p>To provide transparent, affordable, and high-quality Umrah and Hajj services that make spiritual journeys accessible to every Muslim, regardless of their budget.</p>
        </div>
        <div class="vision">
          <h3>Our Vision</h3>
          <p>To become the world's most trusted digital platform for Umrah and Hajj travel, leveraging technology to create seamless, personalized pilgrimage experiences.</p>
        </div>
      </div>

      <div class="why-choose-us">
        <h2>Why Choose Us</h2>
        <div class="features-grid">
          <div class="feature">
            <div class="feature-icon">🕋</div>
            <h3>15+ Years Experience</h3>
            <p>Decades of expertise in Umrah and Hajj travel management</p>
          </div>
          <div class="feature">
            <div class="feature-icon">⭐</div>
            <h3>5-Star Rated Service</h3>
            <p>Excellent customer reviews and satisfaction ratings</p>
          </div>
          <div class="feature">
            <div class="feature-icon">💎</div>
            <h3>Best Price Guarantee</h3>
            <p>Competitive pricing with no hidden charges</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🛡️</div>
            <h3>24/7 Customer Support</h3>
            <p>Round-the-clock assistance during your journey</p>
          </div>
          <div class="feature">
            <div class="feature-icon">📋</div>
            <h3>100% Visa Success</h3>
            <p>Expert visa processing with high success rate</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🏨</div>
            <h3>Premium Accommodations</h3>
            <p>Hotels within walking distance to Haram</p>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <h2>Ready to Begin Your Journey?</h2>
        <p>Let us help you create the perfect Umrah experience</p>
        <router-link to="/contact" class="cta-button">Contact Us Today</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-page {
  margin-top: 60px;
}
.about-hero {
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/about-bg.jpg');
  background-size: cover;
  background-position: center;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}
.about-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}
.company-story {
  margin-bottom: 4rem;
}
.company-story h2 {
  font-size: 2rem;
  color: #1a472a;
  margin-bottom: 1.5rem;
}
.company-story p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 1rem;
}
.mission-vision {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
}
.mission, .vision {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
}
.mission h3, .vision h3 {
  color: #1a472a;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.why-choose-us {
  margin-bottom: 4rem;
}
.why-choose-us h2 {
  text-align: center;
  font-size: 2rem;
  color: #1a472a;
  margin-bottom: 3rem;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.feature {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}
.feature:hover {
  transform: translateY(-5px);
}
.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.feature h3 {
  color: #1a472a;
  margin-bottom: 0.5rem;
}
.cta-section {
  text-align: center;
  background: linear-gradient(135deg, #1a472a 0%, #2d6a4f 100%);
  color: white;
  padding: 4rem;
  border-radius: 10px;
}
.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.cta-button {
  display: inline-block;
  background-color: #ffd700;
  color: #1a472a;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 1rem;
  transition: background-color 0.3s;
}
.cta-button:hover {
  background-color: #ffed4a;
}
@media (max-width: 768px) {
  .mission-vision {
    grid-template-columns: 1fr;
  }
}
</style>