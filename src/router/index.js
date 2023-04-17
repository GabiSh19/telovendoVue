import { createRouter, createWebHistory } from 'vue-router';
import ShowProducts from "../views/ShowProducts.vue";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
      path: '/',
      name: "HomePage",
      component: HomePage
  },
    {
      path: '/ShowProducts',
      name: "ShowProducts",
      component: ShowProducts
    },
    {
      path: '/LoginPage',
      name: "LoginPage",
      component: LoginPage
    }
   
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
  export default router;