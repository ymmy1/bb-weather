import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import PageNotFound from '../views/PageNotFound';
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
  { path: '/:pathMatch(.*)*', component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
