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
  const Title = "Category";
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState(
    initialFormData || {
      _id: "",
      title: "",
      description: "",
      status: "",
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
    const finalFormData = new FormData();
    finalFormData.append("title", formData.title);
    finalFormData.append("description", formData.description);
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
              <label className="form-label">Description</label>
              <textarea
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
              />
              {errors && errors.hasOwnProperty("description") && (
                <span className="alert alert-danger" role="alert">
                  {errors.description}
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
