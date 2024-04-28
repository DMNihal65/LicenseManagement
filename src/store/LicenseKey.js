import { defineStore } from 'pinia';
import axios from 'axios';

export const useLicenseStore = defineStore('license', () => {
  async function registerLicense(userId, productId) {
    try {
      const response = await axios.post(`http://172.20.10.2:9999/licenses/?user_id=${userId}&product_id=${productId}`);
      console.log('License registration successful:', response.data);
      // Handle successful license registration
    } catch (error) {
      console.error('Error registering license:', error);
      // Handle license registration error
    }
  }

  return {
    registerLicense,
    // Add any other actions or methods related to license management here
  };
});
