import React, { useState, useEffect } from "react";
import { UserService } from "../../../repositories";
import { Alert } from "../../components";
const ChangePassword = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    newPassword: "",
    currentPassword: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    // Handle form submission logic here
    UserService.updatePassword(formData)
      .then(() => {
        setErrors({});

        Alert("success", `Password has been changed  successfully.`);

        // Optionally, you can redirect or perform other actions after successful addition
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
          <h3>Change Password</h3>
          <div className="account-details-form">
            <div className="accForm" action="#">
              <legend>Password change</legend>
              <div className="single-input-item mb-3">
                <label for="current-pwd" className="required mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Current Password"
                />
                {errors && errors.hasOwnProperty("currentPassword") && (
                  <span className="alert alert-danger" role="alert">
                    {errors.currentPassword}
                  </span>
                )}
              </div>
              <div className="row">
                <div className="col-lg-12 col-custom">
                  <div className="single-input-item mb-3">
                    <label for="new-pwd" className="required mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="new-pwd"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      placeholder="New Password"
                    />
                    {errors && errors.hasOwnProperty("newPassword") && (
                      <span className="alert alert-danger" role="alert">
                        {errors.newPassword}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="single-input-item single-item-button">
                <button
                  onClick={handleSubmit}
                  className="btn flosun-button secondary-btn theme-color  rounded-0"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChangePassword;
