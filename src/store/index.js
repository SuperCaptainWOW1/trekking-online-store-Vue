import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storeItemsMen: [],
    storeItemsWomen: [],
    activeStoreItem: false
  },
  getters: {
    // Get store items of specified section
    getStoreItems: state => section => {
      const sectionPascal = section[0].toUpperCase() + section.slice(1);

      if (state[`storeItems${sectionPascal}`]) {
        return state[`storeItems${sectionPascal}`];
      } else {
        console.warn("The specified section name doesn't exist in database");
        return [];
      }
    },
    getActiveStoreItem(state) {
      return state.activeStoreItem;
    }
  },
  actions: {
    async fetchStoreItems({ commit }, { collection, limit }) {
      const response = await fetch(
        `http://localhost:3000/${collection}${
          limit !== undefined ? "?_limit=" + limit : ""
        }`
      );
      const data = await response.json();

      commit("ADD_ITEMS_TO_STORE", {
        collection: collection.toLowerCase(),
        data
      });
    },
    setActiveStoreItem({ commit }, item) {
      commit("SET_ACTIVE_STORE_ITEM", item);
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
    }
  }
});
