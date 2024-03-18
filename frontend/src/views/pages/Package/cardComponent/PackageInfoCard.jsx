import { Link } from "react-router-dom";
import { FaHotel, FaArrowRight, FaPlane, FaCar, FaTrain, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../../../../assets/css/index.css";
import FlightImage from "../../../../assets/images/flight_footer2.png"; // Import your flight photo
import HotelImage from "../../../../assets/images/hotel.png"; // Import your Hotel photo
import HomeStayImage from "../../../../assets/images/homestay.png"; // Import your Hotel photo

const PackageInfoCard = ({ index, packageData }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <section className="basic-timeline">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h1>How your trip will look like</h1>
                  </div>
                  <div className="card-body">
                    <ul className="timeline">
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-danger timeline-point-indicator"></span>
                        <div class="col-md-4 col-md-8 col-lg-12 col-md-6">
                          <div class="card card-developer-meetup">
                            <div class="card-body">
                              <div class="meetup-header d-flex align-items-center">
                                <div class="meetup-day col-md-0 col-md-2 display-inline">
                                  <h6 class="mb-0">DAY</h6>
                                  <h3 class="mb-0">1</h3>
                                </div>
                                <div class="meetup-day col-md-0 col-md-5">
                                  <p class="card-text mb-0">Arrival in Goa - Dabolim Airport</p>
                                </div>
                                <div class="d-flex flex-row meetings col-md-5 col-md-6 px-3">
                                  <div class="avatar me-75">
                                    <img src={HotelImage} class="rounded" width="45" height="45" alt="Avatar" />
                                  </div>
                                  <div class="content-body">
                                    <h6 class="mb-0">Stay at:</h6>
                                    <small>Hotel chankya</small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-danger timeline-point-indicator"></span>
                        <div class="col-md-4 col-md-8 col-lg-12 col-md-6">
                          <div class="card card-developer-meetup">
                            <div class="card-body">
                              <div class="meetup-header d-flex align-items-center">
                                <div class="meetup-day col-md-0 col-md-2">
                                  <h6 class="mb-0">DAY</h6>
                                  <h3 class="mb-0">2</h3>
                                </div>
                                <div class="meetup-day col-md-0 col-md-5">
                                  <p class="card-text mb-0">Agonda Beach</p>
                                </div>
                                <div class="d-flex flex-row meetings col-md-5 col-md-6 px-3">
                                  <div class="avatar me-75">
                                    <img src={HotelImage} class="rounded" width="45" height="45" alt="Avatar" />
                                  </div>
                                  <div class="content-body">
                                    <h6 class="mb-0">Stay at:</h6>
                                    <small>Hotel Jhoom</small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-danger timeline-point-indicator"></span>
                        <div class="col-md-4 col-md-8 col-lg-12 col-md-6">
                          <div class="card card-developer-meetup">
                            <div class="card-body">
                              <div class="meetup-header d-flex align-items-center">
                                <div class="meetup-day col-md-0 col-md-2">
                                  <h6 class="mb-0">DAY</h6>
                                  <h3 class="mb-0">3</h3>
                                </div>
                                <div class="meetup-day col-md-0 col-md-5 ">
                                  <p class="card-text mb-0">Dudhsagar Falls</p>
                                </div>
                                <div class="d-flex flex-row meetings col-md-5 col-md-6 px-3">
                                  <div class="avatar me-75">
                                    <img src={HomeStayImage} class="rounded" width="45" height="45" alt="Avatar" />
                                  </div>
                                  <div class="content-body">
                                    <h6 class="mb-0">Stay at:</h6>
                                    <small>Sunrise Homestay</small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-danger timeline-point-indicator"></span>
                        <div class="col-md-4 col-md-8 col-lg-12 col-md-6">
                          <div class="card card-developer-meetup">
                            <div class="card-body">
                              <div class="meetup-header d-flex align-items-center">
                                <div class="meetup-day col-md-0 col-md-2">
                                  <h6 class="mb-0">DAY</h6>
                                  <h3 class="mb-0">4</h3>
                                </div>
                                <div class="meetup-day col-md-0 col-md-5">
                                  <p class="card-text mb-0">Cavelossim Beach</p>
                                </div>
                                <div class="d-flex flex-row meetings col-md-5 col-md-6 px-3">
                                  <div class="avatar me-75">
                                    <img src={HomeStayImage} class="rounded" width="45" height="45" alt="Avatar" />
                                  </div>
                                  <div class="content-body">
                                    <h6 class="mb-0">Stay at:</h6>
                                    <small>Sunrise homestay</small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-danger timeline-point-indicator"></span>
                        <div class="col-md-4 col-md-8 col-lg-12 col-md-6">
                          <div class="card card-developer-meetup">
                            <div class="card-body">
                              <div class="meetup-header d-flex align-items-center">
                                <div class="meetup-day col-md-0 col-md-2">
                                  <h6 class="mb-0">DAY</h6>
                                  <h3 class="mb-0">5</h3>
                                </div>
                                <div class="meetup-day col-md-0 col-md-5">
                                  <p class="card-text mb-0">Arriving at Indira Gandhi International airport</p>
                                </div>
                                <div class="d-flex flex-row meetings col-md-5 col-md-6 px-3">
                                  <div class="content-body">
                                    <h6 class="mb-0">Welcom back to:</h6>
                                    <small>Delhi</small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default PackageInfoCard;
