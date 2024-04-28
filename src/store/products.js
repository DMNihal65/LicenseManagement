// products.js
import { defineStore } from 'pinia';

export const useProductStore = defineStore({
  id: 'product',
  
  state: () => ({
    products: []
  }),
  actions: {
    async fetchProducts() {
      const response = await fetch('http://172.20.10.2:9999/products/');
      const data = await response.json();
      this.products = data;
    },
    async createProduct(newProduct) {
      const response = await fetch('http://172.20.10.2:9999/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      });
      const data = await response.json();
      this.products.push(data);
    },
    async updateProduct(product) {
      const response = await fetch(`http://172.20.10.2:9999/products/${product._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: product.name,
          description: product.description,
          price: product.price,
          license_type: product.license_type
        })
      });
      if (response.ok) {
        await this.fetchProducts();
      }
    },
    async deleteProduct(productId) {
      const response = await fetch(`http://172.20.10.2:9999/products/${productId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        this.products = this.products.filter(p => p._id !== productId);
      }
    },

    
  }
});
