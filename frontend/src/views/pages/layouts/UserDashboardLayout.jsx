import { Outlet } from "react-router-dom";
import { UserNavbar, UserSidebar, Footer } from "../../components";
import styled from "styled-components";
import { useState, createContext, useContext } from "react";
import { AuthUser } from "./../../../helper/AuthUser";
const UserDashboardContext = createContext();
import "../../../assets/css/pages/app-email.css";
import NavWrapper from "../../../assets/wrappers/Navbar";
const HomeLayout = () => {
  const { user, token, logout } = AuthUser();
  const logoutUser = () => {
    if (token !== undefined) {
      logout();
      navigate("/login");
    }
  };
  return (
    <UserDashboardContext.Provider
      value={{
        user,
        token,
        logoutUser,
      }}
    >
      <Wrapper>
        <div className="app-content content ecommerce-application">
          <NavWrapper>
            <div className="main-navbar shadow-sm sticky-top">
              <UserNavbar />
              <div className="my-account-wrapper mt-no-text">
                <div className="container container-default-2 custom-area">
                  <div className="row">
                    <div className="col-lg-12 col-custom">
                      <div className="myaccount-page-wrapper">
                        <div className="row">
                          <UserSidebar />

                          <div className="col-lg-9 col-md-8 col-custom">
                            <Outlet />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavWrapper>
          <Footer />
        </div>
      </Wrapper>
    </UserDashboardContext.Provider>
  );
};

const Wrapper = styled.div`
  .content {
    padding: 0 !important;
    position: relative;
    transition: 300ms ease all;
    backface-visibility: hidden;
    min-height: calc(100% - 3.35rem);
    margin-left: 0;
  }

  .carousel-div {
    padding: 40px;
  }
`;
export const useUserDashboardContext = () => useContext(UserDashboardContext);

export default HomeLayout;
