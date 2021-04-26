import React, { Component } from "react";
import { Route , Redirect } from "react-router";
import NavbarAdmin from "../../Components/NavbarAdmin";

function LayoutAdmin(props) {
  return (
    <>
      <NavbarAdmin />
      {props.children}
    </>
  );
}

class AdminTemplate extends Component {
  render() {
    const { exact, path, component } = this.props;

    if(! localStorage.getItem("UserAdmin")) return <Redirect to="/auth" />

    return (  
      <div>
        <LayoutAdmin>
          <Route exact={exact} path={path} component={component} />
        </LayoutAdmin>
      </div>
    );
  }
}

export default AdminTemplate;
