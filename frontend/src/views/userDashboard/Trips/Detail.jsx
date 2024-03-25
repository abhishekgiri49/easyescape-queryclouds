import { TripService } from "../../../repositories";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { UserCancel } from "../../../views";
const Details = () => {
  const [trip, setTrip] = useState({});
  const { tripId } = useParams();
  useEffect(() => {
    fetchTrip();
  }, []);
  const fetchTrip = () => {
    TripService.find(tripId).then((data) => {
      setTrip(data);
    });
  };
  return (
    <div className="tab-pane fade   show active" id="dashboad" role="tabpanel">
      <div className="myaccount-content">
        <div id="orderconfirmation">
          <div className="rentalinfo">
            <h1>Your trip has been booked!</h1>
            <p>
              We've sent you a mail with all the details. Remember to take a
              look at your trip detail, so you don't have to stress about
              planning your trip.
            </p>

            <p className="rentalsubtext">
              Just show your confirmation mail when you arrive.
            </p>
          </div>
          <section className="rentsection">
            <h3>transaction details</h3>
            <ul className="rentalgrid">
              <li>
                <h5>Date</h5>
                <p>May 20th, 2019</p>
              </li>
              <li>
                <h5>Total</h5>
                <p>60€</p>
              </li>
              <li>
                <h5>Payment method</h5>
                <p>Credit Card</p>
              </li>
            </ul>
          </section>

          <section className="rentsection">
            <h3>product details</h3>
            <ul className="rentalgrid">
              <li>
                <h5>booking id</h5>
                <p>#{trip._id}</p>
              </li>

              <li>
                <h5>pick up</h5>
                <p>may 22th, 2019</p>
              </li>
              <li>
                <h5>return</h5>
                <p>may 29th, 2019€</p>
              </li>

              <li>
                <h5>duration</h5>
                <p>8 days</p>
              </li>
              <li>
                <h5>Product</h5>
                <p>stroller</p>
              </li>
              <li>
                <UserCancel />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Details;
