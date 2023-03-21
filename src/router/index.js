import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import FormAddStock from '../views/FormBarang.vue';
import FormAddSupplier from '../views/FormSupplier.vue';
import SupplierView from '../views/SupplierView.vue';
import UpdateBarang from '../views/UpdateBarang.vue';
import UpdateSupplier from '../views/UpdateSupplier.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/register',
      component: RegisterView,
    },
    {
      path: '/add-stock',
      component: FormAddStock,
    },
    {
      path: '/add-supplier',
      component: FormAddSupplier,
    },
    {
      path: '/supplier',
      component: SupplierView,
    },
    {
      path: '/update-stock/:id',
      component: UpdateBarang,
    },
    {
      path: '/update-supplier/:id',
      component: UpdateSupplier,
    },
  ],
});

router.beforeEach((to, from) => {
  const isLogin = !!localStorage.getItem('access_token');
  if (
    (isLogin && to.path === '/login') ||
    (isLogin && to.path === '/register')
  ) {
    return { path: '/' };
  } else if (!isLogin && to.path === '/') {
    return { path: '/login' };
  }
});

export default router;
