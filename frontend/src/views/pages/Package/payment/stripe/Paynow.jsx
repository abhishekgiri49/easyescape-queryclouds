import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLISHABLE_KEY } from "./../../../../../helper/Constant";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { TripService } from "../../../../../repositories";
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const Paynow = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [order, setOrder] = useState({});
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("orderId");
    if (orderId) {
      TripService.find(orderId)
        .then((data) => {
          setOrder(data);
        })
        .catch((error) => {
          console.error("Error fetching package details:", error);
        });
    }
  }, []);
  useEffect(() => {
    fetchClientSecret();
  }, [order]);

  const fetchClientSecret = async () => {
    // console.log(order);
    if (Object.keys(order).length > 0) {
      TripService.createCheckoutSession(order)
        .then((data) => {
          setClientSecret(data.clientSecret);
        })
        .catch((error) => {
          console.error("Error fetching package details:", error);
        });
    }
  };
  return (
    <>
      {/* <button onClick={fetchClientSecret}>Pay Now</button> */}
      <div id="checkout">
        {clientSecret && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </div>
    </>
  );
};
export default Paynow;
