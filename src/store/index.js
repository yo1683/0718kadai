import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    favoriteImage: [],
  },
  getters: {
    favoriteCount: (state) => {
      return state.favoriteImage.length;
    },
    favoriteCheck: (state) => {
      return state.favoriteImage.some((image) => {
        return image === state.data;
      });
    },
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    addToFavorites(state) {
      state.favoriteImage.push(state.data);
    },
  },
  actions: {
    async fetchData({ commit }) {
      const response = await axios.get("https://randomfox.ca/floof/");
      commit("setData", response.data.image);
    },
  },
});
