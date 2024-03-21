import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { PackageService } from "../../../repositories";
import "../../../assets/css/pages/app-invoice.css";
import { Breadcrumb, DataTable, Alert } from "../../components";
import { PackageTags, PackageItinerary } from "../../../views";
const Detail = () => {
  const [packageDetail, setPackageDetail] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Title = "Package";
  const { packageId } = useParams();
  const breadcrumb = [
    { path: "/packages", name: `${Title} List` },
    { name: `${packageDetail.title}` },
  ];
  useEffect(() => {
    // Fetch blog details  when the component mounts
    fetchPackageDetails();
  }, [packageId]);
  const fetchPackageDetails = () => {
    // Fetch blog details based on the id
    PackageService.find(packageId)
      .then((data) => {
        setPackageDetail(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching package details:", error);
        setErrorMessage("Error fetching package details. Please try again.");
      });
  };
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header row">
          <div className="content-header-left col-md-9 col-12 mb-2">
            <Breadcrumb routes={breadcrumb} title={`${Title} Management`} />
          </div>
        </div>
        <div class="content-body">
          <section class="invoice-preview-wrapper">
            <div class="row invoice-preview">
              <div class="col-xl-12 col-md-12 col-12">
                <div class="card invoice-preview-card">
                  <div class="card-body invoice-padding pb-0">
                    <div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">
                      <img
                        class="card-img-top"
                        src={`/src/assets/uploads/packages/${
                          packageDetail.image || "default_package.jpg"
                        }`}
                        alt="Package Image"
                      />
                    </div>
                  </div>

                  <hr class="invoice-spacing" />

                  <div class="card-body invoice-padding pt-0">
                    <div class="row invoice-spacing">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: packageDetail.content,
                        }}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-6 col-md-6 col-6">
                      <PackageTags />
                    </div>
                    <div class="col-xl-6 col-md-6 col-6">
                      <PackageItinerary />
                    </div>
                  </div>

                  <div class="card-body invoice-padding pb-0">
                    <div class="row invoice-sales-total-wrapper">
                      <div class="col-md-6 order-md-1 order-2 mt-md-0 mt-3">
                        <p class="card-text mb-0">
                          <span class="fw-bold">Duration:</span>{" "}
                          <span class="ms-75">{packageDetail.duration}</span>
                        </p>
                        <p class="card-text mb-0">
                          <span class="fw-bold">Is Flight Available:</span>{" "}
                          <span class="ms-75">
                            {packageDetail.isFlightAvailable == 1
                              ? "Yes"
                              : "No"}
                          </span>
                        </p>
                        <p class="card-text mb-0">
                          <span class="fw-bold">Status:</span>{" "}
                          <span class="ms-75">
                            {packageDetail.status == 1 ? "Active" : "Inactive"}
                          </span>
                        </p>
                      </div>
                      <div class="col-md-6 d-flex justify-content-end order-md-2 order-1">
                        <div class="invoice-total-wrapper">
                          <div class="invoice-total-item">
                            <p class="invoice-total-title">Actual Price:</p>
                            <p class="invoice-total-amount">
                              ${packageDetail.actualCost}
                            </p>
                          </div>
                          <div class="invoice-total-item">
                            <p class="invoice-total-title">Discounted Price:</p>
                            <p class="invoice-total-amount">
                              ${packageDetail.discountedCost || "-"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="invoice-spacing" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Detail;
