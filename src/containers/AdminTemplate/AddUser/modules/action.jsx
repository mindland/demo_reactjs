import * as ActionTypes from "./constants";
import axios from "axios";

export const actAddUserApi = (user) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }

  return (dispatch) => {
    dispatch(actionAddUserRequest);
    axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        // success
        dispatch(actAddUserSuccess(res.data));
      })
      .catch((err) => {
        // failed
        dispatch(actAddUserFailed(err));
      });
  };
};

const actionAddUserRequest = () => {
  return {
    type: ActionTypes.ADD_USER_REQUEST,
  };
};

const actAddUserSuccess = (data) => {
  return {
    type: ActionTypes.ADD_USER_SUCCESS,
    payload: data,
  };
};

const actAddUserFailed = (err) => {
  return {
    type: ActionTypes.ADD_USER_FAILED,
    payload: err,
  };
};
