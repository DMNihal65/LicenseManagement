<template>
   
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-blue-900">Sign in to your account</h2>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" class="sr-only">Username</label>
              <input id="username" v-model="username" name="username" type="text" autocomplete="username" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
            </div>
          </div>
  
          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
import { useAuthStore } from '../store/auth';

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      const authStore = useAuthStore();
      if (this.username === 'cmti' && this.password === '123') {
        authStore.login(this.username, this.password);
        this.$router.push('/admin/usermanagement'); // Redirect to admin user management
      } else {
        authStore.login(this.username, this.password);
        this.$router.push('/home'); // Redirect to public home
        authStore.login('public', ''); // Simulate login for public user
        
      }
      authStore.SaveUser(this.username)
    },
  },
};
</script>
  
  <style scoped>
  /* Tailwind CSS classes can be used here */
  </style>
  