import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResourse from 'vue-resource';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

import "./common/stylus/index.styl";
/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResourse);
const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];
const router = new VueRouter({
  linkActiveClass:'active',
  routes:routes// （缩写）相当于 routes: routes
});
const app = new Vue({
	el:"app",
	components:{App},
  	router
}).$mount('#app');
//进来默认就是goods项路由
router.push('./goods');



