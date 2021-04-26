import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavbarHome extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <Link exact className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassname=" " className="nav-link" to="/signin">
                Signin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassname=" " className="nav-link" to="/hoc">
                HOC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassname=" " className="nav-link" to="/hook">
                Hook
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarHome;
