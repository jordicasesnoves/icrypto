import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Pages/Home';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }
  ]
});

/* Use this when you need to change doc title for each route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})*/

export default router
