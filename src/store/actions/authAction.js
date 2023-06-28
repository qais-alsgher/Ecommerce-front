import {
  authRequest,
  authFail,
  loginSuccess,
  singupSuccess,
  logoutSuccess,
  editProfileSuccess,
  setPreviewImage,
  nextStep,
} from "../features/authSlicer";
import axios from "axios";
import base64 from "base-64";

let signupData = {
  image: null,
};

export const validateImage = (dispatch, e, toast) => {
  // validate image if it is png or jpeg and less than 1mb
  const image = e.target.files[0];

  if (image) {
    if (image.type === "image/png" || image.type === "image/jpeg") {
      if (image.size < 1000000) {
        signupData.image = image;
        dispatch(setPreviewImage(URL.createObjectURL(image)));
      } else {
        toast({
          title: "Image Size",
          description: "Image size must be less than 1MB",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Image Type",
        description: "Image type must be png or jpeg",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }
};

export const uploadImage = (dispatch) => {
  // upload image to cloudinary

  if (!signupData.image) return;
  const image = signupData.image;

  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "kdwjzh9s");
  axios
    .post("https://api.cloudinary.com/v1_1/dutml7fij/image/upload", formData)
    .then((res) => {
      signupData = {
        ...signupData,
        image: res.data.secure_url,
      };
    })
    .catch((err) => {
      dispatch(authFail(err));
    });
};

export const signup = (dispatch, payload, step, toast) => {
  payload.preventDefault();
  dispatch(authRequest());

  // switch case for each step of signup
  switch (step) {
    case 1:
      if (
        payload.target.password.value !== payload.target.confirmPassword.value
      ) {
        dispatch(authFail("password not match"));
      } else {
        signupData = {
          ...signupData,
          userName: payload.target.username.value,
          email: payload.target.email.value,
          password: payload.target.password.value,
        };

        dispatch(nextStep());
      }
      break;

    case 2:
      signupData = {
        ...signupData,
        phoneNumber: payload.target?.phoneNumber.value,
        mobileNumber: payload.target?.mobileNumber.value,
        gender: payload.target.gender.value,
        birthDate: payload.target.birthDate.value,
      };

      uploadImage(dispatch);
      dispatch(nextStep());
      break;
    case 3:
      const addressData = `${payload.target.country.value}/${payload.target.city.value}/ ${payload.target.street.value}/${payload.target.zipCode.value}`;
      signupData = {
        ...signupData,
        address: addressData,
      };

      axios
        .post(`${process.env.REACT_APP_URL_KEY}/signup`, signupData)
        .then((res) => {
          dispatch(singupSuccess(res.data));
          window.location.href = "/login";
          toast({
            title: "Signup Success",
            description:
              "You are successfully signed up ,Please Verify Email and Login",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        })
        .catch((err) => {
          dispatch(authFail(err));
          toast({
            title: "Signup Failed",
            description:
              `${err.response?.data}` ||
              "Please check your email and password and try again",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });

      break;

    default:
      break;
  }
};

export const login = (dispatch, payload, toast) => {
  payload.preventDefault();
  dispatch(authRequest());

  const data = {
    email: payload.target.email.value,
    password: payload.target.password.value,
  };

  const encodedData = base64.encode(`${data.email}:${data.password}`);

  try {
    if (payload.error) {
      dispatch(authFail(payload.error));
    } else {
      const config = {
        headers: {
          Authorization: `Basic ${encodedData}`,
        },
      };
      axios
        // take the url from .env file and add /login
        .post(`${process.env.REACT_APP_URL_KEY}/login`, {}, config)
        .then((res) => {
          dispatch(loginSuccess(res.data));
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          toast({
            title: "Login Success",
            description: "You are successfully logged in",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          window.location.href = "/";
        })
        .catch((err) => {
          dispatch(authFail(err));
          toast({
            title: "Login Failed",
            description:
              `${err.response?.data}` ||
              "Please check your email and password and try again",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    }
  } catch (error) {
    dispatch(authFail(error));
    toast({
      title: "Login Failed",
      description:
        `${error.response.data}` ||
        "Please check your email and password and try again",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};

export const logout = (dispatch) => {
  dispatch(authRequest());
  try {
    dispatch(logoutSuccess());
    window.location.href = "/";
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
  } catch (error) {
    dispatch(authFail(error));
  }
};

export const editUserProfileInfo = (dispatch, payload, userData, toast) => {
  payload.e?.preventDefault();
  dispatch(authRequest());
  try {
    if (signupData.image) {
      payload = {
        ...payload,
        image: signupData.image,
      };
    }
    axios
      .put(
        `${process.env.REACT_APP_URL_KEY}/userProfile/${userData.id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(editProfileSuccess(res.data));
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        toast({
          title: "Edit Profile Success",
          description: "You are successfully edited your profile",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        dispatch(authFail(err));
        toast({
          title: "Edit Profile Failed",
          description: `${err.response?.data}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  } catch (error) {
    dispatch(authFail(error));

    toast({
      title: "Edit Profile Failed",
      description: `${error.response?.data}`,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};

export const editUserAddress = (dispatch, payload, userData, toast) => {
  payload?.preventDefault();
  dispatch(authRequest());
  try {
    const addressData = `${
      payload.target.country.value
        ? payload.target.country.value
        : userData.address.split("/")[0]
    }/${
      payload.target.city.value
        ? payload.target.city.value
        : userData.address.split("/")[1]
    }/ ${
      payload.target.street.value
        ? payload.target.street.value
        : userData.address.split("/")[2]
    }/${
      payload.target.zipCode.value
        ? payload.target.zipCode.value
        : userData.address.split("/")[3]
    }`;
    axios
      .put(
        `${process.env.REACT_APP_URL_KEY}/userProfile/${userData.id}`,
        { address: addressData },
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(editProfileSuccess(res.data));
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        toast({
          title: "Edit Profile Success",
          description: "You are successfully edited your profile",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        dispatch(authFail(err));
        toast({
          title: "Edit Profile Failed",
          description: `${err.response?.data}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  } catch (error) {
    dispatch(authFail(error));
    toast({
      title: "Edit Profile Failed",
      description: `${error.response?.data}`,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};
