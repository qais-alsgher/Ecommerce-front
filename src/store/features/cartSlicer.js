import { createSlice } from "@reduxjs/toolkit";
const quentity = localStorage.getItem("quentity")
  ? JSON.parse(localStorage.getItem("quentity"))
  : {};

const initialState = {
  cartItems: [],
  order: [],
  quintity: quentity,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    cartFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addToCartSuccess: (state, action) => {
      state.isLoading = false;
      state.cartItems = state.cartItems.find((item) => {
        return (
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
        );
      })
        ? state.cartItems.map((item) => {
            if (
              item.id === action.payload.id &&
              item.color === action.payload.color &&
              item.size === action.payload.size
            ) {
              return {
                ...item,
                quantity: action.payload.quantity,
              };
            }
            return item;
          })
        : [...state.cartItems, action.payload];
      state.error = null;
    },
    getUserCartSuccess: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
      state.error = null;
    },
    getUserOrderSuccess: (state, action) => {
      state.isLoading = false;
      state.order = action.payload;
      state.error = null;
    },
    deleteCartItemSuccess: (state, action) => {
      state.isLoading = false;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.error = null;
    },
    addQuintity: (state, action) => {
      state.quintity[action.payload.id] = action.payload.value;
    },
  },
});

export const {
  cartRequest,
  cartFail,
  addToCartSuccess,
  getUserCartSuccess,
  getUserOrderSuccess,
  deleteCartItemSuccess,
  addQuintity,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectOrder = (state) => state.cart.order;
export const selectQuintity = (state) => state.cart.quintity;
export const selectCartLoading = (state) => state.cart.isLoading;
export const selectCartError = (state) => state.cart.error;

export default cartSlice.reducer;
