import { Link } from "react-router-dom";
const PackageCard = ({ index, packageData }) => {
  return (
    <>
      <Link to={`/package/detail/${packageData._id}`}>
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
      </Link>
    </>
  );
};
export default PackageCard;
