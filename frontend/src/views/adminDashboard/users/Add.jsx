// Modal.jsx

import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
const Add = ({
  editMode,
  initialFormData,
  onClose,
  onSubmit,
  errors,
  show,
}) => {
  const [formData, setFormData] = useState(
    initialFormData || {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      role: "User",
    }
  );
  useEffect(() => {
    if (initialFormData && editMode) {
      setFormData(initialFormData);
    }
  }, [initialFormData, editMode]);
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
    <>
      <Modal size="lg" show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Edit User" : "Add New User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="addNewAddressForm" className="row gy-1 gx-2">
            <div className="col-12 col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                data-msg="Please enter your first name"
              />
              {errors && errors.hasOwnProperty("firstName") && (
                <span className="alert alert-danger" role="alert">
                  {errors.firstName}
                </span>
              )}
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                data-msg="Please enter your last name"
              />
              {errors && errors.hasOwnProperty("lastName") && (
                <span className="alert alert-danger" role="alert">
                  {errors.lastName}
                </span>
              )}
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                placeholder="abc@123"
              />
              {errors && errors.hasOwnProperty("username") && (
                <span className="alert alert-danger" role="alert">
                  {errors.username}
                </span>
              )}
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="form-control"
                placeholder="123456789"
              />
              {errors && errors.hasOwnProperty("phoneNumber") && (
                <span className="alert alert-danger" role="alert">
                  {errors.phoneNumber}
                </span>
              )}
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="abc@example.com"
              />
              {errors && errors.hasOwnProperty("email") && (
                <span className="alert alert-danger" role="alert">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
              />
              {errors && errors.hasOwnProperty("password") && (
                <span className="alert alert-danger" role="alert">
                  {errors.password}
                </span>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
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
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
