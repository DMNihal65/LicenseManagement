<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">License Management</h1>
        <button @click="showAddLicenseModal = true" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
          Add New License
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full table-auto">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-4 py-3 rounded-tl-lg border-r">License Key</th>
              <th class="px-4 py-3 border-r">Product ID</th>
              <th class="px-4 py-3 border-r">User ID</th>
              <th class="px-4 py-3 border-r">Issued Date</th>
              <th class="px-4 py-3 border-r">Expiry Date</th>
              <th class="px-4 py-3 border-r">Status</th>
              <th class="px-4 py-3 rounded-tr-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(license, index) in licenseStore.licenses" :key="index" class="border-b hover:bg-gray-50 transition-colors duration-300">
              <td v-if="!license.editing" class="px-4 py-3 border-r text-center">{{ license.license_key }}</td>
              <td v-else><input v-model="license.license_key" class="px-4 py-2 border rounded-lg w-full"></td>
              <td v-if="!license.editing" class="px-4 py-3 border-r text-center">{{ license.product_id }}</td>
              <td v-else><input v-model="license.product_id" class="px-4 py-2 border rounded-lg w-full"></td>
              <td v-if="!license.editing" class="px-4 py-3 border-r text-center">{{ license.user_id }}</td>
              <td v-else><input v-model="license.user_id" class="px-4 py-2 border rounded-lg w-full"></td>
              <td v-if="!license.editing" class="px-4 py-3 border-r text-center">{{ license.issued_date }}</td>
              <td v-else><input v-model="license.issued_date" class="px-4 py-2 border rounded-lg w-full"></td>
              <td v-if="!license.editing" class="px-4 py-3 border-r text-center">{{ license.expiry_date }}</td>
              <td v-else><input v-model="license.expiry_date" class="px-4 py-2 border rounded-lg w-full"></td>
              <td v-if="!license.editing" class="px-4 py-3 border-r text-center">{{ license.status }}</td>
              <td v-else><input v-model="license.status" class="px-4 py-2 border rounded-lg w-full"></td>
              <td class="px-4 py-3 text-center">
                <button @click="toggleEdit(license)" class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg">
                  {{ license.editing ? 'Save' : 'Edit' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="showAddLicenseModal" class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
        <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 class="text-2xl font-bold mb-4">Add New License</h2>
          <div class="mb-4">
            <label for="license_key" class="block font-medium mb-2">License Key</label>
            <input v-model="newLicense.license_key" id="license_key" type="text" class="px-4 py-2 border rounded-lg w-full" />
          </div>
          <div class="mb-4">
            <label for="product_id" class="block font-medium mb-2">Product ID</label>
            <input v-model="newLicense.product_id" id="product_id" type="text" class="px-4 py-2 border rounded-lg w-full" />
          </div>
          <div class="mb-4">
            <label for="user_id" class="block font-medium mb-2">User ID</label>
            <input v-model="newLicense.user_id" id="user_id" type="text" class="px-4 py-2 border rounded-lg w-full" />
          </div>
          <div class="mb-4">
            <label for="issued_date" class="block font-medium mb-2">Issued Date</label>
            <input v-model="newLicense.issued_date" id="issued_date" type="text" class="px-4 py-2 border rounded-lg w-full" />
          </div>
          <div class="mb-4">
            <label for="expiry_date" class="block font-medium mb-2">Expiry Date</label>
            <input v-model="newLicense.expiry_date" id="expiry_date" type="text" class="px-4 py-2 border rounded-lg w-full" />
          </div>
          <div class="mb-4">
            <label for="status" class="block font-medium mb-2">Status</label>
            <input v-model="newLicense.status" id="status" type="text" class="px-4 py-2 border rounded-lg w-full" />
          </div>
          <div class="flex justify-end">
            <button @click="addLicense" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
              Add License
            </button>
            <button @click="showAddLicenseModal = false" class="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg ml-2">
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
import { useLicenseStore } from '../store/licenses.js';

const licenseStore = useLicenseStore();
const showAddLicenseModal = ref(false);
const newLicense = ref({
  license_key: '',
  product_id: '',
  user_id: '',
  issued_date: '',
  expiry_date: '',
  status: ''
});

onMounted(() => {
  licenseStore.fetchLicenses();
});

const toggleEdit = (license) => {
  license.editing = !license.editing;
  if (!license.editing) {
    const index = licenseStore.licenses.findIndex(l => l === license);
    licenseStore.updateLicense(license);
    console.log('Edited Data:', license);
  }
};

const addLicense = async () => {
  await licenseStore.createLicense(newLicense.value);
  showAddLicenseModal.value = false;
  newLicense.value = {
    license_key: '',
    product_id: '',
    user_id: '',
    issued_date: '',
    expiry_date: '',
    status: ''
  };
  await licenseStore.fetchLicenses();
};
</script>

<style>
.hover\:bg-gray-50:hover {
  background-color: #f9fafb;
}
</style>