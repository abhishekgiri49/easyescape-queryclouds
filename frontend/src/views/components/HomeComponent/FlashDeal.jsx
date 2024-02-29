const FlashDeal = () => {
  const deals = [
    {
      id: 1,
      imgSrc: "src/assets/images/gallery/maldives.png",
      title: "Mermaid Beach Resort: The most joyful way to spend your holiday",
      location: "Maldives",
      duration: "4 days",
      originalPrice: 200,
      discountedPrice: 175,
      discountPercentage: 15,
      isNew: true,
    },
    {
      id: 2,
      imgSrc: "src/assets/images/gallery/cinnamon.png",
      title:
        "Bora Bora: Enjoy a romantic cruise tour of at the sunny side of life",
      location: "Maldives",
      duration: "4 days",
      originalPrice: 300,
      discountedPrice: 250,
      discountPercentage: 15,
      isNew: false,
    },
    {
      id: 3,
      imgSrc: "src/assets/images/gallery/cinnamon.png",
      title:
        "Bora Bora: Enjoy a romantic cruise tour of at the sunny side of life",
      location: "Maldives",
      duration: "4 days",
      originalPrice: 300,
      discountedPrice: 250,
      discountPercentage: 15,
      isNew: false,
    },
    {
      id: 4,
      imgSrc: "src/assets/images/gallery/cinnamon.png",
      title:
        "Bora Bora: Enjoy a romantic cruise tour of at the sunny side of life",
      location: "Maldives",
      duration: "4 days",
      originalPrice: 300,
      discountedPrice: 250,
      discountPercentage: 15,
      isNew: false,
    },
    // Add more deals as needed
  ];
  const groupedDeals = [];
  for (let i = 0; i < deals.length; i += 3) {
    groupedDeals.push(deals.slice(i, i + 3));
  }
  return (
    <section class="features">
      <div class="container">
        <div class="features-content">
          <div class="section-header">
            <h3 class="section-head-title">Flash deals</h3>
          </div>
          <div className="col-12">
            <div
              className="carousel slide"
              id="carouselTestimonials"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {groupedDeals.map((group, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    data-bs-interval="10000"
                  >
                    <div className="row h-100 align-items-center g-2">
                      {group.map((deal, innerIndex) => (
                        <div
                          key={innerIndex}
                          className="col-md-4 mb-3 mb-md-0 h-100"
                        >
                          <div className="card card-span h-100 text-white">
                            <img
                              className="img-fluid h-100"
                              src={deal.imgSrc}
                              alt="..."
                            />

                            <div className="card-body ps-0">
                              <h5 className="fw-bold card-title text-1000 text-truncate">
                                {deal.title}{" "}
                              </h5>
                              <span className="selected">6N/7D</span>
                              <p className="card-text single-line-list">
                                <span>1N Srinagar Houseboat</span>
                                <span>1N Gulmarg</span>
                                <span>2N Pahalgam</span>
                                <span>2N Srinagar</span>
                              </p>
                              <ul className="two-column-list">
                                <li>Round Trip</li>
                                <li>Flights</li>
                                <li>Intercity Car Transfers</li>
                                <li>3 Star Hotels</li>
                                <li>Airport Transfers</li>
                                <li>Airport Pickup & Drop</li>
                                <li>11 Activities</li>
                                <li>Selected Meals</li>
                                <li>Indian Lunch</li>
                                <li>Night Tour</li>
                              </ul>
                              <p className="text-decoration-line-through text-900 mt-3 mb-0">
                                ${deal.originalPrice}
                              </p>
                              <h1 className="mb-3 text-primary fw-bolder fs-4">
                                <span>${deal.discountedPrice}</span>
                                <span className="text-900 fs--1 fw-normal">
                                  /Per person
                                </span>
                              </h1>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FlashDeal;
