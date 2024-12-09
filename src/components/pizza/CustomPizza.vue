<template>
  <div class="mt-5">
    <div class="h1" style="color: rgb(255, 94, 36)">Custom Pizza</div>
    <div class="my-4">
      <div class="h4 mb-4">Size</div>
      <div class="d-flex gap-4">
        <div
          style="font-size: 20px"
          v-for="(size, index) in sizes"
          :key="index"
        >
          <input
            type="radio"
            name="size"
            :value="size"
            @change="selectSize(size)"
          />{{ size.name }}
        </div>
      </div>
    </div>
    <div>
      <div class="h4 mb-4">Toppings</div>
      <div class="d-flex flex-wrap justify-content-center" style="gap: 14px">
        <button
          class="btn rounded-pill topping"
          v-for="(topping, index) in toppings"
          :key="index"
          @click="selectTopping(topping)"
          :disabled="isToppingAvailable(topping.id)"
          style="width: 150px"
        >
          {{ topping.name }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  toppings: Array,
  sizes: Array,
  selectedPizza: Object,
  selectedSize: Object,
  selectedToppings: Array,
  availableToppings: Array,
});

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const emit = defineEmits(["select-size", "select-topping"]);

const selectSize = (size) => {
  emit("select-size", size);
};

const selectTopping = (topping) => {
  emit("select-topping", topping);
};

const isToppingAvailable = (id) => {
  return (
    Array.isArray(props.availableToppings) &&
    props.availableToppings?.includes(id)
  );
};

// const isToppingAvailable = (topping) => {
//   return (
//     Array.isArray(availableTopping.value) &&
//     availableTopping.value.some((available) => available.id === topping.id)
//   );
// };

// const isToppingAvailable = (topping) => {
//   console.log('Selected pizza toppings:', props.selectedPizza?.toppings);
//   if (props.selectedPizza && props.selectedPizza.toppings) {
//     return props.selectedPizza.toppings.includes(topping.id);
//   }
//   return false;
// };
</script>

<style scoped>
.btn {
  border: 1px black solid;
}

.btn:hover {
  border: 1px solid rgb(255, 94, 36);
  color: rgb(255, 94, 36);
}

.topping:disabled {
  border: none;
  background-color: rgb(208, 207, 207) !important;
}
</style>
