import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-awesome/icons/bars'
import 'vue-awesome/icons/regular/window-close'
import 'vue-awesome/icons/brands/linkedin'
import 'vue-awesome/icons/brands/twitter'
import 'vue-awesome/icons/brands/github'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false
Vue.component('v-icon', Icon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
