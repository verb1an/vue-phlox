import { createStore } from 'vuex'
import { appCart } from './AppCartModule'
import { appUser } from './AppUserModule'
import { appCategory } from './AppCategoryModule'
import { appCatalog } from './AppCatalogModule'

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
    appUser: appUser,
    appCategory: appCategory,
    appCatalog: appCatalog
  }
})
