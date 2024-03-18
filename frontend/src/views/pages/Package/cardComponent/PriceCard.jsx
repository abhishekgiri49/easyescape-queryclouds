import React, { useState, useEffect } from "react";

const PriceCard = ({ packageInfo, onChange }) => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const costPerPerson = packageInfo.discountedCost;
  const grossAmount = numberOfPeople * costPerPerson;
  const totalTax = grossAmount * 0.13; // 13% tax rate
  const totalAmount = (grossAmount + totalTax).toFixed(2);

  useEffect(() => {
    try {
      onChange({
        numberOfPeople: numberOfPeople,
        grossAmount: grossAmount,
        totalAmount: totalAmount,
        totalTax: totalTax,
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  }, [numberOfPeople, packageInfo.discountedCost]);
  const handleChangeCount = (status) => {
    if (status === "plus") {
      setNumberOfPeople(numberOfPeople + 1);
    } else {
      if (numberOfPeople > 1) {
        setNumberOfPeople(numberOfPeople - 1);
      }
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Price Details</h5>
      </div>
      <div className="card-body">
        <ul className="list-unstyled price-details">
          <li className="price-detail">
            <div className="details-title" style={{ paddingTop: "20px" }}>
              Number of People
            </div>
            <div className="detail-amt">
              <div className="quantity">
                <button
                  className="minus"
                  aria-label="Decrease"
                  onClick={() => handleChangeCount("minus")} // Changed here
                >
                  &minus;
                </button>
                <input
                  type="number"
                  className="input-box"
                  value={numberOfPeople}
                  min="1"
                  disabled
                />
                <button
                  className="plus"
                  aria-label="Increase"
                  onClick={() => handleChangeCount("plus")} // Changed here
                >
                  &#43;
                </button>
              </div>
            </div>
          </li>
          <li className="price-detail">
            <div className="details-title">Cost Per Person</div>
            <div className="detail-amt">
              <strong>${costPerPerson}</strong>
            </div>
          </li>
        </ul>
        <hr />
        <ul className="list-unstyled price-details">
          <li className="price-detail">
            <div className="details-title">Amount Payable</div>
            <div className="detail-amt fw-bolder">${grossAmount}</div>
          </li>
          <li className="price-detail">
            <div className="details-title">Tax (13%)</div>
            <div className="detail-amt fw-bolder">${totalTax}</div>
          </li>
          <li className="price-detail">
            <div className="details-title">Total Including Tax</div>
            <div className="detail-amt fw-bolder">${totalAmount}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;
