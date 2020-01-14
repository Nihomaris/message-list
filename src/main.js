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
    { 
      path: '/message-list/room/:id', 
      component: Room,
      props: (route) => {
        const userId = Number.parseInt(route.params.userId, 10)
        if (Number.isNaN(userId)) {
          return 0
        }
        return { userId }
      }
    }
  ]
})

// UI components registration
const requireComponent = require.context('./components/UI/', true, /Ui[A-Z]\w+\/index\.(vue|js)$/)
requireComponent.keys().map(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.replace(/^\.\/(.*)\/index\.\w+$/, '$1')
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')


