import {
  wishListRequest,
  wishListSuccess,
  wishListAddSuccess,
  wishListDeleteSuccess,
  wishListFailure,
} from "../features/wishListSlicer";
import axios from "axios";

export const getWishList = (dispatch, payload) => {
  dispatch(wishListRequest());
  try {
    axios
      .get(`${process.env.REACT_APP_URL_KEY}/wishlist/${payload.id}`, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      })
      .then((res) => {
        dispatch(wishListSuccess(res.data));
      });
  } catch (error) {
    dispatch(wishListFailure(error));
  }
};

export const addToWishList = (dispatch, payload, token, toast) => {
  dispatch(wishListRequest());
  try {
    axios
      .post(`${process.env.REACT_APP_URL_KEY}/wishlist`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(wishListAddSuccess(res.data));
        toast({
          title: "Added to WishList",
          status: "success",
          position: "top-right",
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "Already in WishList",
          status: "error",
          position: "top-right",
          isClosable: true,
        });
      });
  } catch (error) {
    dispatch(wishListFailure(error));
    toast({
      title: "Error",
      description: "Something went wrong",
      status: "error",
      position: "top-right",
      isClosable: true,
    });
  }
};

export const deleteWishListItem = (dispatch, payload, toast) => {
  dispatch(wishListRequest());
  try {
    axios
      .delete(`${process.env.REACT_APP_URL_KEY}/wishlist/${payload.id}`, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      })
      .then((res) => {
        dispatch(wishListDeleteSuccess(payload.id));
        toast({
          title: "Deleted",
          status: "success",
          position: "top-right",
          isClosable: true,
        });
      });
  } catch (error) {
    dispatch(wishListFailure(error));
    toast({
      title: "Error",
      description: "Something went wrong",
      status: "error",
      position: "top-right",
      isClosable: true,
    });
  }
};
