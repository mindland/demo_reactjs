import axios from "axios";
import { FETCH_COURSES, FETCH_COURSE_DETAIL } from "../constants/course";

export const fetchCourseList = () => {
  return (dispatch) => {
    axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
      method: "GET",
      param: {
        MaNhom: "GP01",
      },
    })
      .then((res) => {
        dispatch({
          type: FETCH_COURSES,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCourseDetail = (id) => {
  return (dispatch) => {
    axios({
      url:
        `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: FETCH_COURSE_DETAIL,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
