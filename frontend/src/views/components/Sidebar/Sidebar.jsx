import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Links from "../../pages/utils/Links";
import Logo from "../Logo";
import { FaX } from "react-icons/fa6";

import { FaRegDotCircle, FaRegCircle } from "react-icons/fa";
import { useDashboardContext } from "../../pages/layouts/DashboardLayout";
const Sidebar = () => {
  const { isActive, toggleSidebar } = useDashboardContext();
  const [activeSubnav, setActiveSubnav] = useState(null);
  const location = useLocation();
  const showSubnav = (index) => {
    if (activeSubnav === index) {
      setActiveSubnav(null);
    } else {
      setActiveSubnav(index);
    }
  };
  const handleActiveStatus = (item) => {
    // Compare the current location pathname with the item path

    return location.pathname.endsWith(item.path);
  };

  const returnLink = (link) => {
    if (Array.isArray(link.subNav) && link.subNav.length > 0) {
      return (
        <a className="d-flex align-items-center" href="#">
          <span className="icon">{link.icon}</span>
          <span className="menu-title text-truncate" data-i18n="Home">
            {link.text}
          </span>
        </a>
      );
    } else {
      return (
        <Link
          to={link.path}
          key={link.text}
          className="d-flex align-items-center"
        >
          <span className="icon">{link.icon}</span>
          <span className="menu-title text-truncate">{link.text}</span>
        </Link>
      );
    }
  };
  return (
    <div
      className="main-menu menu-fixed menu-light menu-accordion menu-shadow"
      data-scroll-to-active="true"
    >
      <div className="navbar-header">
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item me-auto">
            <a
              className="navbar-brand"
              href="../../../starter-kit/ltr/vertical-menu-template/"
            >
              <h2 className="brand-text">Admin Panel</h2>
            </a>
          </li>
          <li className="nav-item nav-toggle">
            <a
              className="nav-link modern-nav-toggle pe-0"
              data-bs-toggle="collapse"
            >
              <FaX className="feather feather-x d-block d-xl-none text-primary toggle-icon font-medium-4" />
              <FaRegCircle className="d-none d-xl-block collapse-toggle-icon font-medium-4 text-primary" />
            </a>
          </li>
        </ul>
      </div>
      <div className="shadow-bottom"></div>
      <div className="main-menu-content">
        <ul
          className="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          {Links.map((link, index) => {
            return (
              <li
                key={index}
                onClick={() => handleActiveStatus(link)}
                className={`nav-item ${
                  handleActiveStatus(link) ? "active" : ""
                }`}
              >
                {returnLink(link)}
                {link.subNav && (
                  <ul className="menu-content">
                    {link.subNav.map((item, subIndex) => (
                      <li
                        key={subIndex}
                        onClick={() => handleActiveStatus(item)}
                        className={handleActiveStatus(item) ? "active" : ""}
                      >
                        <Link
                          to={item.path}
                          className="d-flex align-items-center"
                        >
                          <span className="icon">{item.icon}</span>
                          <span className="menu-title text-truncate">
                            {item.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
