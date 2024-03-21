import { Link, useLocation } from "react-router-dom";
import { useUserDashboardContext } from "../../pages/layouts/UserDashboardLayout";
import { useEffect, useState } from "react";
const UserSidebar = () => {
  const { logoutUser } = useUserDashboardContext();
  const location = useLocation();
  const links = [
    { label: "My Trips", path: "/dashboard/trips" },
    { label: "Account Details", path: "/dashboard/account" },
    { label: "Change Password", path: "/dashboard/change-password" },
  ];

  return (
    <div className="col-lg-3 col-md-4 col-custom">
      <div className="myaccount-tab-menu nav">
        <Link
          to={"/dashboard"}
          className={location.pathname == "/dashboard" ? "active" : ""}
        >
          Dashboard
        </Link>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={location.pathname.startsWith(link.path) ? "active" : ""}
          >
            <i className={link.icon}></i> {link.label}
          </Link>
        ))}
        <a onClick={logoutUser}>
          <i className="fa fa-sign-out"></i> Logout
        </a>
      </div>
    </div>
  );
};
export default UserSidebar;
