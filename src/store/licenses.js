// licenses.js
import { defineStore } from 'pinia';

export const useLicenseStore = defineStore({
  id: 'license',
  state: () => ({
    licenses: []
  }),
  actions: {
    async fetchLicenses() {
      const response = await fetch('http://172.20.10.2:9999/licenses/');
      const data = await response.json();
      this.licenses = data;
    },
    async createLicense(newLicense) {
      const response = await fetch('http://172.20.10.2:9999/licenses/?user_id=662bd71fc493c590e725fa1d&product_id=662b8a71e4895b9ae642a288', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newLicense)
      });
      const data = await response.json();
      this.licenses.push(data);
    },
    async updateLicense(license) {
      const response = await fetch(`http://172.20.10.2:9999/licenses/${license._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          license_key: license.license_key,
          product_id: license.product_id,
          user_id: license.user_id,
          issued_date: license.issued_date,
          expiry_date: license.expiry_date,
          status: license.status
        })
      });
      if (response.ok) {
        await this.fetchLicenses();
      }
    },
    async deleteLicense(licenseId) {
      const response = await fetch(`http://172.20.10.2:9999/licenses/${licenseId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        this.licenses = this.licenses.filter(l => l._id !== licenseId);
      }
    }
  }
});