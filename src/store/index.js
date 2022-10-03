import { createStore } from 'vuex'
import { appCart } from './AppCartModule'

export default createStore({
  state: {
    text: 42
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    appCart: appCart
  }
})
