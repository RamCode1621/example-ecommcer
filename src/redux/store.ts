import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productDetailsSlice from "./slices/productDetailsSlice";

export default configureStore({
  reducer: {
    shoppingCart: cartSlice,
    modal: productDetailsSlice,
  },
});
