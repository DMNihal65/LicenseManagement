<template>
  <div class="bg-slate-300 mx-5 mt-4 rounded-xl">
    <div class="container mx-auto py-12 px-8">
      <h1 class="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="product in products"
          :key="product.name"
          class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          @mouseenter="animateProduct($event)"
          @mouseleave="resetProduct($event)"
        >
          <div class="relative">
            <img src="../assets/cnc.jpg" :alt="product.name" class="w-full h-64 object-cover" />
            <div class="absolute top-0 left-0 bg-blue-500 text-white px-4 py-2 rounded-br-lg">
              {{ product.license_type === 'Active' ? 'Buy Now' : 'Get License' }}
            </div>
          </div>
          <div class="p-6">
            <h2 class="text-xl font-bold mb-2">{{ product.name }}</h2>
            <p class="text-gray-600 mb-4">{{ product.description }}</p>
            <div class="flex justify-between items-center">
              <p class="text-blue-500 font-bold text-lg">${{ product.price }}</p>
              <button
                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                @click="handleBuyOrGetLicense(product)"
              >
                {{ product.license_type === 'Active' ? 'Buy Now' : 'Get License' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '../store/productStore';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';
import { gsap } from 'gsap';

const productStore = useProductStore();
const authStore = useAuthStore();
const router = useRouter();
const products = ref([]);

onMounted(async () => {
  await productStore.fetchProducts();
  products.value = productStore.products;
});

const animateProduct = (event) => {
  gsap.to(event.currentTarget, { duration: 0.3, scale: 1.05 });
};

const resetProduct = (event) => {
  gsap.to(event.currentTarget, { duration: 0.3, scale: 1 });
};

const handleBuyOrGetLicense = (product) => {
  if (authStore.isPublic) {
    console.log("public")
    console.log(authStore.isPublic)
    productStore.setSelectedProductId(product.id);
    productStore.setSelectedProductName(product.name);
    router.push('/licensekey');
  } else if (!authStore.isPublic && !authStore.isAdmin) {
    router.push('/registration');
  } else {
    // Handle buy or get license logic for authenticated and admin users
  }
};
</script>