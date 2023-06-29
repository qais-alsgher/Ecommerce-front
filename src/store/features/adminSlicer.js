import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  labelsPolar: [],
  dataPolar: [],
  labelsLine: [],
  dataLine: [],
  numberStatistics: {},
  tileLabel: "",
  allUsers: [],
  activeUsers: [],
  blockedUsers: [],
  allOrders: [],
  allItems: [],
  error: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    adminRequest(state) {
      state.isLoading = true;
    },
    adminSuccess(state, action) {
      state.isLoading = false;
      state.labelsPolar = action.payload.labelsPolar;
      state.dataPolar = action.payload.dataPolar;
      state.labelsLine = action.payload.labelsLine;
      state.dataLine = action.payload.dataLine;
      state.tileLabel = action.payload.tileLabel;
      state.error = null;
    },
    numberStatisticsSuccess(state, action) {
      state.isLoading = false;
      state.numberStatistics = action.payload;
      state.error = null;
    },
    getAllUsersSuccess(state, action) {
      state.isLoading = false;
      state.allUsers = action.payload;
      state.error = null;
    },
    getUsersActiveSuccess(state, action) {
      state.isLoading = false;
      state.activeUsers = action.payload;
      state.error = null;
    },
    getBlockedUsersSuccess(state, action) {
      state.isLoading = false;
      state.blockedUsers = action.payload;
      state.error = null;
    },
    activeUserSuccess(state, action) {
      state.isLoading = false;
      state.blockedUsers = state.blockedUsers.filter(
        (user) => user.id !== action.payload
      );
      const allUsers = state.allUsers.filter(
        (user) => user.id !== action.payload
      );
      const user = state.allUsers.find((user) => user.id === action.payload);
      user.status = "Active";
      state.allUsers = [...allUsers, user];
      state.error = null;
    },
    blockUserSuccess(state, action) {
      state.isLoading = false;
      state.activeUsers = state.activeUsers.filter(
        (user) => user.id !== action.payload
      );
      // find the user and change the status
      const allUsers = state.allUsers.filter(
        (user) => user.id !== action.payload
      );
      const user = state.allUsers.find((user) => user.id === action.payload);
      user.status = "Blocked";
      state.allUsers = [...allUsers, user];
      state.error = null;
    },
    getAllOrdersSuccess(state, action) {
      state.isLoading = false;
      state.allOrders = action.payload;
      state.error = null;
    },
    getAllItemsSuccess(state, action) {
      state.isLoading = false;
      state.allItems = action.payload;
      state.error = null;
    },
    deleteItemSuccess(state, action) {
      state.isLoading = false;
      state.allItems = state.allItems.filter(
        (item) => item.id !== action.payload
      );
      state.error = null;
    },
    adminFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  adminRequest,
  adminSuccess,
  adminFailure,
  numberStatisticsSuccess,
  getAllUsersSuccess,
  getUsersActiveSuccess,
  getBlockedUsersSuccess,
  activeUserSuccess,
  blockUserSuccess,
  getAllOrdersSuccess,
  getAllItemsSuccess,
  deleteItemSuccess,
  createReportSuccess,
} = adminSlice.actions;

export const selectAdminLoading = (state) => state.admin.isLoading;
export const selectLabelsPolar = (state) => state.admin.labelsPolar;
export const selectDataPolar = (state) => state.admin.dataPolar;
export const selectLabelsLine = (state) => state.admin.labelsLine;
export const selectDataLine = (state) => state.admin.dataLine;
export const selectTileLabel = (state) => state.admin.tileLabel;
export const selectNumberStatistics = (state) => state.admin.numberStatistics;
export const selectAllUsers = (state) => state.admin.allUsers;
export const selectActiveUsers = (state) => state.admin.activeUsers;
export const selectBlockedUsers = (state) => state.admin.blockedUsers;
export const selectAllOrders = (state) => state.admin.allOrders;
export const selectAllItems = (state) => state.admin.allItems;
export const selectAdminError = (state) => state.admin.error;

export default adminSlice.reducer;
