import { Outlet } from "react-router-dom";
import { UserNavbar, LoadingScreen, Footer } from "../../components";
import styled from "styled-components";
import React, { useState, useEffect, createContext, useContext } from "react";
import NavWrapper from "../../../assets/wrappers/Navbar";
import { AuthUser } from "./../../../helper/AuthUser";
const HomeContext = createContext();
const HomeLayout = () => {
  const { user } = AuthUser();
  const [loading, setLoading] = useState(true);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  useEffect(() => {
    if (user !== null) {
      setUserAuthenticated(true);
    } else {
      setUserAuthenticated(false);
    }
  }, [user]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <HomeContext.Provider
        value={{
          user,
          userAuthenticated,
        }}
      >
        <LoadingScreen loading={loading} setLoading={setLoading} />
        <Wrapper>
          <div className="app-content content ecommerce-application">
            <NavWrapper>
              <div className="main-navbar shadow-sm sticky-top">
                <UserNavbar />

                <Outlet />
              </div>
            </NavWrapper>
          </div>
        </Wrapper>
        <Footer />
      </HomeContext.Provider>
    </>
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

export const useHomeContext = () => useContext(HomeContext);
export default HomeLayout;
