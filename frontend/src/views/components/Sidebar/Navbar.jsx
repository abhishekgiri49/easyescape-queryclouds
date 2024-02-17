import Wrapper from "../../../assets/wrappers/Navbar";
import Logo from "../Logo";
import { FaAlignJustify } from "react-icons/fa";
import avatar from "../../../assets/images/avatar.svg";
import { useDashboardContext } from "../../pages/layouts/DashboardLayout";
const Navbar = () => {
  const { user, logoutUser } = useDashboardContext();

  return (
    <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow">
      <div className="navbar-container d-flex content">
        <div className="bookmark-wrapper d-flex align-items-center">
          <ul className="nav navbar-nav d-xl-none">
            <li className="nav-item">
              <a className="nav-link menu-toggle" href="#">
                <FaAlignJustify />
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav">
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link nav-link-style">
                <i className="ficon" data-feather="moon"></i>
              </a>
            </li>
          </ul>
        </div>
        <ul className="nav navbar-nav align-items-center ms-auto">
          <li className="nav-item dropdown dropdown-user">
            <a
              className="nav-link dropdown-toggle dropdown-user-link"
              id="dropdown-user"
              href="#"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="user-nav d-sm-flex d-none">
                <span className="user-name fw-bolder">
                  {user.firstName + " " + user.lastName}
                </span>
                <span className="user-status">Admin</span>
              </div>
              <span className="avatar">
                <img
                  className="round"
                  src={avatar}
                  alt="avatar"
                  height="40"
                  width="40"
                />
                <span className="avatar-status-online"></span>
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdown-user"
            >
              <a className="dropdown-item" href="#">
                <i className="me-50" data-feather="settings"></i> Settings
              </a>
              <a className="dropdown-item" href="#">
                <i className="me-50" data-feather="credit-card"></i> Change
                Password
              </a>

              <span className="dropdown-item" onClick={logoutUser}>
                <i className="me-50" data-feather="power"></i> Logout
              </span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
