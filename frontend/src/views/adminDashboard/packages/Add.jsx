// Modal.jsx

import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { CategoryService, PlaceService } from "../../../repositories";
import { CKEditorComponent, Breadcrumb } from "../../components";
import { PackageService } from "../../../repositories";
const Add = () => {
  const Title = "Package";
  const [editMode, setEditMode] = useState(false);
  const [file, setFile] = useState(null);
  const [content, setContent] = useState(null);
  const [place, setPlace] = useState([]);
  const [category, setCategory] = useState([]);
  const breadcrumb = [
    { path: "/packages", name: `${Title} List` },
    { name: `Add` },
  ];
  const [errors, setErrors] = useState({});
  const [initialFormData, setInitialFormData] = useState({});
  const [formData, setFormData] = useState({
    _id: "",
    title: "",
    content: "",
    actualCost: "",
    discountedCost: "",
    duration: "",
    isFlightAvailable: "",
    categoryId: "",
    placeId: "",
    status: "",
  });
  useEffect(() => {
    fetchList();
    if (initialFormData && editMode) {
      setContent(initialFormData.content);
      initialFormData.categoryId = initialFormData.category._id;
      initialFormData.placeId = initialFormData.place._id;
      setFormData(initialFormData);
    }
  }, [initialFormData, editMode]);
  const fetchList = () => {
    CategoryService.get().then((data) => {
      setCategory(data);
    });
    PlaceService.get().then((data) => {
      setPlace(data);
    });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };
  const handleSubmit = () => {
    const finalFormData = new FormData();
    finalFormData.append("title", formData.title);
    finalFormData.append("content", content);
    finalFormData.append("actualCost", formData.actualCost);
    finalFormData.append("discountedCost", formData.discountedCost);
    finalFormData.append("duration", formData.duration);
    finalFormData.append("isFlightAvailable", formData.isFlightAvailable);
    finalFormData.append("categoryId", formData.categoryId);
    finalFormData.append("placeId", formData.placeId);
    finalFormData.append("status", formData.status);
    finalFormData.append("image", file); // Assuming you have a 'file' state for the selected image
    // Handle form submission logic here
    handleFormSubmit(finalFormData);
  };
  const handleFormSubmit = (formData) => {
    if (editMode) {
      // If in edit mode, update existing admin
      PackageService.update(initialFormData, formData)
        .then(() => {
          setErrors({});
          Alert("success", `${Title} has been updated successfully`);
          fetchList();
          setEditMode(false);
          // Optionally, you can redirect or perform other actions after successful update
        })
        .catch((error) => {
          handleErrors(error);
        });
    } else {
      // If not in edit mode, create new admin
      PackageService.create(formData)
        .then(() => {
          setErrors({});
          Alert("success", `${Title} data has been created successfully`);
          fetchList();
          // Optionally, you can redirect or perform other actions after successful addition
        })
        .catch((error) => {
          handleErrors(error);
        });
    }
    // Handle form submission logic here
  };
  const handleErrors = (error) => {
    if (error.status === 422) {
      const newErrors = {};
      error.data.data.forEach((item) => {
        const fieldName = item.path;
        const errorMsg = item.msg;
        newErrors[fieldName] = errorMsg;
      });
      setErrors(newErrors);
    } else {
      Alert("error", `Error performing. Please try again.`);
    }
  };
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header row">
          <div className="content-header-left col-md-9 col-12 mb-1">
            <Breadcrumb routes={breadcrumb} title={`${Title} Management`} />
          </div>
          <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
            <div className="mb-1 breadcrumb-right">
              {/* <button
              type="button"
              className="btn btn-primary"
              onClick={handleOpenModal}
            >
              Create New
            </button> */}
              <Link to={`../packages`} className=" btn btn-primary">
                go back
              </Link>
            </div>
          </div>
        </div>
        <div className="content-body">
          <div className="row">
            <div className="col-12">
              <section className="invoice-list-wrapper">
                <div className="card">
                  <div id="addNewAddressForm" className="row gy-1 gx-2">
                    <div className="col-12">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="form-control"
                      />
                      {errors && errors.hasOwnProperty("title") && (
                        <span className="alert alert-danger" role="alert">
                          {errors.title}
                        </span>
                      )}
                    </div>
                    <div className="col-12">
                      <label className="form-label">Content</label>
                      <CKEditorComponent
                        data={content}
                        onChange={handleEditorChange}
                      />
                      {errors && errors.hasOwnProperty("content") && (
                        <span className="alert alert-danger" role="alert">
                          {errors.content}
                        </span>
                      )}
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">
                        Actual Cost(Per person)
                      </label>
                      <input
                        type="number"
                        name="actualCost"
                        value={formData.actualCost}
                        onChange={handleChange}
                        className="form-control"
                      />
                      {errors && errors.hasOwnProperty("actualCost") && (
                        <span className="alert alert-danger" role="alert">
                          {errors.actualCost}
                        </span>
                      )}
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">
                        Discounted Cost(Per person)
                      </label>
                      <input
                        type="number"
                        name="discountedCost"
                        value={formData.discountedCost}
                        onChange={handleChange}
                        className="form-control"
                      />
                      {errors && errors.hasOwnProperty("discountedCost") && (
                        <span className="alert alert-danger" role="alert">
                          {errors.discountedCost}
                        </span>
                      )}
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">Duration</label>
                      <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="form-control"
                      />
                      {errors && errors.hasOwnProperty("duration") && (
                        <span className="alert alert-danger" role="alert">
                          {errors.duration}
                        </span>
                      )}
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">
                        Is flight available ?
                      </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          name="isFlightAvailable"
                          value="1"
                          checked={formData.isFlightAvailable === "1"}
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        Yes
                      </label>
                      &nbsp;
                      <label>
                        <input
                          type="radio"
                          name="isFlightAvailable"
                          value="0"
                          checked={formData.isFlightAvailable === "0"}
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        No
                      </label>
                      {errors && errors.hasOwnProperty("isFlightAvailable") && (
                        <span className="alert alert-danger" role="alert">
                          {errors.isFlightAvailable}
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
                        {category &&
                          category.map((option) => (
                            <option key={option._id} value={option._id}>
                              {option.title}
                            </option>
                          ))}
                      </select>
                      {errors && errors.hasOwnProperty("categoryId") && (
                        <span className="alert alert-danger" role="alert">
                          {errors.categoryId}
                        </span>
                      )}
                    </div>
                    <div className="col-12">
                      <label className="form-label">Place</label>
                      <select
                        name="placeId"
                        value={formData.placeId}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">Select a place</option>
                        {place &&
                          place.map((option) => (
                            <option key={option._id} value={option._id}>
                              {option.name}
                            </option>
                          ))}
                      </select>
                      {errors && errors.hasOwnProperty("placeId") && (
                        <span className="alert alert-danger" role="alert">
                          {errors.placeId}
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
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="btn btn-primary me-1 mt-2"
                    >
                      Submit
                    </button>
                    <Link to={`../packages`} className=" btn btn-primary">
                      go back
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
