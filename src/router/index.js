import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../views/HomePage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import LoginPage from "../views/LoginPage.vue";

const routes = [
  {
      path: '/',
      name: "",
      component: LoginPage
  },
    {
      path: '/HomePage',
      name: "HomePage",
      component: HomePage
    },
    {
      path: '/ProductsPage',
      name: "ProductsPage",
      component: ProductsPage
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
  export default router;