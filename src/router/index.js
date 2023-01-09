import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RealPurchase from "../views/RealPurchase.vue"
// import Account from "../views/Account.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    { 
      path: '/login',
      component: LoginView
    },
    { 
      path: '/real',
      component: RealPurchase
    },
  ],
});

export default router;