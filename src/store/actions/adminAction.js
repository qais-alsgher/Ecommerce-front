import {
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
} from "../features/adminSlicer";
import axios from "axios";

export const getUserStatistics = (dispatch, payload) => {
  dispatch(adminRequest());
  try {
    dispatch(adminRequest());

    axios
      .get(`${process.env.REACT_APP_URL_KEY}/admin/userStatistics`, {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      })
      .then((res) => {
        let labelsLine = [];
        let dataLine = [];
        res.data?.usersPerDay.forEach((item) => {
          dataLine.push(item.count);
          labelsLine.push(item.day.slice(5, 10));
        });
        const labelsPolar = [
          "Total Users",
          "Active Users",
          "Blocked Users",
          "Confirmed Users",
          "Not Confirmed Users",
        ];
        const dataPolar = [
          res.data?.usersCount,
          res.data?.usersActiveCount,
          res.data?.usersBlockedCount,
          res.data?.usersConfirmedCount,
          res.data?.usersNotConfirmedCount,
        ];

        const data = {
          labelsPolar,
          dataPolar,
          labelsLine,
          dataLine,
          tileLabel: "Users",
        };

        dispatch(adminSuccess(data));
      })
      .catch((err) => {
        dispatch(adminFailure(err.message));
      });
  } catch (error) {
    dispatch(adminFailure(error.message));
  }
};

export const getProductsStatistics = (dispatch, payload) => {
  dispatch(adminRequest());
  try {
    axios
      .get(`${process.env.REACT_APP_URL_KEY}/admin/itemStatistics`, {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      })
      .then((res) => {
        let labelsLine = [];
        let dataLine = [];
        res.data?.itemsPerDay.forEach((item) => {
          dataLine.push(item.count);
          labelsLine.push(item.day.slice(5, 10));
        });
        const labelsPolar = ["Total Products"];
        const dataPolar = [res.data?.itemsCount];

        const data = {
          labelsPolar,
          dataPolar,
          labelsLine,
          dataLine,
          tileLabel: "Products",
        };

        dispatch(adminSuccess(data));
      })
      .catch((err) => {
        dispatch(adminFailure(err.message));
      });
  } catch (error) {
    dispatch(adminFailure(error.message));
  }
};

export const getSalesStatistics = (dispatch, payload) => {
  dispatch(adminRequest());
  try {
    axios
      .get(`${process.env.REACT_APP_URL_KEY}/admin/salesStatistics`, {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      })
      .then((res) => {
        let labelsLine = [];
        let dataLine = [];
        res.data?.salesPerDay.forEach((item) => {
          dataLine.push(item.count);
          labelsLine.push(item.day.slice(5, 10));
        });
        const labelsPolar = ["Total Products", "Total Sales"];
        const dataPolar = [res.data?.itemsCount, res.data?.salesCount];

        const data = {
          labelsPolar,
          dataPolar,
          labelsLine,
          dataLine,
          tileLabel: "Sales",
        };

        dispatch(adminSuccess(data));
      })
      .catch((err) => {
        dispatch(adminFailure(err.message));
      });
  } catch (error) {
    dispatch(adminFailure(error.message));
  }
};

export const getNumbersStatistics = (dispatch, payload) => {
  dispatch(adminRequest());
  try {
    axios
      .get(`${process.env.REACT_APP_URL_KEY}/admin/numbersStatistics`, {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      })
      .then((res) => {
        dispatch(numberStatisticsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(adminFailure(err.message));
      });
  } catch (error) {
    dispatch(adminFailure(error.message));
  }
};

export const getAllUsers = (dispatch, payload) => {
  dispatch(adminRequest());
  try {
    axios
      .get(`${process.env.REACT_APP_URL_KEY}/users`, {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      })
      .then((res) => {
        dispatch(getAllUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(adminFailure(err.message));
      });
  } catch (error) {
    dispatch(adminFailure(error.message));
  }
};

export const getActiveUser = (dispatch, payload) => {
  try {
    axios
      .put(`${process.env.REACT_APP_URL_KEY}/usersActive`, {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      })
      .then((res) => {
        dispatch(getUsersActiveSuccess(res.data));
      })
      .catch((err) => {
        dispatch(adminFailure(err.message));
      });
  } catch (error) {
    dispatch(adminFailure(error.message));
  }
};

export const getBlockUser = (dispatch, payload) => {
  dispatch(adminRequest());
  try {
    axios
      .get(`${process.env.REACT_APP_URL_KEY}/usersBlocked`, {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      })
      .then((res) => {
        dispatch(getBlockedUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(adminFailure(err.message));
      });
  } catch (error) {
    dispatch(adminFailure(error.message));
  }
};

export const activeUser = (dispatch, payload, toast) => {
  dispatch(adminRequest());
  try {
    axios
      .put(
        `${process.env.REACT_APP_URL_KEY}/activeUser/${payload.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(activeUserSuccess(payload.id));
        toast({
          title: "Success.",
          description: "User is active now.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        dispatch(adminFailure(err.message));
        toast({
          title: "Error.",
          description: `${err.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
  } catch (err) {
    dispatch(adminFailure(err.message));
    toast({
      title: "Error.",
      description: `${err.message}`,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  }
};

export const blockUser = (dispatch, payload, toast) => {
  dispatch(adminRequest());
  try {
    axios
      .put(
        `${process.env.REACT_APP_URL_KEY}/blockedUser/${payload.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(blockUserSuccess(payload.id));
        toast({
          title: "Success.",
          description: "User is blocked now.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        dispatch(adminFailure(err.message));
        toast({
          title: "Error.",
          description: `${err.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
  } catch (err) {
    dispatch(adminFailure(err.message));
    toast({
      title: "Error.",
      description: `${err.message}`,
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  }
};

export const getAllOrders = (dispatch, payload) => {
  dispatch(adminRequest());
  try {
    axios
      .get(`${process.env.REACT_APP_URL_KEY}/orders`, {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      })
      .then((res) => {
        dispatch(getAllOrdersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(adminFailure(err.message));
      });
  } catch (err) {
    dispatch(adminFailure(err.message));
  }
};

export const getAllItems = (dispatch, payload) => {
  dispatch(adminRequest());
  try {
    axios
      .get(`${process.env.REACT_APP_URL_KEY}/allItems`, {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      })
      .then((res) => {
        dispatch(getAllItemsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(adminFailure(err.message));
      });
  } catch (err) {
    dispatch(adminFailure(err.message));
  }
};

export const deleteItem = (dispatch, payload, toast) => {
  dispatch(adminRequest());
  try {
    axios
      .delete(`${process.env.REACT_APP_URL_KEY}/item/${payload.id}`, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      })
      .then((res) => {
        dispatch(deleteItemSuccess(payload.id));
        toast({
          title: "Success.",
          description: "Item deleted successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        dispatch(adminFailure(err.message));
        toast({
          title: "Error.",
          description: `${err.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
  } catch (err) {
    dispatch(adminFailure(err.message));
    toast({
      title: "Error.",
      description: `${err.message}`,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  }
};

// ACTION FOR REPORT USER

export const createReport = (dispatch, payload, toast) => {
  dispatch(adminRequest());
  try {
    axios
      .post(`${process.env.REACT_APP_URL_KEY}/report`, payload.data, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      })
      .then((res) => {
        // dispatch(createReportSuccess(res.data));
        console.log(res.data);
        toast({
          title: "Success.",
          description: "The User is reported successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        dispatch(adminFailure(err.message));
        toast({
          title: "Error.",
          description: `${err.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
  } catch (err) {
    dispatch(adminFailure(err.message));
    toast({
      title: "Error.",
      description: `${err.message}`,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  }
};
