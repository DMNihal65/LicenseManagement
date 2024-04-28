<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
      <h1 class="text-2xl font-bold mb-6">License Key Registration</h1>
      <form @submit.prevent="submitLicenseKey" class="space-y-4">
        <div>
          <label for="username" class="block font-medium text-gray-700 mb-1">Username</label>
          <input type="text" id="username" v-model="username" class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" disabled>
        </div>
        <div>
          <label for="product-name" class="block font-medium text-gray-700 mb-1">Product Name</label>
          <input type="text" id="product-name" v-model="productName" class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" disabled>
        </div>
        <div>
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input id="license-agreement" type="checkbox" v-model="acceptedLicense" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" @click="showLicenseModal = true">
            </div>
            <div class="ml-3 text-sm">
              <label for="license-agreement" class="font-medium text-gray-700">I have read and accept the license agreement</label>
            </div>
          </div>
        </div>
        <div>
          <button type="submit" :disabled="!acceptedLicense" class="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
            Register License
          </button>
        </div>
      </form>
    </div>

    <div v-if="showLicenseModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">License Agreement</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ licenseAgreement }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" @click="showLicenseModal = false">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../store/auth';
import { useProductStore } from '../store/productStore';
import { useLicenseStore } from '../store/LicenseKey';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const productStore = useProductStore();
const licenseStore = useLicenseStore();
const router = useRouter();

const username = authStore.username;
const userId = authStore.userId;
const productName = productStore.selectedProductName;
const productId = productStore.selectedProductId;

const acceptedLicense = ref(false);
const showLicenseModal = ref(false);
const licenseAgreement = 'This is a sample license agreement. By accepting, you agree to the terms and conditions.';

const submitLicenseKey = () => {
  if (acceptedLicense.value) {
    licenseStore.registerLicense(userId, productId);
    router.push('/home');
  }
};
</script>

<style scoped>
.bg-gray-100 {
  background-color: #f7fafc;
}

.bg-white {
  background-color: #ffffff;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.rounded-lg {
  border-radius: 0.5rem;
}

.w-full {
  width: 100%;
}

.max-w-md {
  max-width: 28rem;
}

.p-8 {
  padding: 2rem;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.font-bold {
  font-weight: 700;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}

.block {
  display: block;
}

.font-medium {
  font-weight: 500;
}

.text-gray-700 {
  color: #4a5568;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.border-gray-300 {
  border-color: #e2e8f0;
}

.rounded-md {
  border-radius: 0.375rem;
}

.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.focus\:border-indigo-500:focus {
  border-color: #667eea;
}

.focus\:ring-indigo-500:focus {
  --tw-ring-color: #667eea;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.h-5 {
  height: 1.25rem;
}

.w-4 {
  width: 1rem;
}

.text-indigo-600 {
  color: #667eea;
}

.border-gray-300 {
  border-color: #e2e8f0;
}

.rounded {
  border-radius: 0.25rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.font-medium {
  font-weight: 500;
}

.text-gray-700 {
  color: #4a5568;
}

.w-full {
  width: 100%;
}

.bg-indigo-600 {
  background-color: #667eea;
}

.text-white {
  color: #ffffff;
}

.font-medium {
  font-weight: 500;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

.hover\:bg-indigo-700:hover {
  background-color: #5a67d8;
}

.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

.focus\:ring-indigo-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(101, 116, 205, var(--tw-ring-opacity));
}

.disabled\:opacity-50:disabled {
  opacity: 0.5;
}

.disabled\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}

.fixed {
  position: fixed;
}

.z-10 {
  z-index: 10;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.overflow-y-auto {
  overflow-y: auto;
}

.flex {
  display: flex;
}

.items-end {
  align-items: flex-end;
}

.justify-center {
  justify-content: center;
}

.min-h-screen {
  min-height: 100vh;
}

.pt-4 {
  padding-top: 1rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.pb-20 {
  padding-bottom: 5rem;
}

.text-center {
  text-align: center;
}

.sm\:block {
  display: block;
}

.sm\:p-0 {
  padding: 0;
}

.sm\:align-middle {
  align-items: center;
}

.sm\:h-screen {
  height: 100vh;
}

.bg-gray-500 {
  background-color: #a0aec0;
}

.bg-opacity-75 {
  --tw-bg-opacity: 0.75;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.inline-block {
  display: inline-block;
}

.align-bottom {
  vertical-align: bottom;
}

.bg-white {
  background-color: #ffffff;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.text-left {
  text-align: left;
}

.overflow-hidden {
  overflow: hidden;
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.transform {
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.sm\:my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.sm\:align-middle {
  align-items: center;
}

.sm\:max-w-lg {
  max-width: 32rem;
}

.sm\:w-full {
  width: 100%;
}

.bg-gray-50 {
  background-color: #f9fafb;
}

.sm\:px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.sm\:flex {
  display: flex;
}

.sm\:flex-row-reverse {
  flex-direction: row-reverse;
}

.sm\:ml-3 {
  margin-left: 0.75rem;
}

.sm\:w-auto {
  width: auto;
}

.sm\:text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
