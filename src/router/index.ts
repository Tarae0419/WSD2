import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../components/SignIn.vue';
import HomePage from '../components/Home.vue'; // 이름 수정

const routes = [
  {
    path: '/',
    name: 'HomePage', // 이름 수정
    component: HomePage,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
