import * as actionTypes from "./constants";
import axios from "axios";

export const fetchLogin = (user, history) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((res) => {
        if (res.data.maLoaiNguoiDung === "HV") {
          return Promise.reject({
            response: { data: "Bạn không có quyền truy cập " },
          }); // pending, resolve, reject
        }

        // success
        dispatch(actAuthSuccess(res.data));

        // redirect sang trang dashboard
        //  history.push("/dashboard");
        
        // lưu xuống local storage
        localStorage.setItem("UserAdmin", JSON.stringify(res.data));

        history.replace("/dashboard"); // replace thi khong return lai trang auth

      })
      .catch((err) => {
        // failed
        dispatch(actAuthFailed(err));
      });
  };
};

const actAuthRequest = () => {
  return {
    type: actionTypes.AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (err) => {
  return {
    type: actionTypes.AUTH_FAILED,
    payload: err,
  };
};
