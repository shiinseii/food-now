export default {
  namespaced: true,
  state() {
    return {
      selectedPizza: null,
      selectedSize: null,
      selectedToppings: [],
      availableToppings: [],
    };
  },

  getters: {
    totalPrice(state) {
      let total = 0;

      if (state.selectedPizza) {
        total += state.selectedPizza.discount.final_price;
      }
      if (state.selectedSize) {
        total += state.selectedSize.extra_price;
      }
      state.selectedToppings.forEach((topping) => {
        total += topping.price;
      });

      return total;
    },
  },

  mutations: {
    setPizza(state, pizza) {
      state.selectedPizza = pizza;
      console.log("Ini data di Js", state);
    },

    setSize(state, size) {
      console.log("Ini data di Js", state);
      state.selectedSize = size;
    },

    setTopping(state, topping) {
      console.log("Ini di js", state);
      state.selectedToppings = topping;
    },

    setAvailableTopping(state, available) {
      console.log("ini data topping tersedia di js", state);
      state.availableToppings = available || [];
    },

    clear(state) {
      state.selectedPizza = null;
      state.selectedSize = null;
      state.selectedToppings = [];
      console.log("Sesudah ", state);
    },
  },

  actions: {
    getPizza({ commit }, pizza) {
      commit("setPizza", pizza);
    },

    getSize({ commit }, size) {
      commit("setSize", size);
    },

    getTopping({ commit }, topping) {
      commit("setTopping", topping);
    },

    getAvailableTopping({ commit }, available) {
      commit("setAvailableTopping", available);
    },

    clearSummary({ commit }) {
      commit("clear");
    },
  },
};
