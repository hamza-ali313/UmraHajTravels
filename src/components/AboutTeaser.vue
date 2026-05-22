<template>
  <section class="about-teaser">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2>About UmrahTravel</h2>
          <p>With over 15 years of experience in Umrah and Hajj services, we have helped more than 50,000 pilgrims fulfill their spiritual journey with ease and comfort.</p>
          <p>Our mission is to provide transparent, affordable, and high-quality travel packages that cater to every pilgrim's needs. From visa processing to accommodation, we handle everything so you can focus on your worship.</p>
          <router-link to="/about" class="about-btn">Learn More About Us →</router-link>
        </div>
        <div class="about-stats">
          <div class="stat">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div class="stat">
            <h3>50K+</h3>
            <p>Happy Pilgrims</p>
          </div>
          <div class="stat">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
          <div class="stat">
            <h3>100%</h3>
            <p>Visa Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-teaser {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}
.about-text h2 {
  font-size: 2rem;
  color: #1a472a;
  margin-bottom: 1rem;
}
.about-text p {
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.8;
}
.about-btn {
  display: inline-block;
  color: #1a472a;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
}
.about-btn:hover {
  color: #ffd700;
}
.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
.stat {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.stat h3 {
  font-size: 2rem;
  color: #ffd700;
  margin-bottom: 0.5rem;
}
.stat p {
  color: #666;
}
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>