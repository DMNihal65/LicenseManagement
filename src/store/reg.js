import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserRegStore = defineStore('user', {
  state: () => ({
    // Add any additional state properties as needed
  }),
  actions: {
    async registerUser(formData) {
      try {
        const response = await axios.post('http://172.20.10.2:9999/users/', {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          company_name: formData.companyName,
          registered_products: [],
        });

        console.log('Registration successful:', response.data);
        // Handle successful registration, e.g., redirect to login page
       
      } catch (error) {
        console.error('Error registering user:', error);
        // Handle registration error, e.g., display an error message
      }
    },
    // Add any other actions as needed
  },
});