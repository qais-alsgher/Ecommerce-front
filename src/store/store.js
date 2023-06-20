import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlicer";
import itemReducer from "./features/itemSlicer";
import cartReducer from "./features/cartSlicer";
import wishListReducer from "./features/wishListSlicer";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    item: itemReducer,
    cart: cartReducer,
    wishList: wishListReducer,
  },
});
