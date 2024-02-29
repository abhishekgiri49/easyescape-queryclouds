import { useState } from "react";
import { Logo, FormRow } from "../../components";
import { Link } from "react-router-dom";
import "../../../assets/css/pages/authentication.css";
import { AuthService } from "../../../repositories";
import { useNavigate } from "react-router-dom";
import { AuthUser } from "./../../../helper/AuthUser";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState();
  const submitForm = () => {
    const formData = { email };

    AuthService.forgotPassword(formData)
      .then((res) => {
        setErrors({});
        // Optionally, you can redirect or perform other actions after successful addition
      })
      .catch((error) => {
        setErrorMessage("Error sending reset link. Please try again.");
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
                  <h2 class="card-title fw-bold mb-1">Forgot Password? 🔒</h2>
                  <p class="card-text mb-2">
                    Enter your email and we'll send you instructions to reset
                    your password
                  </p>
                  {errorMessage && <>{errorMessage}</>}
                  {successMessage && <>{successMessage}</>}

                  <FormRow
                    type="email"
                    name="email"
                    labeltext="Email"
                    placeholder="e.g. john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.hasOwnProperty("email") ? errors.email : ""}
                  />

                  <button
                    className="btn btn-primary w-100"
                    onClick={submitForm}
                    tabIndex="4"
                  >
                    Send Reset Link
                  </button>

                  <p className="text-center mt-2">
                    <span>Already have an account? &nbsp;</span>
                    <Link to="/login" className="member-btn">
                      Sign in instead
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
export default ForgotPassword;
