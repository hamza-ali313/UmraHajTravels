<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-section">
          <h3>UmrahTravel</h3>
          <p>Making your spiritual journey comfortable, affordable, and memorable.</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/tours">Tours</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li>📞 +1 (555) 123-4567</li>
            <li>✉️ info@umrahtravel.com</li>
            <li>📍 123 Main Street, New York, NY 10001</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Follow Us</h4>
          <div class="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 UmrahTravel. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background-color: #006d73;
  color: white;
  padding: 3rem 2rem 1rem;
  margin-top: 2rem;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}
.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.footer-section h4 {
  margin-bottom: 1rem;
}
.footer-section ul {
  list-style: none;
  padding: 0;
}
.footer-section ul li {
  margin-bottom: 0.5rem;
}
.footer-section a {
  color: white;
  text-decoration: none;
}
.footer-section a:hover {
  color: #d8a113;
}
.social-links {
  display: flex;
  gap: 1rem;
}
.social-links a {
  color: white;
  text-decoration: none;
}
.social-links a:hover {
  color: #d8a113;
}
.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
