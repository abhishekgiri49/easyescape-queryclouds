import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaTrash } from "react-icons/fa";
import { ItineraryService } from "../../../repositories";
import "../../../assets/css/pages/app-invoice.css";
import { Breadcrumb, DataTable, Alert } from "../../components";
const Itinerary = () => {
  const [rows, setRows] = useState({});
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setFormData({});
    setErrors({});
  };
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

  const handleSubmit = () => {
    formData.packageId = packageId;
    ItineraryService.create(formData)
      .then(() => {
        fetchPackageDetails();
        handleClose();
        Alert("success", `Itinerary has been created successfully`);

        // Optionally, you can redirect or perform other actions after successful addition
      })
      .catch((error) => {
        handleErrors(error);
      });

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
      setErrorMessage("Error performing. Please try again.");
    }
  };
  const handleDeleteItem = (id) => {
    ItineraryService.delete(id)
      .then(() => {
        fetchPackageDetails();
        Alert("success", `Itinerary has been deleted successfully`);
        handleClose();
      })
      .catch((error) => {});
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class=" center">Travel Itinerary</h2>
            </div>
          </div>
        </div>
        <div class="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
          <div class="mb-1 breadcrumb-right">
            <Button variant="primary" onClick={handleShow} className="me-2">
              Add Itinerary
            </Button>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th class="py-1">Day</th>
              <th class="py-1">Stay Place</th>
              <th class="py-1">Stay description</th>

              <th class="py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 &&
              rows.map((item, index) => (
                <tr class="border-bottom" key={index}>
                  <td class="py-1">
                    <p class="card-text fw-bold mb-25">{item.dayCount}</p>
                  </td>
                  <td class="py-1">
                    <p class="card-text fw-bold mb-25">{item.stay}</p>
                  </td>
                  <td class="py-1">
                    <p class="card-text fw-bold mb-25">{item.title}</p>
                  </td>

                  <td class="py-1">
                    <FaTrash onClick={() => handleDeleteItem(item._id)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Update Itinerary</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div id="addNewAddressForm" className="row gy-1 gx-2">
            <div className="col-12">
              <label className="form-label">Stay Description *</label>
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
              <label className="form-label">Days number</label>
              <input
                type="number"
                name="dayCount"
                value={formData.dayCount}
                onChange={handleChange}
                className="form-control"
              />
              {errors && errors.hasOwnProperty("dayCount") && (
                <span className="alert alert-danger" role="alert">
                  {errors.dayCount}
                </span>
              )}
            </div>
            <div className="col-12">
              <label className="form-label">Stay Place</label>
              <input
                type="text"
                name="stay"
                value={formData.stay}
                onChange={handleChange}
                className="form-control"
              />
              {errors && errors.hasOwnProperty("stay") && (
                <span className="alert alert-danger" role="alert">
                  {errors.stay}
                </span>
              )}
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
                onClick={handleClose}
              >
                Discard
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default Itinerary;
