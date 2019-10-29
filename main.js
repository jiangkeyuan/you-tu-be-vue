import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false


//导航栏
import navbar from './components/you-to-be-nav-bar/you-to-be-nav-bar.vue';
//页面page
import ytbpages from './components/YTB-pages.vue'
Vue.component('navbar',navbar)
Vue.component('ytbpages',ytbpages)
//挂载vuex
import store from "./store/index.js";
App.mpType = 'app'

const app = new Vue({
	store,
  ...App
})
app.$mount()
