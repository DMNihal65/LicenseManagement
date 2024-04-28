// UserManagementPage.vue
<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">User Management</h1>
        <button @click="showAddUserModal = true" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
          Add New User
        </button>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full table-auto">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-4 py-3 rounded-tl-lg border-r">Username</th>
              <th class="px-4 py-3 border-r">Email</th>
              <th class="px-4 py-3 border-r">Company Name</th>
              <th class="px-4 py-3 rounded-tr-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in userStore.users" :key="index" class="border-b hover:bg-gray-50 transition-colors duration-300">
              <td v-if="!user.editing" class="px-4 py-3 border-r text-center">{{ user.username }}</td>
              <td v-else><input v-model="user.username" class="px-4 py-2 border rounded-lg w-full"></td>
              <td v-if="!user.editing" class="px-4 py-3 border-r text-center">{{ user.email }}</td>
              <td v-else><input v-model="user.email" class="px-4 py-2 border rounded-lg w-full"></td>
              <td v-if="!user.editing" class="px-4 py-3 border-r text-center">{{ user.company_name }}</td>
              <td v-else><input v-model="user.company_name" class="px-4 py-2 border rounded-lg w-full"></td>
              <td class="px-4 py-3 text-center">
                <button @click="toggleEdit(user)" class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg">
                  {{ user.editing ? 'Save' : 'Edit' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="showAddUserModal" class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
        <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 class="text-2xl font-bold mb-4">Add New User</h2>
          <div class="mb-4">
            <label for="username" class="block font-medium mb-2">Username</label>
            <input v-model="newUser.username" id="username" type="text" class="px-4 py-2 border rounded-lg w-full" />
          </div>
          <div class="mb-4">
            <label for="email" class="block font-medium mb-2">Email</label>
            <input v-model="newUser.email" id="email" type="email" class="px-4 py-2 border rounded-lg w-full" />
          </div>
          <div class="mb-4">
            <label for="company_name" class="block font-medium mb-2">Company Name</label>
            <input v-model="newUser.company_name" id="company_name" type="text" class="px-4 py-2 border rounded-lg w-full" />
          </div>
          <div class="flex justify-end">
            <button @click="addUser" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
              Add User
            </button>
            <button @click="showAddUserModal = false" class="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg ml-2">
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
import { useUserStore } from '../store/users.js';

const userStore = useUserStore();
const showAddUserModal = ref(false);
const newUser = ref({
  username: '',
  email: '',
  company_name: ''
});

onMounted(() => {
  userStore.fetchUsers();
});

const toggleEdit = (user) => {
  user.editing = !user.editing;
  if (!user.editing) {
    const index = userStore.users.findIndex(u => u === user);
    userStore.updateUser(user);
    console.log('Edited Data:', user);
  }
};

const addUser = async () => {
  await userStore.createUser(newUser.value);
  showAddUserModal.value = false;
  newUser.value = {
    username: '',
    email: '',
    company_name: ''
  };
  await userStore.fetchUsers();
};
</script>

<style>
.hover\:bg-gray-50:hover {
  background-color: #f9fafb;
}
</style>