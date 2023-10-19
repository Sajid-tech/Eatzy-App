import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice"
import SearchSlice from "./slices/SearchSlice"
const Store = configureStore({
    reducers: {
        cart: CartSlice,
        category: CategorySlice,
        search: SearchSlice,
    },
});
export default Store;