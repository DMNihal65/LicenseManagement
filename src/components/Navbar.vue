<template>
  <nav class="flex justify-between items-center h-16 bg-gray-800 text-white shadow-lg">
    <div class="flex items-center">
      <img src="" class="h-8 w-8 ml-4" alt="Company Logo">
      <h1 class="ml-2 font-bold">Company Name</h1>
    </div>
    <ul class="hidden md:flex space-x-4 mr-4">
      
      <li v-if="isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/admin/usermanagement">User Mangement</router-link></li>
      <li v-if="isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/admin/productmanagement">Product Management</router-link></li>
      <li v-if="isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/admin/licensemanagement">License Management</router-link></li>
      <li v-if="isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/admin/analytics">Analytics</router-link></li>
      <li v-if="!isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/products">Products</router-link></li>
      <li v-if="!isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/registration">Registration</router-link></li>
      <li v-if="!isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/licensekey">License Activation</router-link></li>
      <li v-if="!isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/">Sign Out</router-link></li>
    </ul>
    <div class="md:hidden mr-4">
      <button @click="isOpen = !isOpen" class="block text-2xl text-gray-200 focus:outline-none">
        &#9776;
      </button>
    </div>
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden absolute w-full bg-gray-800 top-16 z-10 shadow-lg">
        <ul class="flex flex-col items-center justify-center space-y-4 py-4">
          <li v-if="isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/admin/usermanagement">User Mangement</router-link></li>
          <li v-if="isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/admin/productmanagement">Product Management</router-link></li>
          <li v-if="isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/admin/licensemanagement">License Management</router-link></li>
          <li v-if="isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/admin/analytics">Analytics</router-link></li>
          <li v-if="!isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/products">Products</router-link></li>
          <li v-if="!isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/registration">Registration</router-link></li>
          <li v-if="!isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/licensekey">License Activation</router-link></li>
          <li v-if="!isAdmin" class="nav-link rounded-md px-3 py-2 hover:bg-gray-700 hover:shadow-md"><router-link to="/">Sign Out</router-link></li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
const authStore = useAuthStore();
let isAdmin = ref()
isAdmin = authStore.isAdmin;
const isOpen = ref(false);
console.log("isAdmin")
console.log(isAdmin)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.nav-link {
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
}
.nav-link:hover {
  transform: scale(1.05);
  background-color: #4b5563;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>