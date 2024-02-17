import styled from "styled-components";

const Wrapper = styled.div`
  .main {
    position: absolute;
    width: calc(100% - 300px);
    left: 300px;
    min-height: 100vh;
    background: var(--white);
    transition: 0.5s;
  }
  .main.active {
    width: calc(100% - 80px);
    left: 80px;
  }
  @media (max-width: 991px) {
    .navigation {
      left: -300px;
    }
    .navigation.active {
      width: 300px;
      left: 0;
    }
    .main {
      width: 100%;
      left: 0;
    }
    .main.active {
      left: 300px;
    }
  }
  @media (max-width: 480px) {
    .navigation {
      width: 100%;
      left: -100%;
      z-index: 1000;
    }
    .navigation.active {
      width: 100%;
      left: 0;
    }
    .toggle {
      z-index: 10001;
    }
    .dashboard.active .toggle {
      color: #fff;
      position: fixed;
      right: 0;
      left: initial;
    }
  }
`;
export default Wrapper;
