// Modal.jsx

import React, { useState } from "react";

const Add = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "superadmin",
    // ... other fields
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    onSubmit(formData);
  };

  return (
    <div
      className="modal fade"
      id="addNewAddressModal"
      tabIndex="-1"
      aria-labelledby="addNewAddressTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-transparent">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body pb-5 px-sm-4 mx-50">
            <h1
              className="address-title text-center mb-1"
              id="addNewAddressTitle"
            >
              Add Admin
            </h1>

            <div id="addNewAddressForm" className="row gy-1 gx-2">
              <div className="col-12 col-md-6">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  id="modalAddressFirstName"
                  name="firstName"
                  className="form-control"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  data-msg="Please enter your first name"
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  id="modalAddressLastName"
                  name="lastName"
                  className="form-control"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  data-msg="Please enter your last name"
                />
              </div>

              <div className="col-12">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  id="modalEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="abc@example.com"
                />
              </div>

              <div className="col-12 text-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary me-1 mt-2"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="btn btn-outline-secondary mt-2"
                  aria-label="Close"
                  onClick={onClose}
                >
                  Discard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
