import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../../components";
import { Link, useLocation } from "react-router-dom";
import "../../../assets/css/pages/authentication.css";
import { AuthService } from "../../../repositories";
import { useNavigate } from "react-router-dom";
import { AuthUser } from "./../../../helper/AuthUser";
const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const [token, setToken] = useState(null);
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setToken(searchParams.get("token"));
  }, [location.search]);
  const submitForm = () => {
    const formData = { token, newPassword, confirmPassword };

    AuthService.resetPassword(formData)
      .then((res) => {
        setErrors({});
        navigate("/login");
        Alert("success", res.data.message);
        // Optionally, you can redirect or perform other actions after successful addition
      })
      .catch((error) => {
        Alert("error", error.data.message);
      });
    // api call
  };
  return (
    <div className=" ">
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <div className="auth-wrapper auth-basic px-2">
            <div className="auth-inner my-2">
              <div className="card mb-0">
                <div className="card-body">
                  <Link to="/" className="brand-logo">
                    <h2 className="brand-text text-primary ms-1">
                      <Logo />
                    </h2>
                  </Link>
                  <h3 className="">Reset Password 🔒</h3>
                  <p className="card-text mb-2">
                    Your new password must be different from previously used
                    passwords
                  </p>
                  {errorMessage && <>{errorMessage}</>}
                  {successMessage && <>{successMessage}</>}
                  <div className="mb-1">
                    <FormRow
                      type="password"
                      name="newPassword"
                      labeltext="New Password"
                      placeholder="123456"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      error={
                        errors.hasOwnProperty("newPassword")
                          ? errors.newPassword
                          : ""
                      }
                    />
                  </div>
                  <div className="mb-1">
                    <FormRow
                      type="password"
                      name="confirmPassword"
                      labeltext="Confirm Password"
                      placeholder="123456"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      error={
                        errors.hasOwnProperty("confirmPassword")
                          ? errors.newPassword
                          : ""
                      }
                    />
                  </div>
                  <button
                    className="btn btn-primary w-100"
                    onClick={submitForm}
                    tabIndex="4"
                  >
                    Set New Password
                  </button>

                  <p className="text-center mt-2">
                    <Link to="/login" className="member-btn">
                      Back to login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
