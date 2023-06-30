import {
  itemRequest,
  itemSuccess,
  itemFailure,
  getOneItemSuccess,
  topSellingItemsSuccess,
  addItemSuccess,
  updateItemSuccess,
  getFilterData,
  updatePage,
  addPrviewImage,
  updatePrviewImage,
  addReviewSuccess,
  updateReviewSuccess,
  deleteReviewSuccess,
} from "../features/itemSlicer";
import axios from "axios";

const urlFatch = (dispatch, payload) => {
  try {
    let url = `${process.env.REACT_APP_URL_KEY}/items/${payload.price}?page=${payload.page}&limit=12`;
    if (payload.category && payload.gender) {
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
      dispatch(topSellingItemsSuccess(res.data));
    });
  } catch (error) {
    dispatch(itemFailure(error));
  }
};

export const validateItemImages = (dispatch, payload, isAdd, toast) => {
  let image = [];
  const files = Array.from(payload.target.files);

  if (files.length > 6) {
    return toast({
      title: "Error Uploading Images",
      description: "You can only upload 6 images",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  } else {
    for (let i = 0; i < files.length; i++) {
      if (files[i].size > 1048576) {
        return toast({
          title: "Error Uploading Images",
          description: "One of the images is larger than 1mb",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      } else if (!files[i].type.match(/image.*/)) {
        return toast({
          title: "Error Uploading Images",
          description: "One of the files is not an image",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      } else {
        image.push(files[i]);
      }
    }
  }
  isAdd ? dispatch(addPrviewImage(image)) : dispatch(updatePrviewImage(image));
};

export const addItem = (dispatch, payload, toast) => {
  const uploadImages = () => {
    const promises = payload.data?.image?.map((image) => {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "kdwjzh9s");

      return axios
        .post(
          "https://api.cloudinary.com/v1_1/dutml7fij/image/upload",
          formData
        )
        .then((res) => {
          return res.data.secure_url;
        })
        .catch((err) => {
          toast({
            title: "Error Uploading Images",
            description: "Something went wrong",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          throw err;
        });
    });

    return Promise.all(promises);
  };

  dispatch(itemRequest());

  uploadImages()
    .then((images) => {
      const item = {
        ...payload.data,
        image: images,
      };
      console.log(item);
      console.log(payload.token);
      axios
        .post(`${process.env.REACT_APP_URL_KEY}/item`, item, {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        })
        .then((res) => {
          dispatch(addItemSuccess(res.data));
          toast({
            title: "Item Added",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        })
        .catch((err) => {
          toast({
            title: "Error",
            description: `${err.response.data}`,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          throw err;
        });
    })
    .catch((error) => {
      dispatch(itemFailure(error));
    });
};

export const updateItem = (dispatch, payload, toast) => {
  try {
    dispatch(itemRequest());
    const uploadImages = () => {
      if (typeof payload.data.image[0] === "string") {
        const promises = payload.data?.image || [];
        return Promise.resolve(promises);
      }
      const promises = payload.data?.image?.map((image) => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "kdwjzh9s");

        return axios
          .post(
            "https://api.cloudinary.com/v1_1/dutml7fij/image/upload",
            formData
          )
          .then((res) => {
            return res.data.secure_url;
          })
          .catch((err) => {
            toast({
              title: "Error Uploading Images",
              description: "Something went wrong",
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "top",
            });
            throw err;
          });
      });

      return Promise.all(promises);
    };

    uploadImages().then((images) => {
      const item = {
        ...payload.data,
        image: images,
      };
      axios
        .put(`${process.env.REACT_APP_URL_KEY}/item/${payload.id}`, item, {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        })
        .then((res) => {
          dispatch(updateItemSuccess(res.data));
          toast({
            title: "Item Updated",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        })
        .catch((err) => {
          dispatch(itemFailure(err));
          toast({
            title: "Error",
            description: `${err.response.data}`,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        });
    });
  } catch (error) {
    dispatch(itemFailure(error));
    toast({
      title: "Error",
      description: "Something went wrong",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  }
};

// action for review section
export const addReview = (dispatch, payload, toast) => {
  payload.e?.preventDefault();
  try {
    if (!payload.tolen) {
      return toast({
        title: "Error",
        description: "Please login to add review",
        status: "error",
        position: "top-right",
        isClosable: true,
      });
    }
    dispatch(itemRequest());
    const reviewMessage = payload.e.target?.review?.value;
    const review = {
      ...payload?.data,
      reviewMessage,
    };
    axios
      .post(`${process.env.REACT_APP_URL_KEY}/review`, review, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      })
      .then((res) => {
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

export const deleteReview = (dispatch, payload, toast) => {
  dispatch(itemRequest());
  try {
    axios
      .delete(`${process.env.REACT_APP_URL_KEY}/review/${payload.id}`, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      })
      .then((res) => {
        dispatch(deleteReviewSuccess(payload.id));
        toast({
          title: "Review Deleted",
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

export const updateReview = (dispatch, payload, toast) => {
  try {
    dispatch(itemRequest());
    console.log(payload);
    axios
      .put(
        `${process.env.REACT_APP_URL_KEY}/review/${payload.id}`,
        payload.data,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(updateReviewSuccess(res.data));
        console.log(res);
        toast({
          title: "Review Updated",
          status: "success",
          position: "top-right",
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
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
