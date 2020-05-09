import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const API_URI = process.env.API_URI || 'http://localhost:5000';

export default new Vuex.Store({
  state: {
    storeItemsMen: [],
    storeItemsWomen: [],
    activeStoreItem: false,
    activeSections: []
  },
  getters: {
    // Get store items of specified section
    getStoreItems: state => section => {
      const sectionPascal = section[0].toUpperCase() + section.slice(1);

      if (state[`storeItems${sectionPascal}`]) {
        return state[`storeItems${sectionPascal}`];
      } else {
        return [];
      }
    },
    getActiveStoreItem(state) {
      return state.activeStoreItem;
    },
    getActiveSections(state) {
      return state.activeSections;
    }
  },
  actions: {
    async fetchStoreItems({ commit }, { collection, limit, page }) {
      const response = await fetch(
        `${API_URI}/${collection}?_page=${page}&_limit=${limit}`
      );
      const data = await response.json();

      commit("ADD_ITEMS_TO_STORE", {
        collection: collection.toLowerCase(),
        data
      });
    },
    setActiveStoreItem({ commit }, item) {
      commit("SET_ACTIVE_STORE_ITEM", item);
    },
    toggleActiveSection({ commit }, title) {
      commit('TOGGLE_ACTIVE_SECTION', title);
    }
  },
  mutations: {
    ADD_ITEMS_TO_STORE(state, { collection, data }) {
      state[
        `storeItems${collection[0].toUpperCase() + collection.slice(1)}`
      ] = data;
    },
    SET_ACTIVE_STORE_ITEM(state, payload) {
      state.activeStoreItem = payload;
    },
    TOGGLE_ACTIVE_SECTION(state, title) {
      if (state.activeSections.includes(title)) {
        state.activeSections.splice(state.activeSections.indexOf(title), 1);
      } else {
        state.activeSections.push(title);
      }
    }
  }
});
