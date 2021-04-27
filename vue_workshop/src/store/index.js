import Vue from "vue";
import Vuex from "vuex";
<<<<<<< HEAD
import createPersistedState from 'vuex-persistedstate'
// import { getField, updateField } from "vuex-map-fields";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
})],
  strict: true,
  state: {
    name: "",
    email: "",
    password: "",
  },
  getters: {
    name: (state) => {
      return state.name;
    },
    email: (state) => {
      return state.email;
    },
    password: (state) => {
      return state.password;
    },
  },
  mutations: {
    updatename(state,value) {
      state.name = value},
    updateemail(state,value) {
      state.email = value},
    updatepassword(state,value) {
      state.password = value},
  },
  actions: {
    updatename: ({commit, state }, newValue) => {
      commit("updatename", newValue);
      return state.name;
    },
    updateemail: ({commit, state }, newValue) => {
      commit("updateemail", newValue);
      return state.email;
    },
    updatepassword: ({commit, state }, newValue) => {
      commit("updatepassword" , newValue);
      return state.password;
    },
  },
=======

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
>>>>>>> 935883af1e01fca66abec8261d7e76b978700b5e
  modules: {},
});
