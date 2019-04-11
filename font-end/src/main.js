// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './model'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/common.css'
Vue.config.productionTip = false
Vue.use(element)
Vue.directive('has', {
  inserted (el, binding) {
    if (!Vue.prototype.$_has(binding.value)) {
      el.parentNode.removeChild(el)
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
