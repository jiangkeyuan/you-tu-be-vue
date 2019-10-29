import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import login from './login/login.js'
const store = new Vuex.Store({//全局变量定义
	modules:{
		login
	},
})
export default store;