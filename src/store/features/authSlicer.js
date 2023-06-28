import { createSlice } from "@reduxjs/toolkit";

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  user: userInfo,
  token: token,
  isAuthenticated: token ? true : false,
  isLoading: false,
  error: null,
  previewImage: userInfo?.image,
  step: 1,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    authFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.token = action.payload.token;
      state.error = null;
    },
    singupSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.step = 1;
      state.user = action.payload;
      state.token = action.payload.token;
      state.error = null;
    },
    editProfileSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.token = action.payload.token;
      state.error = null;
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
    setPreviewImage: (state, action) => {
      state.previewImage = action.payload;
    },
    nextStep: (state) => {
      state.step += 1;
      state.isLoading = false;
    },
  },
});

export const {
  authRequest,
  authFail,
  loginSuccess,
  singupSuccess,
  logoutSuccess,
  setPreviewImage,
  editProfileSuccess,
  nextStep,
} = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectError = (state) => state.auth.error;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectPreviewImage = (state) => state.auth.previewImage;
export const authSelector = (state) => state.auth;
export const selectStep = (state) => state.auth.step;

export default authSlice.reducer;
