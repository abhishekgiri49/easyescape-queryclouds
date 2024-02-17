import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1702933018110-883638b70eeb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 1"
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1682685796063-d2604827f7b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 2"
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1703340020770-889bfc85f038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 3"
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
