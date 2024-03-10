import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PackageService, TripService } from "../../../repositories";
import { useHomeContext } from "../../pages/layouts/HomeLayout";
import "../../../assets/css/pages/page-profile.css";
import "../../../assets/css/components.css";
import "../../../assets/css/components.min.css";
import {
  PackageInfoCard,
  ContactCard,
  SpecialRequest,
  PriceCard,
  PaymentCard,
} from "../../../views";
const PackageDetail = () => {
  const navigate = useNavigate();
  const { user, userAuthenticated } = useHomeContext();
  const [packageDetail, setPackageDetail] = useState({});
  const [processOrder, setProcessOrder] = useState(false);

  const [errors, setErrors] = useState({});
  const { packageId } = useParams();
  const [formData, setFormData] = useState({
    _id: null,
    bookingDate: "",
    numberOfPeople: "",
    totalAmount: "",
    grossAmount: "",
    email: "",
    phone: "",
    totalTax: "",
    bookingStatus: "",
    specialRequest: "",
    departureInDate: "",
    returnDate: "",
    paymentMethod: "",
    paymentStatus: "",
    packageId: "",
    userId: "",
  });
  useEffect(() => {
    // Fetch blog details  when the component mounts
    fetchPackageDetails();
  }, [packageId]);
  useEffect(() => {
    // Check for orderId in URL and set processOrder accordingly
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("orderId");
    if (orderId) {
      setProcessOrder(true);
    }
  }, []);

  const fetchPackageDetails = () => {
    // Fetch blog details based on the id
    PackageService.find(packageId)
      .then((data) => {
        setPackageDetail(data);
      })
      .catch((error) => {
        console.error("Error fetching package details:", error);
      });
  };
  const handleFilters = (data) => {
    setFormData({
      ...formData,
      ...data,
    });
  };
  const handleOrderSubmit = () => {
    formData.packageId = packageDetail._id;
    formData.userId = user._id;
    TripService.create(formData)
      .then((response) => {
        console.log(response);
        setErrors({});
        setProcessOrder(true);
        navigate(`/package/detail/${packageId}?orderId=${response._id}`);
        // Optionally, you can redirect or perform other actions after successful update
      })
      .catch((error) => {
        handleErrors(error);
      });
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
      <div className="content-wrapper container-xxl p-1">
        <div className="content-detached">
          <div className="content-body">
            <div id="user-profile">
              <div className="row">
                <div className="col-12">
                  <div className="card profile-header mb-2">
                    <img
                      className="card-img-top"
                      src={`/src/assets/uploads/packages/${
                        packageDetail.image || "default_package.jpg"
                      }`}
                      alt="Package Image"
                    />
                  </div>
                </div>
              </div>

              <section id="profile-info">
                <div className="row">
                  <div className="col-lg-8 col-12 order-1 order-lg-2">
                    <PackageInfoCard />
                  </div>

                  <div className="col-lg-4 col-12 order-3">
                    <div class="amount-payable checkout-options">
                      {userAuthenticated && !processOrder && (
                        <PriceCard
                          packageInfo={packageDetail}
                          onChange={handleFilters}
                        />
                      )}

                      {userAuthenticated && processOrder && <PaymentCard />}
                      {userAuthenticated && !processOrder && (
                        <ContactCard onChange={handleFilters} errors={errors} />
                      )}
                      {userAuthenticated && !processOrder && (
                        <SpecialRequest onChange={handleFilters} />
                      )}
                      {userAuthenticated && !processOrder && (
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-12">
                                {userAuthenticated ? (
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-next delivery-address"
                                    onClick={handleOrderSubmit}
                                  >
                                    Proceed Payments
                                  </button>
                                ) : (
                                  <Link
                                    to="/login"
                                    className="btn btn-primary btn-next delivery-address"
                                  >
                                    Login to Proceed Payments
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
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

export default PackageDetail;
