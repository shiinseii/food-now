<template>
  <main>
    <div class="container">
      <div class="my-5 d-flex flex-direction-row justify-content-between">
        <div class="col-9 me-3">
          <choose-pizza
            :pizzas="pizzas"
            :selectedPizza="selectedPizza"
            @select-pizza="selectPizza"
          ></choose-pizza>
          <custom-pizza
            :toppings="toppings"
            :sizes="sizes"
            :selectedPizza="selectedPizza"
            :selectedSize="selectedSize"
            :availableToppings="availableToppings"
            @select-size="selectSize"
            @select-topping="selectTopping"
          ></custom-pizza>
        </div>
        <payment-summary
          :pizza="selectedPizza"
          :size="selectedSize"
          :toppings="selectedToppings"
        ></payment-summary>
      </div>
    </div>
  </main>
</template>

<script setup>
import ChoosePizza from "../pizza/ChoosePizza.vue";
import CustomPizza from "../pizza/CustomPizza.vue";
import PaymentSummary from "../pizza/PaymentSummary.vue";
import { useStore } from "vuex";
import { onMounted, computed, ref } from "vue";

const store = useStore();
const pizzas = computed(() => store.state.pizza.pizzas);
const sizes = computed(() => store.state.pizza.sizes);
const toppings = computed(() => store.state.pizza.toppings);

const selectedPizza = ref(null);
const selectedSize = ref(null);
const selectedToppings = ref([]);

const selectPizza = (id) => {
  selectedPizza.value = pizzas.value.find((pizza) => pizza.id === id);
  console.log(selectedPizza.value);
};

const selectSize = (size) => {
  selectedSize.value = size;
  store.dispatch("transaction/getSize", size);
};

const selectTopping = (topping) => {
  const toppingIndex = selectedToppings.value.indexOf(topping);
  if (toppingIndex === -1) {
    selectedToppings.value.push(topping);
  } else {
    selectedToppings.value.splice(toppingIndex, 1);
  }

  console.log(selectedToppings.value);
  store.dispatch("transaction/getTopping", selectedToppings.value);
};

const availableToppings = computed(
  () => store.state.transaction.availableToppings || []
);

onMounted(async () => {
  try {
    await store.dispatch("pizza/getAllPizzas");
    await store.dispatch("pizza/getAllSizes");
    await store.dispatch("pizza/getAllToppings");
  } catch (err) {
    console.log(err);
  }
});
</script>
