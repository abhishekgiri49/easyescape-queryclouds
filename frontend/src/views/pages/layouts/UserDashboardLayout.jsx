import { Outlet } from "react-router-dom";
import { UserNavbar, UserSidebar, Footer } from "../../components";
import styled from "styled-components";

import "../../../assets/css/pages/app-email.css";
import NavWrapper from "../../../assets/wrappers/Navbar";
const HomeLayout = () => {
  return (
    <Wrapper>
      <div className="app-content content ecommerce-application">
        <NavWrapper>
          <div className="main-navbar shadow-sm sticky-top">
            <UserNavbar />
            <div class="content-wrapper container-xxl p-1">
              <div class="sidebar-left">
                <UserSidebar />
              </div>
              <div class="content-right">
                <Outlet />
              </div>
            </div>
          </div>
        </NavWrapper>
        <Footer />
      </div>
    </Wrapper>
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
export default HomeLayout;
