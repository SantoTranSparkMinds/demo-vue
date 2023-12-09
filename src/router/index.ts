import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home/index.vue'; // Import your views or components
import Landing from '../views/LandingPage/index.vue'; // Import your views or components
import Login from '../views/Login/index.vue'; // Import your views or components

const routes = [
  {
    path: '/feature',
    name: 'Home',
    component: Home,
  },
  {
    path: '/benefits',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/news',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
