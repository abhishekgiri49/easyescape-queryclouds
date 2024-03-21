import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaTrash } from "react-icons/fa";
import { PackageService } from "../../../repositories";
import "../../../assets/css/pages/app-invoice.css";
import { Breadcrumb, DataTable, Alert } from "../../components";
const Tags = () => {
  const [packageDetail, setPackageDetail] = useState({});
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState([]);
  const [errors, setErrors] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setValue("");
    setShow(true);
  };
  const { packageId } = useParams();
  useEffect(() => {
    // Fetch blog details  when the component mounts
    fetchPackageDetails();
  }, [packageId]);

  const fetchPackageDetails = () => {
    // Fetch blog details based on the id
    PackageService.find(packageId)
      .then((data) => {
        setPackageDetail(data);
        if (data.travelIncluded !== undefined) {
          setFormData(data.travelIncluded);
        }

        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching package details:", error);
        setErrorMessage("Error fetching package details. Please try again.");
      });
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = () => {
    // Push the new value into the new array
    formData.push(value);
    let newTravelTags = {};
    newTravelTags.travelIncluded = formData;
    // If not in edit mode, create new admin
    PackageService.updatePackageIncluded(packageId, newTravelTags).then(() => {
      fetchPackageDetails();
      handleClose();
      // Optionally, you can redirect or perform other actions after successful addition
    });
    //   .catch((error) => {});

    // Handle form submission logic here
  };
  const handleDeleteItem = (index) => {
    const newTravelIncluded = [...packageDetail.travelIncluded];
    newTravelIncluded.splice(index, 1); // Remove the item at the specified index
    let newTravelTags = {};
    newTravelTags.travelIncluded = newTravelIncluded;
    // If not in edit mode, create new admin
    PackageService.updatePackageIncluded(packageId, newTravelTags).then(() => {
      fetchPackageDetails();

      // Optionally, you can redirect or perform other actions after successful addition
    });
    // Optionally, you can update the server-side data here if needed
  };

  return (
    <>
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class=" center">Travel Included</h2>
            </div>
          </div>
        </div>
        <div class="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
          <div class="mb-1 breadcrumb-right">
            <Button variant="primary" onClick={handleShow} className="me-2">
              Add Item
            </Button>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th class="py-1">Package Included</th>

              <th class="py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {packageDetail &&
              packageDetail.travelIncluded &&
              packageDetail.travelIncluded.map((item, index) => (
                <tr key={index}>
                  <td class="py-1">
                    <p class="card-text fw-bold mb-25">{item}</p>
                  </td>

                  <td class="py-1">
                    <FaTrash onClick={() => handleDeleteItem(index)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add package infos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div id="addNewAddressForm" className="row gy-1 gx-2">
            <div className="col-12">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                value={value}
                onChange={handleChange}
                className="form-control"
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
export default Tags;
