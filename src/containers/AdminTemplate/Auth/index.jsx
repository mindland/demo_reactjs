import React, { Component } from "react";
import { fetchLogin } from "./modules/action";
import { connect } from "react-redux";

class Auth extends Component {
  state = {
    taiKhoan: "",
    matKhau: "",
  };

  handleOnchange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value, // multiple
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.dispatch(fetchLogin(this.state, this.props.history));
  };  

  renderNoti = () => {
    const { err } = this.props;
    if (err) return <div className="alert alert-danger">{err.response.data}</div>;
  };

  render() {
    const { loading } = this.props;
    if (loading) return <p>Loading......</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h3>AuthPage</h3>
            {this.renderNoti()}
            <form onSubmit={this.handleLogin}>
              <div className="form-group">
                <label>Tài khoản </label>
                <input
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={this.handleOnchange}
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={this.handleOnchange}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    err: state.authReducer.err,
  };
};

export default connect(mapStateToProps)(Auth);
