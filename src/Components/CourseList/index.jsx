import { Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import CourseItem from "../CourseItem";
import { connect } from "react-redux";

class CourseList extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {this.props.courseList.map((item) => {
              return (
                <Grid item xs={12} sm={6} lg={3} key={item.maKhoaHoc}>
                  <CourseItem  data={item} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courseList: state.course.courseList,
  };
};

export default connect(mapStateToProps)(CourseList);
