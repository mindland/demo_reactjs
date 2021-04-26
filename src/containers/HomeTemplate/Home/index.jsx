import React, { Component } from "react";
import { connect } from "react-redux";
import CourseList from "../../../Components/CourseList";
import { Typography, withStyles } from "@material-ui/core";
import style from "./style";
import { fetchCourseList } from "../../../redux/actions/course";

/**
 * 1. Call API fetch all courses
 * 2. Put course in store
 * 3. render CourseItem
 * 4. material design + JSS
 */

class Home extends Component {
  render() {
    return (
      <div className={this.props.classes.bg}>
        <Typography
          variant="h2"
          component="h1"
          className={this.props.classes.header}
        >
          DANH SÁCH KHÓA HỌC
        </Typography>
        <CourseList />
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchCourseList());
  }
}

export default connect()(withStyles(style)(Home));
