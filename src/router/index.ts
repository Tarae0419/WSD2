import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../components/SignIn.vue';
import HomePage from '../components/Home.vue';
import Popular from '@/components/Popular.vue';
import Search from '@/components/Search.vue';
import Wishlist from '@/components/Wishlist.vue';

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
  {
    path: '/popular',
    name: 'Popular',
    component: Popular,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
