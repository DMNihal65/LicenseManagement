import { defineStore } from 'pinia';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    selectedProductId: null,
    selectedProductName:null,
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await fetch('http://172.20.10.2:9999/products/');
        const data = await response.json();
        this.products = data.map((product) => ({
          name: product.name,
          description: product.description,
          price: product.price,
          license_type: product.license_type,
          image: '../assets/cnc.jpg',
          id: product._id,
        }));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    setSelectedProductId(productId) {
      this.selectedProductId = productId;
      console.log("product id")
      console.log(productId)
    },
    setSelectedProductName(productName) {
      this.selectedProductName = productName;
      console.log("product name")
      console.log(productName)
    }
  },

});
