// store.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: []
  }),
  actions: {
    async fetchUsers() {
      const response = await fetch('http://172.20.10.2:9999/users/');
      const data = await response.json();
      this.users = data;
    },
    async createUser(newUser) {
      const response = await fetch('http://172.20.10.2:9999/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });
      const data = await response.json();
      this.users.push(data);
    },
    async updateUser(user) {
      const response = await fetch(`http://172.20.10.2:9999/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          company_name: user.company_name,
          registered_products: user.registered_products
        })
      });
      if (response.ok) {
        await this.fetchUsers();
      }
    }
  }
});