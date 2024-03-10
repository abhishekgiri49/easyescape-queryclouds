import { Link } from "react-router-dom";
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
                        <span className="timeline-point timeline-point-indicator"></span>
                        <div className="timeline-event">
                          <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                            <h6>Day 1</h6>
                            <span className="timeline-event-time">
                              12 min ago
                            </span>
                          </div>
                          <p>Invoices have been paid to the company.</p>
                          <div className="d-flex flex-row align-items-center">
                            <img
                              className="me-1"
                              src="../../../app-assets/images/icons/file-icons/pdf.png"
                              alt="invoice"
                              height="23"
                            />
                            <span>invoice.pdf</span>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-secondary timeline-point-indicator"></span>
                        <div className="timeline-event">
                          <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                            <h6>Day 2</h6>
                            <span className="timeline-event-time">
                              45 min ago
                            </span>
                          </div>
                          <p>Project meeting with john @10:15am.</p>
                          <div className="d-flex flex-row align-items-center">
                            <div className="avatar">
                              <img
                                src="../../../app-assets/images/avatars/12-small.png"
                                alt="avatar"
                                height="38"
                                width="38"
                              />
                            </div>
                            <div className="ms-50">
                              <h6 className="mb-0">John Doe (Client)</h6>
                              <span>CEO of Infibeam</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-success timeline-point-indicator"></span>
                        <div className="timeline-event">
                          <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                            <h6>Day 3</h6>
                            <span className="timeline-event-time">
                              2 hours ago
                            </span>
                          </div>
                          <p className="mb-50">
                            Click the button below to read financial reports
                          </p>

                          <div className="collapse" id="collapseExample">
                            <ul className="list-group list-group-flush mt-1">
                              <li className="list-group-item d-flex justify-content-between flex-wrap">
                                <span>
                                  Last Year's Profit :{" "}
                                  <span className="fw-bold">$20000</span>
                                </span>
                                <i
                                  data-feather="share-2"
                                  className="cursor-pointer font-medium-2"
                                ></i>
                              </li>
                              <li className="list-group-item d-flex justify-content-between flex-wrap">
                                <span>
                                  {" "}
                                  This Year's Profit :{" "}
                                  <span className="fw-bold">$25000</span>
                                </span>
                                <i
                                  data-feather="share-2"
                                  className="cursor-pointer font-medium-2"
                                ></i>
                              </li>
                              <li className="list-group-item d-flex justify-content-between flex-wrap">
                                <span>
                                  {" "}
                                  Last Year's Commission :{" "}
                                  <span className="fw-bold">$5000</span>
                                </span>
                                <i
                                  data-feather="share-2"
                                  className="cursor-pointer font-medium-2"
                                ></i>
                              </li>
                              <li className="list-group-item d-flex justify-content-between flex-wrap">
                                <span>
                                  {" "}
                                  This Year's Commission :{" "}
                                  <span className="fw-bold">$7000</span>
                                </span>
                                <i
                                  data-feather="share-2"
                                  className="cursor-pointer font-medium-2"
                                ></i>
                              </li>
                              <li className="list-group-item d-flex justify-content-between flex-wrap">
                                <span>
                                  {" "}
                                  This Year's Total Balance :{" "}
                                  <span className="fw-bold">$70000</span>
                                </span>
                                <i
                                  data-feather="share-2"
                                  className="cursor-pointer font-medium-2"
                                ></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-warning timeline-point-indicator"></span>
                        <div className="timeline-event">
                          <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                            <h6 className="mb-50">Day 4</h6>
                            <span className="timeline-event-time">
                              03:00 PM
                            </span>
                          </div>
                          <p>
                            Have to interview Katy Turner for the developer job.
                          </p>

                          <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                            <div className="d-flex flex-row align-items-center">
                              <div className="avatar me-1">
                                <img
                                  src="../../../app-assets/images/avatars/1-small.png"
                                  alt="Avatar"
                                  height="32"
                                  width="32"
                                />
                              </div>
                              <span>
                                <p className="mb-0">Katy Turner</p>
                                <span className="text-muted">
                                  Javascript Developer
                                </span>
                              </span>
                            </div>
                            <div className="d-flex align-items-center cursor-pointer mt-sm-0 mt-50">
                              <i
                                data-feather="message-square"
                                className="me-1"
                              ></i>
                              <i data-feather="phone-call"></i>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-danger timeline-point-indicator"></span>
                        <div className="timeline-event">
                          <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                            <h6>Day 5</h6>
                            <span className="timeline-event-time">03:00PM</span>
                          </div>
                          <p>
                            Develop an online store of electronic devices for
                            the provided layout, as well as develop a mobile
                            version of it. The must be compatible with any CMS.
                          </p>
                          <div className="d-flex justify-content-between flex-wrap flex-sm-row flex-column">
                            <div>
                              <p className="text-muted mb-50">Developers</p>
                              <div className="d-flex align-items-center">
                                <div className="avatar bg-light-primary avatar-sm me-50">
                                  <span className="avatar-content">A</span>
                                </div>
                                <div className="avatar bg-light-success avatar-sm me-50">
                                  <span className="avatar-content">B</span>
                                </div>
                                <div className="avatar bg-light-danger avatar-sm">
                                  <span className="avatar-content">C</span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-sm-0 mt-1">
                              <p className="text-muted mb-50">Deadline</p>
                              <p className="mb-0">20 Dec 2077</p>
                            </div>
                            <div className="mt-sm-0 mt-1">
                              <p className="text-muted mb-50">Budget</p>
                              <p className="mb-0">$50000</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-info timeline-point-indicator"></span>
                        <div className="timeline-event">
                          <div className="d-flex justify-content-between align-items-center mb-50">
                            <h6>Designing UI</h6>
                            <div>
                              <span className="badge rounded-pill badge-light-primary">
                                Design
                              </span>
                            </div>
                          </div>
                          <p>
                            Our main goal is to design a new mobile application
                            for our client. The customer wants a clean & flat
                            design.
                          </p>
                          <div>
                            <span className="text-muted">Participants</span>
                            <div className="avatar-group mt-50">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="bottom"
                                title="Vinnie Mostowy"
                                className="avatar pull-up"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height="30"
                                  width="30"
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="bottom"
                                title="Elicia Rieske"
                                className="avatar pull-up"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height="30"
                                  width="30"
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="bottom"
                                title="Julee Rossignol"
                                className="avatar pull-up"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-10.jpg"
                                  alt="Avatar"
                                  height="30"
                                  width="30"
                                />
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
