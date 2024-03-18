import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import FlightImage from "../../../assets/images/flight_footer2.png"; // Import your flight photo

// Footer.js

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4" style={{ float: "inline-end" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-white" style={{ fontSize: "1.5rem" }}>
              About Us
            </h5>
            <p>
              Our website will relieve you from all the pain and stress of
              planning your vacation. Our budget-friendly packages, exciting
              offers, and destination vlogs will make your travel booking
              experience an easy escape. Join us as we introduce an intuitive
              platform, making your dream holidays just a click away. Let the
              adventure begin!
            </p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-white" style={{ fontSize: "1.5rem" }}>
              Links
            </h5>
            <ul className="list-unstyled d-flex flex-wrap ">
              <li>
                <a href="#" style={{ color: "#0edbd9", paddingRight: "4rem" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#0edbd9", paddingRight: "4rem" }}>
                  About
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#0edbd9", paddingRight: "4rem" }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#0edbd9", paddingRight: "4rem" }}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex pt-1 align-items-center">
              <div className="col-md-4">
                <FaFacebook
                  style={{
                    height: "4rem",
                    width: "3.5rem",
                    paddingRight: "2rem",
                  }}
                />
                <FaTwitter
                  style={{
                    height: "4rem",
                    width: "3.5rem",
                    paddingRight: "2rem",
                  }}
                />
                <FaInstagram
                  style={{
                    height: "4rem",
                    width: "3.5rem",
                    paddingRight: "2rem",
                  }}
                />
              </div>
              <img
                src={FlightImage}
                alt="Flight"
                style={{ maxWidth: "100px", marginBottom: "10px" }}
              />
            </div>
          </div>

          <div className="col-md-4">
            <h5 className="text-white " style={{ fontSize: "1.5rem" }}>
              Contact Us
            </h5>
            <ul className="list-unstyled">
              <li>Address: 123 Street, City, Country</li>
              <li>Email: easyescape@example.com</li>
              <li>Phone: +1234567890</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
