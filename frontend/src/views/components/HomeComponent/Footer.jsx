import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <ul className="mainmenu2">
        <li>
          <a href="#">Accommodations</a>
        </li>
        <li>
          <a href="#">Flights</a>
        </li>
        <li>
          <a href="#">Car Rentals</a>
        </li>
        <li>
          <a href="#">Airport Taxis</a>
        </li>
      </ul>
      <div className="socialmedia2">{/* Your social media links */}</div>
      <ul id="collegamenti">
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Press</a>
        </li>
        <li>
          <a href="#">Polices</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
