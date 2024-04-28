import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    isAdmin: false,
    isPublic: false,
    username: "",
    userId: "",
  }),
  actions: {
    login(username, password) {
      // Perform authentication logic here
      // For example, set isAuthenticated and isAdmin based on login credentials
      if (username === 'cmti' && password === '123') {
        this.isAuthenticated = true;
        this.isAdmin = true; // Replace with actual role check logic
      } else if (username === 'Nihal' && password === 'Nihal') {
        console.log("cheking public")
        this.isPublic = true;
        console.log(this.isPublic)
      }
      


    },
    logout() {
      // Perform logout logic here
      this.isAuthenticated = false;
      this.isAdmin = false;
      this.isPublic = false;
    },


    async SaveUser(username) {
      try {
        const response = await axios.get(`http://172.20.10.2:9999/get-user-id/?username=${username}`);

        console.log('Registration successful:', response.data);
        // Handle successful registration, e.g., redirect to login page

        const resdata = response.data
        
        this.userId = resdata._id;
        this.username = resdata.username;
      } catch (error) {
        console.error('Error registering user:', error);
        // Handle registration error, e.g., display an error message
      }
    },
  }
});