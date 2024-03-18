import React, { useState, useEffect } from "react";
const ContactCard = ({ onChange, errors }) => {
  const [formData, setFormData] = useState({
    departureDate: "",
    returnDate: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    try {
      onChange(formData);
    } catch (error) {
      console.log("Error: ", error);
    }
  }, [formData]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="card">
      <div className="card-header flex-column align-items-start">
        <h5 className="card-title">Please enter contact details</h5>
        <p className="card-text text-muted mt-25">
          Enter your contact details to complete the payment process.
        </p>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="mb-2">
              <label className="form-label" for="checkout-name">
                Departure Date:
              </label>
              <input
                type="date"
                id="checkout-name"
                className="form-control"
                name="departureDate"
                min="2024-01-01"
                value={formData.departureDate}
                onChange={handleChange}
              />
              {errors && errors.hasOwnProperty("departureDate") && (
                <span className="alert alert-danger" role="alert">
                  {errors.departureDate}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="mb-2">
              <label className="form-label" cfor="checkout-number">
                Return Date:
              </label>
              <input
                type="date"
                id="checkout-number"
                className="form-control"
                name="returnDate"
                min="2024-01-01"
                value={formData.returnDate}
                onChange={handleChange}
              />
              {errors && errors.hasOwnProperty("returnDate") && (
                <span className="alert alert-danger" role="alert">
                  {errors.returnDate}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="mb-2">
              <label className="form-label" for="checkout-name">
                Email:
              </label>
              <input
                type="text"
                id="checkout-name"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@gmail.com"
              />
              {errors && errors.hasOwnProperty("email") && (
                <span className="alert alert-danger" role="alert">
                  {errors.email}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="mb-2">
              <label className="form-label" cfor="checkout-number">
                Mobile Number:
              </label>
              <input
                type="number"
                id="checkout-number"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0123456789"
              />
              {errors && errors.hasOwnProperty("phone") && (
                <span className="alert alert-danger" role="alert">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;
