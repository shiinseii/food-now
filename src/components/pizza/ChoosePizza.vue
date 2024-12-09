<template>
  <div class="mb-5">
    <div class="h1" style="color: rgb(255, 94, 36)">Choose Your Pizza</div>
    <div class="d-flex flex-row justify-content-between">
      <div
        class="card d-flex flex-row align-items-center p-3 shadow-sm pizza-card"
        v-for="(pizza, index) in pizzas"
        :key="index"
        :class="{ 'active-card': selectedPizza === pizza }"
        @click="selectPizza(pizza)"
        style="width: 315px"
      >
        <img
          :src="pizza.img"
          alt="Cheese Pizza"
          class="pizza-img"
          style="width: 120px"
        />
        <div class="ms-4">
          <p style="font-size: 20px; margin-bottom: 0px">{{ pizza.name }}</p>
          <p v-if="pizza.discount.is_active">
            <span
              class="text-secondary text-decoration-line-through"
              style="text-decoration-thickness: 1px"
              >${{ pizza.price }}.00</span
            >
            ${{ pizza.discount.final_price }}
          </p>
          <p v-else>${{ pizza.price }}</p>
        </div>

        <img
          v-if="pizza.discount.is_active"
          src="../../assets/images/ribbon.svg"
          alt="Discount Ribbon"
          class="ribbon"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  pizzas: Array,
});

const selectedPizza = ref(null);
const availableTopping = ref([]);

const selectPizza = (pizza) => {
  selectedPizza.value = pizza;
  availableTopping.value = pizza.toppings;

  store.dispatch("transaction/getPizza", pizza);
  store.dispatch("transaction/getAvailableTopping", availableTopping.value)

  availability(availableTopping.value);
};

const availability = (toppings) => {
  console.log("Available Toppings: ", toppings);
}
</script>

<style scoped>
.pizza-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
}

.ribbon {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
}

.pizza-img {
  transition: transform 0.2s linear;
  transform-origin: center;
}

.pizza-card:hover:not(.active-card) {
  background-color: rgb(252, 217, 204);
  border: none;
}

.pizza-card:hover .pizza-img {
  transform: rotate(20deg);
}

.active-card {
  background-color: rgb(231, 126, 35);
  color: white !important;
}
</style>
