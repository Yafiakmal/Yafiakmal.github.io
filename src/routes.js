import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
// import Admin from './views/Admin.vue';
// import AdminUsers from './views/AdminUsers.vue';
// import Login from './views/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  // {
  //   path: '/admin',
  //   component: Admin,
  //   children: [
  //     { path: 'users/:id', component: AdminUsers, props: true }
  //   ],
  //   meta: { requiresAuth: true }
  // },
  // { path: '/login', component: Login }
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
