import React from "react";

const Page2 = () => {
  return (
    <section class="features">
      <div class="container">
        <div class="features-content">
          <div class="section-header">
            <h3 class="section-head-title">Featured destinations</h3>
          </div>
          <div class="features-cards">
            <div class="feature-card">
              <img
                src="https://raw.githubusercontent.com/mustafadalga/tour-and-travel/master/assets/img/features/raja-ampat.jpg"
                alt=""
                class="feature-img"
              />
              <div class="feature-card-desc">
                <span class="location">Raja Ampat</span>
                <span class="country">Indonesia</span>
              </div>
            </div>
            <div class="feature-card">
              <img
                src="https://raw.githubusercontent.com/mustafadalga/tour-and-travel/master/assets/img/features/fanjingshan.jpg"
                alt=""
                class="feature-img"
              />
              <div class="feature-card-desc">
                <span class="location">Fanjingshan</span>
                <span class="country">China</span>
              </div>
            </div>
            <div class="feature-card">
              <img
                src="https://raw.githubusercontent.com/mustafadalga/tour-and-travel/master/assets/img/features/vevey.jpg"
                alt=""
                class="feature-img"
              />
              <div class="feature-card-desc">
                <span class="location">Vevey</span>
                <span class="country">Switzerland</span>
              </div>
            </div>
            <div class="feature-card">
              <img
                src="https://raw.githubusercontent.com/mustafadalga/tour-and-travel/master/assets/img/features/skadar.jpg"
                alt=""
                class="feature-img"
              />
              <div class="feature-card-desc">
                <span class="location">Skadar</span>
                <span class="country">Montenegro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Page2;
