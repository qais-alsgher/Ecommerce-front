import axios from "axios";
import {
  cartRequest,
  cartFail,
  addToCartSuccess,
  getUserCartSuccess,
  getUserOrderSuccess,
  deleteCartItemSuccess,
  addQuintity,
} from "../features/cartSlicer";
import axois from "axios";

export const getCartItems = (dispatch, userId) => {
  dispatch(cartRequest());
  try {
    axois.get(`${process.env.REACT_APP_URL_KEY}/cart/${userId}`).then((res) => {
      dispatch(getUserCartSuccess(res.data));
    });
  } catch (error) {
    dispatch(cartFail(error.message));
  }
};

export const getOrders = (dispatch, userId) => {
  dispatch(cartRequest());
  try {
    axois
      .get(`${process.env.REACT_APP_URL_KEY}/cart/orders/${userId}`)
      .then((res) => {
        dispatch(getUserOrderSuccess(res.data));
      });
  } catch (error) {
    dispatch(cartFail(error.message));
  }
};

export const addToCart = (dispatch, payload, toast) => {
  dispatch(cartRequest());
  try {
    axois.post(`${process.env.REACT_APP_URL_KEY}/cart`, payload).then((res) => {
      dispatch(addToCartSuccess(res.data));
      toast({
        title: "Added to cart",
        status: "success",
        position: "top-right",
        isClosable: true,
      });
    });
  } catch (error) {
    dispatch(cartFail(error.message));
    toast({
      title: "Error",
      description: "Something went wrong",
      status: "error",
      position: "top-right",
      isClosable: true,
    });
  }
};

export const deleteCartItem = (dispatach, id, toast) => {
  dispatach(cartRequest());
  try {
    axois.delete(`${process.env.REACT_APP_URL_KEY}/cart/${id}`).then((res) => {
      dispatach(deleteCartItemSuccess(id));
      toast({
        title: "Deleted",
        status: "success",
        position: "top-right",
        isClosable: true,
      });
    });
  } catch (error) {
    dispatach(cartFail(error.message));
    toast({
      title: "Error",
      description: "Something went wrong",
      status: "error",
      position: "top-right",
      isClosable: true,
    });
  }
};

export const addQuintityToCart = (dispatch, payload) => {
  try {
    dispatch(addQuintity(payload));
  } catch (error) {
    dispatch(cartFail(error.message));
  }
};

export const checkoutCart = (dispatch, payload, toast) => {
  try {
    localStorage.setItem("quentity", JSON.stringify(payload.quintity));
    const lineItems = {
      carts: [],
    };
    payload.cartItems?.forEach((item) => {
      lineItems.carts.push({
        price: item.Item?.StripeId,
        quantity: payload.quintity[item.id]
          ? payload.quintity[item.id]
          : item.quantity,
      });
    });
    axios
      .post(`${process.env.REACT_APP_URL_KEY}/checkout`, lineItems)
      .then((res) => {
        return res.data.url;
      })
      .then((res) => {
        window.location.assign(res);
      });
  } catch (error) {
    dispatch(cartFail(error.message));
    toast({
      title: "Error",
      description: "Something went wrong",
      status: "error",
      position: "top-right",
      isClosable: true,
    });
  }
};

export const payedSuccess = (dispatch, payload) => {
  try {
    axios
      .get(`${process.env.REACT_APP_URL_KEY}/cart/${payload.userId}`)
      .then((res) => {
        res.data?.forEach((item) => {
          axios.put(`${process.env.REACT_APP_URL_KEY}/cart/${item.id}`, {
            status: "paid",
            quantity: payload.quintity[item.id] ? payload.quintity[item.id] : 1,
          });
        });
      });
    localStorage.removeItem("quentity");
  } catch (error) {
    dispatch(cartFail(error.message));
  }
};
