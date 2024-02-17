import { AuthUser } from "./../../../helper/AuthUser";
import { Link } from "react-router-dom";
import { Logo } from "../../components";
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
        <ul className="nav justify-content-end">
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
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fa fa-heart"></i> Wishlist
          </a>
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
              <a className="dropdown-item" href="#">
                <i className="fa fa-user"></i> Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa fa-list"></i> My Bookings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa fa-heart"></i> My Wishlist
              </a>
            </li>

            <li>
              <span className="dropdown-item" onClick={logoutUser}>
                <i className="fa fa-sign-out"></i> Logout
              </span>
            </li>
          </ul>
        </li>
      </ul>;
    }
  };
  return (
    <div className="top-navbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 my-auto d-none d-md-block">
            <Link to="/">
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
