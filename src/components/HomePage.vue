<template>
  <div>
    <!-- Hero Section -->
    <!-- Hero Section -->
    <div class="hero-section rounded-b-3xl">
      <div class="hero-content">
        <h1 class="text-5xl font-bold mb-4 animate-fadeIn">
          Unlock Your Software's Potential
        </h1>
        <p class="text-lg mb-8 animate-fadeIn delay-200">
          Easily register and manage your software licenses with our intuitive platform.
        </p>
        <div class="flex justify-center animate-fadeIn delay-400">
          <a href="/" class="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300">
            Register Now
          </a>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-gray-800 mb-8 animate-fadeInUp text-center">
          Features
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-6 animate-fadeInUp delay-200">
            <div class="flex items-center mb-4">
              <svg class="h-8 w-8 text-pink-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 class="text-2xl font-bold text-gray-800">Easy Registration</h3>
            </div>
            <p class="text-gray-600">
              Our intuitive registration process makes it simple to activate your software licenses.
            </p>
          </div>
          <div class="bg-white rounded-lg p-6 animate-fadeInUp delay-400">
            <div class="flex items-center mb-4">
              <svg class="h-8 w-8 text-pink-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <h3 class="text-2xl font-bold text-gray-800">Manage Licenses</h3>
            </div>
            <p class="text-gray-600">
              Easily manage and track your software licenses from a single, centralized platform.
            </p>
          </div>
          <div class="bg-white rounded-lg p-6 animate-fadeInUp delay-600">
            <div class="flex items-center mb-4">
              <svg class="h-8 w-8 text-pink-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 class="text-2xl font-bold text-gray-800">Secure and Reliable</h3>
            </div>
            <p class="text-gray-600">
              Your software licenses are protected with our robust security measures and reliable infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Call-to-Action Section -->
    <div class="bg-gradient-to-r from-blue-500 to-purple-500 py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4 animate-fadeInUp">
          Ready to Streamline Your Software Licensing?
        </h2>
        <p class="text-lg mb-8 animate-fadeInUp delay-200">
          Sign up now and start managing your licenses with ease.
        </p>
        <div class="flex justify-center animate-fadeInUp delay-400">
          <a href="#" class="bg-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors duration-300">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LicenseRegistrationPage',
}
</script>

<style>
.hero-section {
  background-image: url('../assets/cnc.jpg');
  background-size: cover;
  background-position: bottom;
  height: 500px; /* Adjust the height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
  color: white;
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}

.animate-fadeInUp {
  animation: fadeInUp 0.5s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
