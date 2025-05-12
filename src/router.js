import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';

const routes = [
  { path: '/', component: Home },
//   {
//     path: '/admin',
//     component: Admin,
//     children: [
//       { path: 'users/:id', component: AdminUsers, props: true }
//     ],
//     meta: { requiresAuth: true }
//   },
  { path: '/projects', component: Projects }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isUserLoggedIn()) {
    next('/login');
  } else {
    next();
  }
});

export default router;
