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
    <section className="features">
      <div className="container">
        <div className="features-content">
          <div className="section-header">
            <h3 className="section-head-title">Flash deals</h3>
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
                    <div id="ecommerce-products" className="grid-view">
                      {group.map((deal, innerIndex) => (
                        <div className="card" style={{ height: "95%" }}>
                          <img
                            className="card-img-top"
                            src={deal.imgSrc}
                            alt="Card image cap"
                          />
                          <div className="card-body">
                            <p className="card-title">
                              {deal.title}{" "}
                              <span className="selected">6N/7D</span>
                              <p className="text-decoration-line-through text-900 mt-3 mb-0">
                                ${deal.originalPrice}
                              </p>
                              <h1 className="mb-3 text-primary fw-bolder fs-4">
                                <span>${deal.discountedPrice}</span>
                                <span className="text-900 fs--1 fw-normal">
                                  /Per person
                                </span>
                              </h1>
                            </p>
                            <p className="card-text single-line-list">
                              <span>1N Srinagar Houseboat</span>
                              <span>1N Gulmarg</span>
                              <span>2N Pahalgam</span>
                              <span>2N Srinagar</span>
                            </p>
                          </div>
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
