import { Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { Navbar, Sidebar } from "../../components";
import { AuthUser } from "./../../../helper/AuthUser";
import { useState, createContext, useContext } from "react";
const DashboardContext = createContext();
const Dashboard = () => {
  const { user, token, logout } = AuthUser();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };
  // const toggleSidebar = () => {
  //   setShowSidebar(!showSidebar);
  // };

  const logoutUser = () => {
    if (token !== undefined) {
      logout();
      navigate("/login");
    }
  };
  return (
    <DashboardContext.Provider
      value={{
        user,
        isActive,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Sidebar />
      <main className={`main ${isActive ? "active" : ""}`}>
        <div>
          <Navbar />
          <div className="app-content content">
            <div className="content-overlay"></div>
            <div className="header-navbar-shadow"></div>
            <Outlet />
          </div>
        </div>
      </main>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard;
