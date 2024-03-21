import React from "react";
import { AuthUser } from "./../../../helper/AuthUser";
import { Link } from "react-router-dom";
import { Logo } from "../../components";
import "../../../assets/css/index.css"; // Import CSS file for custom styling

const UserNavbar = () => {
  const { user, token, logout } = AuthUser();

  const logoutUser = () => {
    if (token !== undefined) {
      logout();
    }
  };

  const renderContent = () => {
    if (user == undefined) {
      return (
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/idea/category" className="nav-link">
              Trip Ideas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/idea/category" className="nav-link">
              Trip Ideas
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-user"></i>
              {user.firstName + " " + user.lastName}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to={"/dashboard"}>
                  <i className="fa fa-user"></i> Dashboard
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to={"/dashboard/account"}>
                  <i className="fa fa-user"></i> Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to={"/dashboard/trips"}>
                  <i className="fa fa-list"></i> My Trips
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to={"/dashboard/change-password"}
                >
                  <i className="fa fa-user"></i> Change Password
                </Link>
              </li>
              <li>
                <span className="dropdown-item" onClick={logoutUser}>
                  <i className="fa fa-sign-out"></i> Logout
                </span>
              </li>
            </ul>
          </li>
        </ul>
      );
    }
  };

  return (
    <div className="top-navbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 my-auto d-none d-md-block">
            <Link to="/" className="logo-link">
              <Logo />
              <span className="logo-text">EASY ESCAPE</span>
            </Link>
          </div>
          <div className="col-md-4 my-auto"></div>
          <div className="col-md-4 my-auto">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
