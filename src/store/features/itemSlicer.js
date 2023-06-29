import { createSlice } from "@reduxjs/toolkit";
import { startTransition } from "react";

const initialState = {
  items: [],
  item: null,
  isLoading: false,
  error: null,
  itemError: null,
  topSellingItems: [],
  previewImage: "",
  updatePreviewImage: "",
  Page: 1,
  filterData: {
    category: "",
    gender: "",
    price: 1000,
  },
};

const itemSlicer = createSlice({
  name: "item",
  initialState,
  reducers: {
    itemRequest(state) {
      state.isLoading = true;
    },
    itemSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    itemFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getFilterData(state, action) {
      state.filterData = action.payload;
    },
    getOneItemSuccess(state, action) {
      state.isLoading = false;
      state.item = action.payload;
      state.error = null;
    },
    topSellingItemsSuccess(state, action) {
      state.isLoading = false;
      state.topSellingItems = action.payload;
      state.error = null;
    },
    addItemSuccess(state, action) {
      state.isLoading = false;
      state.items = [action.payload, ...state.items];
      state.previewImage = "";
      state.error = null;
    },
    deleteItemSuccess(state, action) {
      state.isLoading = false;
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.error = null;
    },
    updateItemSuccess(state, action) {
      state.isLoading = false;
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.updatePreviewImage = "";
      state.error = null;
    },
    updatePage(state, action) {
      state.Page = action.payload;
    },
    addPrviewImage(state, action) {
      state.isLoading = false;
      state.previewImage = action.payload;
      state.error = null;
    },
    updatePrviewImage(state, action) {
      state.isLoading = false;
      state.updatePreviewImage = action.payload;
      state.error = null;
    },
    addReviewSuccess(state, action) {
      state.isLoading = false;
      state.item.Reviews = [action.payload, ...state.item.Reviews];
      state.error = null;
    },
    updateReviewSuccess(state, action) {
      state.isLoading = false;
      state.item.Reviews = state.item.Reviews.map((review) =>
        review.id === action.payload.id ? action.payload : review
      );
      state.error = null;
    },
    deleteReviewSuccess(state, action) {
      state.isLoading = false;
      state.item.Reviews = state.item.Reviews.filter(
        (review) => review.id !== action.payload
      );
      state.error = null;
    },
  },
});

export const {
  itemRequest,
  itemSuccess,
  itemFailure,
  getFilterData,
  getOneItemSuccess,
  topSellingItemsSuccess,
  addItemSuccess,
  deleteItemSuccess,
  updateItemSuccess,
  updatePage,
  addPrviewImage,
  updatePrviewImage,
  addReviewSuccess,
  updateReviewSuccess,
  deleteReviewSuccess,
} = itemSlicer.actions;

export const selectItems = (state) => state.item.items;
export const selectTopSellingItems = (state) => state.item.topSellingItems;
export const selectOneItem = (state) => state.item.item;
export const selectItemError = (state) => state.item.itemError;
export const selectIsLoading = (state) => state.item.isLoading;
export const selectError = (state) => state.item.error;
export const selectPage = (state) => state.item.Page;
export const selectPreviewImage = (state) => state.item.previewImage;
export const selectUpdatePreviewImage = (state) =>
  state.item.updatePreviewImage;
export const selectFilterData = (state) => state.item.filterData;

export default itemSlicer.reducer;
