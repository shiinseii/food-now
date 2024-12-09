export default {
  namespaced: true,
  state() {
    return {
      pizzas: [],
      sizes: [],
      toppings: [],
    };
  },

  getters: {
    allPizzas(state) {
      return state.pizzas;
    },
  },
  mutations: {
    setPizzaData(state, payload) {
      state.pizzas = payload;
    },

    setSizeData(state, payload) {
      state.sizes = payload;
    },

    setToppingData(state, payload) {
      state.toppings = payload;
    }
  },

  actions: {
    async getAllPizzas({ commit }) {
      try {
        const response = await fetch("/pizza-list.json");
        if (!response.ok) throw new Error("failed to fetch pizza");
        const responseData = await response.json();
        commit("setPizzaData", responseData.data);
      } catch (err) {
        console.log(err);
      }
    },

    async getAllSizes({ commit }) {
      try {
        const response = await fetch("/size-list.json");

        const { data } = await response.json(); 
    
        commit("setSizeData", data);
        return data;

      } catch (err) {
        console.log(err);
      }
    },

    async getAllToppings({ commit }) {
      try {
        const response = await fetch("/topping-list.json");

        const { data } = await response.json();

        commit("setToppingData", data);
        return data;

      } catch (err) {
        console.log(err);
      }
    }
    
  },
};
