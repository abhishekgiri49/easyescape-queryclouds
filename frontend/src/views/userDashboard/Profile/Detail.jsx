import { useUserDashboardContext } from "../../pages/layouts/UserDashboardLayout";
import React, { useState, useEffect } from "react";
import { UserService } from "../../../repositories";
import { Alert } from "../../components";
const Detail = () => {
  const { user } = useUserDashboardContext();
  const [errors, setErrors] = useState({});
  const [row, setRow] = useState({});
  const [formData, setFormData] = useState({
    _id: null,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
  });
  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    UserService.find(user._id).then((data) => {
      const { firstName, lastName, username, email, phoneNumber } = data;
      setFormData({
        firstName,
        lastName,
        username,
        email,
        phoneNumber,
      });
    });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    // Handle form submission logic here
    UserService.updateProfile(user._id, formData)
      .then(() => {
        setErrors({});

        Alert("success", `User data has been updated successfully`);
        fetchUserList();

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
      <div id="account-info" role="tabpanel">
        <div className="myaccount-content">
          <h3>Account Details</h3>
          <div className="account-details-form">
            <div className="accForm" action="#">
              <div className="row">
                <div className="col-lg-6 col-custom">
                  <div className="single-input-item mb-3">
                    <label for="first-name" className="required mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                    />
                    {errors && errors.hasOwnProperty("firstName") && (
                      <span className="alert alert-danger" role="alert">
                        {errors.firstName}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-custom">
                  <div className="single-input-item mb-3">
                    <label for="last-name" className="required mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                    />
                    {errors && errors.hasOwnProperty("lastName") && (
                      <span className="alert alert-danger" role="alert">
                        {errors.lastName}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="single-input-item mb-3">
                <label for="Username" className="required mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="phone"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="958-472-0987"
                />
                {errors && errors.hasOwnProperty("username") && (
                  <span className="alert alert-danger" role="alert">
                    {errors.username}
                  </span>
                )}
              </div>
              <div className="single-input-item mb-3">
                <label for="phone" className="required mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="958-472-0987"
                />
                {errors && errors.hasOwnProperty("phoneNumber") && (
                  <span className="alert alert-danger" role="alert">
                    {errors.phoneNumber}
                  </span>
                )}
              </div>
              <div className="single-input-item mb-3">
                <label for="email" className="required mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
                {errors && errors.hasOwnProperty("email") && (
                  <span className="alert alert-danger" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="single-input-item single-item-button">
                <button
                  onClick={handleSubmit}
                  className="btn flosun-button secondary-btn theme-color  rounded-0"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
