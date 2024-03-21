import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { ItineraryService } from "../../../../repositories";

const PackageInfoCard = ({ index, packageData }) => {
  const [rows, setRows] = useState({});
  const { packageId } = useParams();
  useEffect(() => {
    // Fetch blog details  when the component mounts
    fetchPackageDetails();
  }, [packageId]);

  const fetchPackageDetails = () => {
    // Fetch blog details based on the id
    ItineraryService.find(packageId)
      .then((data) => {
        setRows(data);
      })
      .catch((error) => {
        console.error("Error fetching package details:", error);
      });
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <section className="basic-timeline">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h1>{packageData.title}</h1>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h1>Trip Description</h1>
                  </div>
                  <div className="card-body">
                    {packageData && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: packageData.content,
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h1>Trip Included</h1>
                  </div>
                  <div className="card-body">
                    <ul className="two-column-list">
                      {packageData.travelIncluded &&
                        packageData.travelIncluded.map((item, index) => (
                          <li>{item}</li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h1>How your trip will look like</h1>
                  </div>
                  <div className="card-body">
                    <ul className="timeline">
                      {rows.length > 0 &&
                        rows.map((item, index) => (
                          <li className="timeline-item">
                            <span className="timeline-point timeline-point-danger timeline-point-indicator"></span>
                            <div class="col-md-4 col-md-8 col-lg-12 col-md-6">
                              <div class="card card-developer-meetup">
                                <div class="card-body">
                                  <div class="meetup-header d-flex align-items-center">
                                    <div class="meetup-day col-md-0 col-md-2 display-inline">
                                      <h6 class="mb-0">DAY</h6>
                                      <h3 class="mb-0">{item.dayCount}</h3>
                                    </div>
                                    <div class="meetup-day col-md-0 col-md-5">
                                      <p class="card-text mb-0">{item.stay}</p>
                                    </div>
                                    <div class="meetup-day col-md-0 col-md-5">
                                      <p class="card-text mb-0">{item.title}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
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
