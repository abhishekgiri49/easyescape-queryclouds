import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { ItineraryService } from "../../../../repositories";
const PackageCard = ({ index, packageData }) => {
  const [rows, setRows] = useState({});
  const [counts, setCounts] = useState({});

  useEffect(() => {
    // Fetch blog details  when the component mounts
    fetchPackageDetails();
  }, [packageData]);

  useEffect(() => {
    // Iterate over the array to count occurrences
    const countsObject = {};
    const rowsArray = Object.values(rows); // Convert object values to an array
    for (let i = 0; i < rowsArray.length; i++) {
      const stay = rowsArray[i].stay;
      countsObject[stay] = (countsObject[stay] || 0) + 1;
    }
    setCounts(countsObject);
  }, [rows]);
  const fetchPackageDetails = () => {
    // Fetch blog details based on the id
    ItineraryService.find(packageData._id)
      .then((data) => {
        setRows(data);
      })
      .catch((error) => {
        console.error("Error fetching package details:", error);
      });
  };
  return (
    <>
      <Link to={`/package/detail/${packageData._id}`}>
        {" "}
        <div className="card">
          <img
            className="card-img-top"
            src={`/src/assets/uploads/packages/${
              packageData.image || "default_package.jpg"
            }`}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-title">
              {packageData.title}{" "}
              <span className="selected">{packageData.duration}</span>
              <h1 className="mb-3 text-primary fw-bolder fs-4">
                <span>
                  {packageData.discountedCost
                    ? packageData.discountedCost
                    : packageData.actualCost}
                </span>
                <span className="text-900 fs--1 fw-normal">/Per person</span>
              </h1>
            </p>
            <p className="card-text single-line-list">
              {Object.keys(counts).map((stay, index) => (
                <div key={index}>
                  <span>
                    {counts[stay]}N {stay}
                  </span>
                </div>
              ))}
            </p>
          </div>
          <ul className="two-column-list">
            {packageData.travelIncluded &&
              packageData.travelIncluded.map((item, index) => <li>{item}</li>)}
          </ul>
        </div>
      </Link>
    </>
  );
};
export default PackageCard;
