<template>
  <div>
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-blue-500 to-purple-500 py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold text-white mb-4 animate-fadeIn">
          Unlock Your Software's Potential
        </h1>
        <p class="text-lg text-white mb-8 animate-fadeIn delay-200">
          Easily register and manage your software licenses with our intuitive platform.
        </p>
        <div class="flex justify-center animate-fadeIn delay-400">
          <a href="#" class="bg-white text-blue-500 font-bold py-3 px-6 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">
            Register Now
          </a>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 animate-fadeInUp">
          Features
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-100 rounded-lg p-6 animate-fadeInUp delay-200">
            <div class="flex items-center mb-4">
              <svg class="h-8 w-8 text-blue-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 class="text-xl font-bold text-gray-800">Easy Registration</h3>
            </div>
            <p class="text-gray-600">
              Our intuitive registration process makes it simple to activate your software licenses.
            </p>
          </div>
          <div class="bg-gray-100 rounded-lg p-6 animate-fadeInUp delay-400">
            <div class="flex items-center mb-4">
              <svg class="h-8 w-8 text-blue-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <h3 class="text-xl font-bold text-gray-800">Manage Licenses</h3>
            </div>
            <p class="text-gray-600">
              Easily manage and track your software licenses from a single, centralized platform.
            </p>
          </div>
          <div class="bg-gray-100 rounded-lg p-6 animate-fadeInUp delay-600">
            <div class="flex items-center mb-4">
              <svg class="h-8 w-8 text-blue-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 class="text-xl font-bold text-gray-800">Secure and Reliable</h3>
            </div>
            <p class="text-gray-600">
              Your software licenses are protected with our robust security measures and reliable infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Call-to-Action Section -->
    <div class="bg-gradient-to-r from-blue-500 to-purple-500 py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-white mb-4 animate-fadeInUp">
          Ready to Streamline Your Software Licensing?
        </h2>
        <p class="text-lg text-white mb-8 animate-fadeInUp delay-200">
          Sign up now and start managing your licenses with ease.
        </p>
        <div class="flex justify-center animate-fadeInUp delay-400">
          <a href="#" class="bg-white text-blue-500 font-bold py-3 px-6 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">
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