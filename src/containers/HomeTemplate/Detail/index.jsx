import { CardMedia } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCourseDetail } from "../../../redux/actions/course";
class Detail extends Component {
  render() {
    return (
      <div>
        <CardMedia
          component="img"
          image={this.props.courseDetail.hinhAnh}
        ></CardMedia>
      </div>
    );
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchCourseDetail(id));
    console.log(this.props);
  }
}

const mapStateToProps = (state) => {
  return {
    courseDetail: state.course.courseDetail,
  };
};

export default connect(mapStateToProps)(Detail);
