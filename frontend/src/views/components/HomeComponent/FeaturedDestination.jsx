import React from "react";

const FeaturedDestination = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-content">
          <div className="section-header">
            <h3 className="section-head-title">Featured destinations</h3>
          </div>
          <div className="features-cards">
            <div className="feature-card">
              <img
                src="https://raw.githubusercontent.com/mustafadalga/tour-and-travel/master/assets/img/features/raja-ampat.jpg"
                alt=""
                className="feature-img"
              />
              <div className="feature-card-desc">
                <span className="location">Raja Ampat</span>
                <span className="country">Indonesia</span>
              </div>
            </div>
            <div className="feature-card">
              <img
                src="https://raw.githubusercontent.com/mustafadalga/tour-and-travel/master/assets/img/features/fanjingshan.jpg"
                alt=""
                className="feature-img"
              />
              <div className="feature-card-desc">
                <span className="location">Fanjingshan</span>
                <span className="country">China</span>
              </div>
            </div>
            <div className="feature-card">
              <img
                src="https://raw.githubusercontent.com/mustafadalga/tour-and-travel/master/assets/img/features/vevey.jpg"
                alt=""
                className="feature-img"
              />
              <div className="feature-card-desc">
                <span className="location">Vevey</span>
                <span className="country">Switzerland</span>
              </div>
            </div>
            <div className="feature-card">
              <img
                src="https://raw.githubusercontent.com/mustafadalga/tour-and-travel/master/assets/img/features/skadar.jpg"
                alt=""
                className="feature-img"
              />
              <div className="feature-card-desc">
                <span className="location">Skadar</span>
                <span className="country">Montenegro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedDestination;
