<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Product Management</h1>
        <button @click="showAddProductModal = true" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
          Add New Product
        </button>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full table-auto">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-4 py-3 rounded-tl-lg border-r">Name</th>
              <th class="px-4 py-3 border-r">Description</th>
              <th class="px-4 py-3 border-r">Price</th>
              <th class="px-4 py-3 border-r">License Type</th>
              <th class="px-4 py-3 rounded-tr-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in productStore.products" :key="index" class="border-b hover:bg-gray-50 transition-colors duration-300">
              <td v-if="!product.editing" class="px-4 py-3 border-r text-center">{{ product.name }}</td>
              <td v-else><input v-model="product.name" class="px-4 py-2 border rounded-lg w-full"></td>
              <td v-if="!product.editing" class="px-4 py-3 border-r text-center">{{ product.description }}</td>
              <td v-else><input v-model="product.description" class="px-4 py-2 border rounded-lg w-full"></td>
              <td v-if="!product.editing" class="px-4 py-3 border-r text-center">{{ product.price }}</td>
              <td v-else><input v-model="product.price" class="px-4 py-2 border rounded-lg w-full"></td>
              <td v-if="!product.editing" class="px-4 py-3 border-r text-center">{{ product.license_type }}</td>
              <td v-else><input v-model="product.license_type" class="px-4 py-2 border rounded-lg w-full"></td>
              <td class="px-4 py-3 text-center">
                <button @click="toggleEdit(product)" class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg">
                  {{ product.editing ? 'Save' : 'Edit' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="showAddProductModal" class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
        <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 class="text-2xl font-bold mb-4">Add New Product</h2>
          <div class="mb-4">
            <label for="name" class="block font-medium mb-2">Name</label>
            <input v-model="newProduct.name" id="name" type="text" class="px-4 py-2 border rounded-lg w-full" />
          </div>
          <div class="mb-4">
            <label for="description" class="block font-medium mb-2">Description</label>
            <input v-model="newProduct.description" id="description" type="text" class="px-4 py-2 border rounded-lg w-full" />
          </div>
          <div class="mb-4">
            <label for="price" class="block font-medium mb-2">Price</label>
            <input v-model="newProduct.price" id="price" type="number" class="px-4 py-2 border rounded-lg w-full" />
          </div>
          <div class="mb-4">
            <label for="license_type" class="block font-medium mb-2">License Type</label>
            <input v-model="newProduct.license_type" id="license_type" type="text" class="px-4 py-2 border rounded-lg w-full" />
          </div>
          <div class="flex justify-end">
            <button @click="addProduct" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
              Add Product
            </button>
            <button @click="showAddProductModal = false" class="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg ml-2">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '../store/products.js';

const productStore = useProductStore();
const showAddProductModal = ref(false);
const newProduct = ref({
  name: '',
  description: '',
  price: 0,
  license_type: ''
});

onMounted(() => {
  productStore.fetchProducts();
});

const toggleEdit = (product) => {
  product.editing = !product.editing;
  if (!product.editing) {
    const index = productStore.products.findIndex(p => p === product);
    productStore.updateProduct(product);
    console.log('Edited Data:', product);
  }
};

const addProduct = async () => {
  await productStore.createProduct(newProduct.value);
  showAddProductModal.value = false;
  newProduct.value = {
    name: '',
    description: '',
    price: 0,
    license_type: ''
  };
  await productStore.fetchProducts();
};
</script>

<style>
.hover\:bg-gray-50:hover {
  background-color: #f9fafb;
}
</style>
