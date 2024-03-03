// Modal.jsx

import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { CategoryService } from "../../../repositories";
const Add = ({
  editMode,
  initialFormData,
  onClose,
  onSubmit,
  errors,
  show,
}) => {
  const Title = "Place";
  const [file, setFile] = useState(null);
  const [options, setOptions] = useState([]);
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState(
    initialFormData || {
      _id: "",
      name: "",
      country: "",
      categoryId: "",
      status: "",
    }
  );
  useEffect(() => {
    fetchCategoryList();
    fetchCountryList();
    if (initialFormData && editMode) {
      initialFormData.categoryId = initialFormData.category._id;
      setFormData(initialFormData);
    }
  }, [initialFormData, editMode]);
  const fetchCategoryList = () => {
    CategoryService.get().then((data) => {
      setOptions(data);
    });
  };
  const fetchCountryList = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countries = response.data;
        const countryNames = countries.map((country) => country.name.common);
        const sortedArray = countryNames.sort();
        setCountries(sortedArray);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const finalFormData = new FormData();
    finalFormData.append("name", formData.name);
    finalFormData.append("country", formData.country);
    finalFormData.append("categoryId", formData.categoryId);
    finalFormData.append("status", formData.status);
    finalFormData.append("image", file); // Assuming you have a 'file' state for the selected image
    // Handle form submission logic here
    onSubmit(finalFormData);
  };

  return (
    <>
      <Modal size="lg" show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editMode ? `Edit ${Title}` : `Add New ${Title}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="addNewAddressForm" className="row gy-1 gx-2">
            <div className="col-12">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
              {errors && errors.hasOwnProperty("name") && (
                <span className="alert alert-danger" role="alert">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="col-12">
              <label className="form-label">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select a country</option>
                {countries &&
                  countries.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
              {errors && errors.hasOwnProperty("country") && (
                <span className="alert alert-danger" role="alert">
                  {errors.country}
                </span>
              )}
            </div>
            <div className="col-12">
              <label className="form-label">Category</label>
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select a category</option>
                {options &&
                  options.map((option) => (
                    <option key={option._id} value={option._id}>
                      {option.title}
                    </option>
                  ))}
              </select>
              {errors && errors.hasOwnProperty("category") && (
                <span className="alert alert-danger" role="alert">
                  {errors.category}
                </span>
              )}
            </div>
            <div className="col-12">
              <label className="form-label">Status</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="1"
                    checked={formData.status === "1"}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  Active
                </label>
                &nbsp;
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="0"
                    checked={formData.status === "0"}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  Inactive
                </label>
              </div>

              {errors && errors.hasOwnProperty("status") && (
                <span className="alert alert-danger" role="alert">
                  {errors.status}
                </span>
              )}
            </div>
            <div className="col-12">
              <label className="form-label">Image</label>
              <input
                type="file"
                name="image"
                onChange={(e) => setFile(e.target.files[0])}
                className="form-control"
              />
              {errors && errors.hasOwnProperty("image") && (
                <span className="alert alert-danger" role="alert">
                  {errors.image}
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
