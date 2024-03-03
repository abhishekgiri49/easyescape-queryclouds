import styled from "styled-components";

const NavWrapper = styled.div`
  .main-navbar {
    position: sticky;
  }
  .main-navbar .top-navbar {
    background-color: #67ddf096;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .main-navbar .top-navbar .brand-name {
    color: #fff;
  }
  .main-navbar .top-navbar .nav-link {
    color: rgb(0 44 91);
    font-size: 16px;
    font-weight: 500;
  }
  .main-navbar .top-navbar .dropdown-menu {
    padding: 0px 0px;
    border-radius: 0px;
  }
  .main-navbar .top-navbar .dropdown-menu .dropdown-item {
    padding: 8px 16px;
    font-size: 14px;
  }
  .main-navbar .top-navbar .dropdown-menu .dropdown-item i {
    width: 20px;
    text-align: center;
    color: #2874f0;
    font-size: 14px;
  }
  .main-navbar .navbar {
    padding: 0px;
    background-color: #ddd;
  }
  .main-navbar .navbar .nav-item .nav-link {
    padding: 8px 20px;
    color: #000;
    font-size: 15px;
  }
  span.logo-text {
    font-family: Arial, sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: rgb(255 207 0);
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  @media only screen and (max-width: 600px) {
    .main-navbar .top-navbar .nav-link {
      font-size: 12px;
      padding: 8px 10px;
    }
  }
`;
export default NavWrapper;
