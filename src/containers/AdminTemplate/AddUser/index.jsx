import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddUserApi } from "./modules/action";

class AddUser extends Component {
  state = {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "",
    maNhom: "",
    email: "",
  };

  handleOnchange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddUser = (e) => {
    e.preventDefault();
    console.log(this.state);

    this.props.dispatch(actAddUserApi(this.state));
  };

  renderNoti = () => {
    const { err } = this.props;
    if (err) {
      console.log(err.response);
      if(err.response.status === 500) {
        return <div className="alert alert-danger">{err.response.data}</div>
      } 
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) return <p>Loading .... </p>;
    return (
      <form className="container" onSubmit={this.handleAddUser}>  
        <h3>Thêm người dùng</h3>
        {this.renderNoti()}
        <div className="form-group">
          <span>Tài khoản</span>
          <input
            className="form-control"
            name="taiKhoan"
            onChange={this.handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Mật khẩu</span>
          <input
            className="form-control"
            name="matKhau"
            onChange={this.handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Họ tên</span>
          <input
            className="form-control"
            name="hoTen"
            onChange={this.handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Email</span>
          <input
            className="form-control"
            name="email"
            onChange={this.handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Số điện thoại</span>
          <input
            className="form-control"
            name="soDT"
            onChange={this.handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Mã nhóm</span>
          <input
            className="form-control"
            name="maNhom"
            onChange={this.handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Mã loại người dùng</span>
          <input
            className="form-control"
            name="maLoaiNguoiDung"
            onChange={this.handleOnchange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Thêm người dùng
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.addUserReducer.loading,
    err: state.addUserReducer.err,
    data: state.addUserReducer.data,
  };
};

export default connect(mapStateToProps)(AddUser);
