import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardMedia } from "@material-ui/core";

const Detail = (props) => {
  const [state, setSate] = useState({
      loading: false, 
      data: null, 
      error: null
  });

  useEffect(() => {
    const id = props.match.params.id;
    setSate({
        ...state, 
        loading: true   
    })
    axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
      method: "GET",
    })
      .then((res) => {
        setSate({
            ...state,
            loading: false, 
            data: res.data, 
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <CardMedia component="img" image={state.data && state.data.hinhAnh}></CardMedia>
    </div>
  );
};

export default Detail;
