import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import chat from './store/chat'
import App from './App.vue'
import Room from './components/room'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false

const store = new Vuex.Store({
	modules: {
		chat
	}
});

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/room/:id', component: Room }
  ]
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
