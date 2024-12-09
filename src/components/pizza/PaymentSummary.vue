<template>
  <div
    class="col-3 bg-white card p-4"
    style="
      height: fit-content;
      box-shadow: 4px 3px 7px lightgray;
      border-radius: 20px;
    "
  >
    <div class="h4" style="color: rgb(255, 94, 36)">Payment Summary</div>
    <div>
      <div class="d-flex justify-content-between" v-if="!pizza && !size">
        Please Choose Your Order
      </div>
      <div class="d-flex justify-content-between" v-if="pizza" :key="pizza.id">
        <p>{{ pizza.name }}</p>
        <p>$ {{ pizza.discount.final_price }}</p>
      </div>
      <div class="d-flex justify-content-between" v-if="size" :key="size.id">
        <p>{{ size.name }}</p>
        <p>+$ {{ size.extra_price }}</p>
      </div>
      <div
        class="d-flex justify-content-between"
        v-for="toppings in topping"
        :key="topping.id"
      >
        <p>{{ toppings.name }}</p>
        <p>+$ {{ toppings.price }}</p>
      </div>
    </div>
    <hr />
    <div>
      <div class="d-flex justify-content-between">
        <div class="h4">Total Price</div>
        <div class="h4" style="color: rgb(255, 94, 36)" v-if="finalPrice">
          $ {{ finalPrice }}
        </div>
        <div class="h4" style="color: rgb(255, 94, 36)" v-if="!finalPrice">
          $ 0.00
        </div>
      </div>
      <div>
        <button
          class="btn w-100 text-white order-button"
          style="background-color: rgb(255, 94, 36)"
          :disabled="!pizza || !size"
          @click="clear"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Order Now
        </button>
      </div>
    </div>
  </div>

  <div class="checkout-section">
    <div
      class="modal fade align-content-center justify-content-center"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <img
             src="../../assets/images/receipt.png" alt="Receipt"
              style="
                color: rgb(255, 94, 36);
                width: 100px;
                border: 3px solid rgb(255, 94, 36);
                padding: 10px;
                border-radius: 40px;
                background-color: rgba(255, 94, 36, 0.3);
                margin-bottom: 10px;
              "
              class="fa-solid fa-receipt"
            >
            <div class="modal-order-succes">Order Success</div>
            <div>Thank you, we have received your order successfully.</div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary modal-button"
              data-bs-dismiss="modal"
              @click="close"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const pizza = computed(() => store.state.transaction.selectedPizza);
const size = computed(() => store.state.transaction.selectedSize);
const topping = computed(() => store.state.transaction.selectedToppings);
const finalPrice = computed(() => store.getters["transaction/totalPrice"]);

const clear = () => {
  store.dispatch("transaction/clearSummary");
  console.log(pizza);
};
</script>

<style scoped>
.modal-body {
  text-align: center;
}
.modal-order-succes {
  font-size: 20px;
  font-weight: bold;
}
.modal-button {
  background-color: rgb(255, 94, 36);
  color: white;
  border: none;
}

.modal-dialog {
  width: 300px;
}
</style>
