import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carts: [],
  },
  getters: {
    cartSize(state) {
      return state.carts.length;
    },
  },
  mutations: {
    addToCart(state, productId) {
      state.carts.push(productId);
    },
    clearCart(state) {
      state.carts = [];
    },
  },
  actions: {},
  modules: {},
});
