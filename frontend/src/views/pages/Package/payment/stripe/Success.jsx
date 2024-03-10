import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { TripService } from "../../../../../repositories";
import styled from "styled-components";
const Success = () => {
  const location = useLocation();
  const [sessionId, setSessionId] = useState(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    // console.log(searchParams.get("session_id"));
    getReturnStatus(searchParams.get("session_id"));
  }, [location.search]);
  const getReturnStatus = (sessionId) => {
    TripService.getSuccess(sessionId)
      .then((res) => {
        console.log(res);
        // Optionally, you can redirect or perform other actions after successful addition
      })
      .catch((error) => {});
    // api call
  };
  return (
    <>
      <div className="content-wrapper">
        <div class="content-body">
          <div id="user-profile">
            <Wrapper>
              <div class="success-page">
                <IoIosCheckmarkCircleOutline className="checkmark" />
                <h2>Payment Successful !</h2>
                <p>
                  We are delighted to inform you that we received your payments
                </p>
                <Link to={"/"} class="btn-view-orders">
                  View Your Trips
                </Link>
                <Link to={"/"}>Continue Shopping</Link>
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
    </>
  );
};
const Wrapper = styled.div`
  .success-page {
    max-width: 300px;
    display: block;
    margin: 70px auto;
    text-align: center;
    position: relative;
    top: 50%;
  }
  .checkmark {
    color: #9abc66;
    font-size: 200px;
    line-height: 200px;
    margin-left: -15px;
  }
  .success-page img {
    max-width: 62px;
    display: block;
    margin: 0 auto;
  }

  .btn-view-orders {
    display: block;
    border: 1px solid #9abc66;
    width: 100px;
    margin: 0 auto;
    margin-top: 45px;
    padding: 10px;
    color: #fff;
    background-color: #9abc66;
    text-decoration: none;
    margin-bottom: 20px;
  }
  h2 {
    color: #9abc66;
    margin-top: 25px;
  }
  a {
    text-decoration: none;
  }
`;
export default Success;
