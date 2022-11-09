import { createStore } from 'vuex'
import { appCart } from './AppCartModule'
import { appUser } from './AppUserModule'

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
    appCart: appCart,
    appUser: appUser
  }
})
