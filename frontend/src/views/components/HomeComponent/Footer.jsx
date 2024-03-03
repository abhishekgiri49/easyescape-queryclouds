import React from "react";
import {
  FaSuitcase,
  FaPlane,
  FaCar,
  FaTaxi,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
//import FlightImage from "./flight.jpg";
import FlightImage from "../../../assets/images/flight.webp"; // Import your flight photo

const Footer = () => {
  return (
    <div
      id="footer"
      style={{
        backgroundColor: "#252525",
        padding: "40px 0",
        textAlign: "center",
        color: "#ffffff",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <ul className="mainmenu2" style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ display: "inline-block", marginRight: "40px" }}>
          <a href="#" style={{ textDecoration: "none", color: "#ffffff" }}>
            <FaSuitcase style={{ marginBottom: "-3px", marginRight: "5px" }} />{" "}
            Accommodations
          </a>
        </li>
        <li style={{ display: "inline-block", marginRight: "40px" }}>
          <a href="#" style={{ textDecoration: "none", color: "#ffffff" }}>
            <FaPlane style={{ marginBottom: "-3px", marginRight: "5px" }} />{" "}
            Flights
          </a>
        </li>
        <li style={{ display: "inline-block", marginRight: "40px" }}>
          <a href="#" style={{ textDecoration: "none", color: "#ffffff" }}>
            <FaCar style={{ marginBottom: "-3px", marginRight: "5px" }} /> Car
            Rentals
          </a>
        </li>
        <li style={{ display: "inline-block" }}>
          <a href="#" style={{ textDecoration: "none", color: "#ffffff" }}>
            <FaTaxi style={{ marginBottom: "-3px", marginRight: "5px" }} />{" "}
            Airport Taxis
          </a>
        </li>
      </ul>
      <img
        src={FlightImage}
        alt="Flight"
        style={{
          width: "100%",
          maxWidth: "300px",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      />
      <div className="socialmedia2" style={{ marginTop: "20px" }}>
        <a href="#" style={{ marginRight: "20px", color: "#ffffff" }}>
          <FaFacebook size={24} />
        </a>
        <a href="#" style={{ marginRight: "20px", color: "#ffffff" }}>
          <FaTwitter size={24} />
        </a>
        <a href="#" style={{ color: "#ffffff" }}>
          <FaInstagram size={24} />
        </a>
      </div>
      <ul
        id="collegamenti"
        style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}
      >
        <li style={{ display: "inline-block", marginRight: "40px" }}>
          <a href="#" style={{ textDecoration: "none", color: "#ffffff" }}>
            Careers
          </a>
        </li>
        <li style={{ display: "inline-block", marginRight: "40px" }}>
          <a href="#" style={{ textDecoration: "none", color: "#ffffff" }}>
            Press
          </a>
        </li>
        <li style={{ display: "inline-block", marginRight: "40px" }}>
          <a href="#" style={{ textDecoration: "none", color: "#ffffff" }}>
            Polices
          </a>
        </li>
        <li style={{ display: "inline-block", marginRight: "40px" }}>
          <a href="#" style={{ textDecoration: "none", color: "#ffffff" }}>
            Help
          </a>
        </li>
        <li style={{ display: "inline-block" }}>
          <a href="#" style={{ textDecoration: "none", color: "#ffffff" }}>
            FAQ
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
