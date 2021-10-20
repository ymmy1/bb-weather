import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import Location from '../views/Location';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/location/:id',
    name: 'Location',
    component: Location,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
