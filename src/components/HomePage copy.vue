<template>
  <div class="h-screen flex justify-center items-center bg-gray-100">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-3xl font-bold mb-4">Register Your Product</h1>
      <form>
        <div class="mb-4">
          <label for="license-key" class="block text-sm font-bold mb-2">License Key</label>
          <input type="text" id="license-key" class="w-full p-2 pl-10 text-sm text-gray-700" />
        </div>
        <div class="mb-4">
          <label for="product-name" class="block text-sm font-bold mb-2">Product Name</label>
          <input type="text" id="product-name" class="w-full p-2 pl-10 text-sm text-gray-700" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" class="w-full p-2 pl-10 text-sm text-gray-700" />
        </div>
        <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Register</button>
      </form>
      <div class="mt-4 text-sm text-gray-600">
        <p>Already registered? <a href="#" class="text-orange-500 hover:text-orange-700">Login</a></p>
      </div>
    </div>
  </div>
</template>