import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/Home.vue';

const routes = [
    { path: '/Home', name: 'Home', component: Home },
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;