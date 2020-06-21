import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user";
import permission from "./permission";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    hasRoles: state => state.user.roles && state.user.roles.length > 0
  },
  modules: {
    user:user,
    permission
  }
})
