<template>
  <div class="flex justify-center items-center h-screen bg-gray-300">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl flex">
      <div class="w-1/2 pr-8">
        <h1 class="text-2xl font-bold mb-6 text-gray-800">Sign Up</h1>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="username" class="block font-medium text-gray-700 mb-1">Username</label>
            <input v-model="formData.username" type="text" id="username" name="username" class="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 px-3 border" required>
          </div>

          <div>
            <label for="email" class="block font-medium text-gray-700 mb-1">Email</label>
            <input v-model="formData.email" type="email" id="email" name="email" class="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 px-3 border" required>
          </div>

          <div>
            <label for="password" class="block font-medium text-gray-700 mb-1">Password</label>
            <input v-model="formData.password" type="password" id="password" name="password" class="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 px-3 border" required>
          </div>

          <div>
            <label for="confirm-password" class="block font-medium text-gray-700 mb-1">Confirm Password</label>
            <input v-model="formData.confirmPassword" type="password" id="confirm-password" name="confirm-password" class="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 px-3 border" required>
          </div>

          <div>
            <label for="company-name" class="block font-medium text-gray-700 mb-1">Company Name</label>
            <input v-model="formData.companyName" type="text" id="company-name" name="company-name" class="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 px-3 border" required>
          </div>

          <div class="flex justify-between items-center">
            <button type="submit" class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md">Sign Up</button>
            <p class="text-indigo-500 hover:text-indigo-600 font-medium" onclick="AlreadyRegistered()">Already Registered?</p>
          </div>
        </form>

        <div class="mt-4 text-center">
          <a href="#" @click.prevent="showForgotPasswordModal = true" class="text-indigo-500 hover:text-indigo-600 font-medium">Forgot Password?</a>
        </div>

        <!-- Forgot Password Modal -->
        <div v-if="showForgotPasswordModal" class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md relative">
            <h2 class="text-xl font-bold mb-4 text-gray-800">Forgot Password</h2>
            <p class="text-gray-700 mb-4">Enter your registered email to receive a password reset link.</p>
            <form @submit.prevent="resetPassword" class="space-y-4">
              <div>
                <label for="forgot-password-email" class="block font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="forgot-password-email" v-model="forgotPasswordEmail" class="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 px-3" required>
              </div>
              <div class="flex justify-end">
                <button type="button" @click="showForgotPasswordModal = false" class="mr-2 text-gray-500 hover:text-gray-700 font-medium">Cancel</button>
                <button type="submit" class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="rotate-90 w-1/2 bg-fit mr-20 bg-center">
        <img src="../assets/man.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserRegStore } from '../store/reg';

const showForgotPasswordModal = ref(false);
const forgotPasswordEmail = ref('');
const formData = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  companyName: '',
});

const userStore = useUserRegStore();

const submitForm = () => {
  userStore.registerUser(formData.value);
};

const resetPassword = () => {
  // Your existing resetPassword method
};
function AlreadyRegistered () {
  this.$router.push('/home')
}

</script>