import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
  isLoading: false,
  error: null,
};

const wishListSlicer = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    wishListRequest(state) {
      state.isLoading = true;
    },
    wishListSuccess(state, action) {
      state.isLoading = false;
      state.wishList = action.payload;
      state.error = null;
    },
    wishListAddSuccess(state, action) {
      state.isLoading = false;
      state.wishList = [action.payload, ...state.wishList];
      state.error = null;
    },
    wishListDeleteSuccess(state, action) {
      state.isLoading = false;
      state.wishList = state.wishList.filter((e) => e.id !== action.payload);
    },
    wishListFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  wishListRequest,
  wishListSuccess,
  wishListAddSuccess,
  wishListDeleteSuccess,
  wishListFailure,
} = wishListSlicer.actions;

export const selectWishList = (state) => state.wishList.wishList;
export const selectWishListLoading = (state) => state.wishList.isLoading;
export const selectWishListError = (state) => state.wishList.error;

export default wishListSlicer.reducer;
