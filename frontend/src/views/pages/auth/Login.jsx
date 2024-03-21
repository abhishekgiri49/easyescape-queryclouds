import { useState } from "react";
import { Logo, FormRow, Alert } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import "../../../assets/css/pages/authentication.css";
import { AuthService } from "../../../repositories";
import { AuthUser } from "./../../../helper/AuthUser";
const Login = () => {
  const navigate = useNavigate();
  const { setToken } = AuthUser();
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const submitForm = () => {
    const loginData = { email, password };

    AuthService.login(loginData)
      .then((res) => {
        setErrors({});
        setToken(res.data.user, res.data.token);
        if (res.data.user.role == "Admin") {
          window.location.href = "/admin/dashboard";
        } else {
          window.location.href = "/";
        }

        // Optionally, you can redirect or perform other actions after successful addition
      })
      .catch((error) => {
        if (error.status === 422) {
          const newErrors = {};
          error.data.data.forEach((item) => {
            const fieldName = item.path;
            const errorMsg = item.msg;
            newErrors[fieldName] = errorMsg;
          });
          setErrors(newErrors);
        } else {
          Alert("error", error.data.message);
        }
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

                  <p className="card-text mb-2">
                    Please sign-in to your account and start the adventure
                  </p>

                  <FormRow
                    type="email"
                    name="email"
                    labeltext="Email"
                    placeholder="e.g. john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.hasOwnProperty("email") ? errors.email : ""}
                  />

                  <FormRow
                    type="password"
                    name="password"
                    labeltext="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={
                      errors.hasOwnProperty("password") ? errors.password : ""
                    }
                  />

                  <button
                    className="btn btn-primary w-100"
                    onClick={submitForm}
                    tabIndex="4"
                  >
                    Sign in
                  </button>
                  <p className="text-center mt-2">
                    <Link to="/forgot-password" className="member-btn">
                      Forgot password?
                    </Link>
                  </p>
                  <br></br>
                  <p className="text-center mt-2">
                    <span>New on our platform?&nbsp;</span>
                    <Link to="/register" className="member-btn">
                      Create an account
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
export default Login;
