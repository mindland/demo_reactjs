import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  // function để đưa style co sẵn vào bên trong component
  withStyles
} from "@material-ui/core";
import React, { Component } from "react";
import style from "./style";

import {Link } from "react-router-dom";

class CourseItem extends Component {
  render() {
    const { hinhAnh, tenKhoaHoc, moTa , maKhoaHoc } = this.props.data;

    return (
      <Card>
        <CardActionArea className={this.props.classes.card}>
          <CardMedia
            className={this.props.classes.img}
            image={hinhAnh}
            // style={{height: "200px"}}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={this.props.classes.txt}>
              {tenKhoaHoc}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={this.props.classes.txt}>
              {moTa}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={this.props.classes.btnAction}>
          <Link to={`/detail/${maKhoaHoc}`} variant="contained" size="small" color="secondary" className={this.props.classes.btn}>
            Detail
          </Link>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(style)(CourseItem);
