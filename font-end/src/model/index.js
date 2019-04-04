import Vuex from 'vuex'
import Vue from 'vue'
import router from './router'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: { router },
  strict: debug
})
