<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Your Sacred Journey Begins Here</h1>
      <p>
        Customize your perfect Umrah package with ease. Quality service, transparent pricing, and
        spiritual fulfillment.
      </p>
      <button class="hero-btn">Build Your Package</button>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-top: 60px;
}
.hero-content {
  max-width: 800px;
  padding: 2rem;
}
.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.hero-btn {
  background-color: #d8a113;
  color: #000;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
}
.hero-btn:hover {
  background-color: #ffed4a;
}
</style>
