import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import PublicLayout from '../views/PublicLayout.vue';
import AdminLayout from '../views/AdminLayout.vue';
import Home from '../components/HomePage.vue';
import Product from '../components/ProductPage.vue';
import Registration from '../components/RegistrationPage.vue';
import LicenseKey from '../components/LicenseKeyPage.vue';
import UserManagement from '../components/UserManagementPage.vue';
import ProductManagement from '../components/ProductManagementPage.vue';
import LicenseManagement from '../components/LicenseManagementPage.vue';
import AnalyticsDashboard from '../components/AnalyticsDashboard.vue';

const routes = [
  { path: '/', component: LoginPage },
  {
    path: '/public',
    component: PublicLayout,
    children: [
      { path: '/home', component: Home },
      { path: '/products', component: Product },
      { path: '/registration', component: Registration },
      { path: '/licensekey', component: LicenseKey },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: 'usermanagement', component: UserManagement },
      { path: 'productmanagement', component: ProductManagement },
      { path: 'licensemanagement', component: LicenseManagement },
      { path: 'analytics', component: AnalyticsDashboard },
    ],
  },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAdmin = true; // Replace with actual role check logic
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAdmin) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
