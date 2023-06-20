import {
  itemRequest,
  itemSuccess,
  itemFailure,
  getOneItemSuccess,
  topSellingItemsSuccess,
  addItemSuccess,
  deleteItemSuccess,
  updateItemSuccess,
  getFilterData,
  updatePage,
  addReviewSuccess,
} from "../features/itemSlicer";
import axios from "axios";

const urlFatch = (dispatch, payload) => {
  try {
    let url = `${process.env.REACT_APP_URL_KEY}/items/${payload.price}?page=${payload.page}&limit=12`;
    if (payload.category && payload.gender) {
      // http://localhost:8181/items/Pants/Female/200?page=1&limit=15
      url = `${process.env.REACT_APP_URL_KEY}/items/${payload.category}/${payload.gender}/${payload.price}?page=${payload.page}&limit=12`;
    } else if (payload.category) {
      url = `${process.env.REACT_APP_URL_KEY}/items/${payload.category}/${payload.price}?page=${payload.page}&limit=12`;
    } else if (payload.gender) {
      url = `${process.env.REACT_APP_URL_KEY}/items/${payload.gender}/${payload.price}?page=${payload.page}&limit=12`;
    }
    return url;
  } catch (error) {
    dispatch(itemFailure(error));
  }
};

export const getItems = (dispatch, payload) => {
  payload.e?.preventDefault();
  dispatch(itemRequest());
  try {
    let url = urlFatch(dispatch, payload);
    axios.get(url).then((res) => {
      dispatch(itemSuccess(res.data));
      dispatch(getFilterData(payload));
      dispatch(updatePage(payload.page));
    });
  } catch (error) {
    dispatch(itemFailure(error));
  }
};

export const getItemById = (dispatch, payload) => {
  dispatch(itemRequest());
  try {
    axios
      .get(`${process.env.REACT_APP_URL_KEY}/item/${payload}`)
      .then((res) => {
        console.log(res.data);
        dispatch(getOneItemSuccess(res.data));
      });
  } catch (error) {
    dispatch(itemFailure(error));
  }
};

export const getTopSellingItems = (dispatch) => {
  dispatch(itemRequest());
  try {
    axios.get(`${process.env.REACT_APP_URL_KEY}/topSeller`).then((res) => {
      console.log(res.data);
      dispatch(topSellingItemsSuccess(res.data));
    });
  } catch (error) {
    dispatch(itemFailure(error));
  }
};

export const addReview = (dispatch, payload, toast) => {
  payload.e?.preventDefault();
  dispatch(itemRequest());
  try {
    const reviewMessage = payload.e.target?.review?.value;
    const review = {
      ...payload?.data,
      reviewMessage,
    };

    axios
      .post(`${process.env.REACT_APP_URL_KEY}/review`, review)
      .then((res) => {
        console.log(res.data);
        dispatch(addReviewSuccess(res.data));
        toast({
          title: "Review Added",
          status: "success",
          position: "top-right",
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: `${err.response.data}`,
          status: "error",
          position: "top-right",
          isClosable: true,
        });
      });
  } catch (error) {
    dispatch(itemFailure(error));
    toast({
      title: "Error",
      description: "Something went wrong",
      status: "error",
      position: "top-right",
      isClosable: true,
    });
  }
};
