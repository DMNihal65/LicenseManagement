<template>
  <div>
    <!-- Header and Hero Section -->
    <header class="bg-gray-900 text-white py-12 md:py-20">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 space-y-6">
          <h1 class="text-4xl md:text-5xl font-bold">Register Your License or Product</h1>
          <p class="text-lg md:text-xl">Secure your investment and unlock exclusive benefits.</p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
            Register Now
          </button>
        </div>
        <div class="md:w-1/2 mt-8 md:mt-0">
          <img src="" alt="License/Product Registration" class="rounded-lg shadow-lg">
        </div>
      </div>
    </header>

    <!-- Features Section -->
    <section class="bg-gray-100 py-12 md:py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center mb-4">
              <i class="fas fa-shield-alt text-blue-500 text-3xl mr-4"></i>
              <h3 class="text-xl font-bold">Secure Registration</h3>
            </div>
            <p>Protect your investment with our secure registration process.</p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center mb-4">
              <i class="fas fa-star text-yellow-500 text-3xl mr-4"></i>
              <h3 class="text-xl font-bold">Exclusive Benefits</h3>
            </div>
            <p>Enjoy exclusive benefits and perks as a registered user.</p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center mb-4">
              <i class="fas fa-rocket text-green-500 text-3xl mr-4"></i>
              <h3 class="text-xl font-bold">Easy Registration</h3>
            </div>
            <p>Our simple and intuitive registration process makes it a breeze.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-gray-900 text-white py-12 md:py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center mb-4">
              <img src="" alt="Customer 1" class="w-12 h-12 rounded-full mr-4">
              <div>
                <h3 class="text-xl font-bold">John Doe</h3>
                <p class="text-gray-400">Satisfied Customer</p>
              </div>
            </div>
            <p>"The registration process was quick and easy. I'm glad I registered my product and now enjoy the exclusive benefits."</p>
          </div>
          <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center mb-4">
              <img src="" alt="Customer 2" class="w-12 h-12 rounded-full mr-4">
              <div>
                <h3 class="text-xl font-bold">Jane Smith</h3>
                <p class="text-gray-400">Loyal Customer</p>
              </div>
            </div>
            <p>"I've been using this product for years, and the registration process was a breeze. The exclusive benefits are a great added value."</p>
          </div>
          <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center mb-4">
              <img src="" alt="Customer 3" class="w-12 h-12 rounded-full mr-4">
              <div>
                <h3 class="text-xl font-bold">Michael Johnson</h3>
                <p class="text-gray-400">Satisfied Customer</p>
              </div>
            </div>
            <p>"I'm really impressed with the level of security and the exclusive benefits that come with registering my product. Highly recommended!"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p>&copy; 2023 License/Product Registration. All rights reserved.</p>
        <nav class="mt-4 md:mt-0">
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Home</a></li>
            <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Features</a></li>
            <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Testimonials</a></li>
            <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.hero-content', {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.hero-content',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true
      }
    })

    gsap.from('.hero-image', {
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.hero-image',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true
      }
    })

    gsap.from('.feature-card', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.feature-card',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true
      }
    })

    gsap.from('.testimonial-card', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.testimonial-card',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true
      }
    })
  }
}
</script>