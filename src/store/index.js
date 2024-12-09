import { createStore } from "vuex";
import pizza from "./pizza";
import transaction from "./transaction.js";

export const store = createStore({
    modules: {
        pizza,
        transaction,
    }
})