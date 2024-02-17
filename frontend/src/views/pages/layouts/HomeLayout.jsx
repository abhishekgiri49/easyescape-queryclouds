import { Outlet } from "react-router-dom";
import { UserNavbar } from "../../components";
import styled from "styled-components";
import NavWrapper from "../../../assets/wrappers/Navbar";
const HomeLayout = () => {
  return (
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
