// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/css/tailwind.css';

import Cryptoicon from 'vue-cryptoicon';
import icons from 'vue-cryptoicon/src/icons';

Cryptoicon.add(icons);
Vue.use(Cryptoicon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
