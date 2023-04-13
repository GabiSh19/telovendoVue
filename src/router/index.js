import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";

const routes = [
  {
      path: '/',
      name: "LoginPage",
      component: LoginPage
  },
    {
      path: '/HomePage',
      name: "HomePage",
      component: HomePage
    },
   
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
  export default router;