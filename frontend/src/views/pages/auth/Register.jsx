import img from "../../../assets/images/register.svg";
import { useState } from "react";
import { FormRow, Alert } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import "../../../assets/css/pages/authentication.css";
import { AuthService } from "../../../repositories";
const Register = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const registerForm = () => {
    const registerData = {
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      password,
    };

    AuthService.register(registerData)
      .then(() => {
        navigate("/login");
        Alert("success", "Registered successfully");
        setErrors({});
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
          console.log(error);
          Alert("danger", "Server Error");
        }
      });
    // api call
  };
  return (
    <div className="app-content">
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <div className="auth-wrapper auth-cover">
            <div className="auth-inner row m-0">
              <div className="d-none d-lg-flex col-lg-8 align-items-center p-5">
                <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
                  <img className="img-fluid" src={img} alt="Register V2" />
                </div>
              </div>

              <div className="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                  <h2 className="card-title fw-bold mb-1">
                    Adventure starts here 🚀
                  </h2>
                  <p className="card-text mb-2">
                    Make your app management easy and fun!
                  </p>

                  <FormRow
                    type="text"
                    name="firstName"
                    labeltext="First Name"
                    placeholder="e.g. john"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    error={
                      errors.hasOwnProperty("firstName") ? errors.firstName : ""
                    }
                  />

                  <FormRow
                    type="text"
                    name="lastName"
                    labeltext="Last Name"
                    placeholder="e.g. doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    error={
                      errors.hasOwnProperty("lastName") ? errors.lastName : ""
                    }
                  />
                  <FormRow
                    type="text"
                    name="username"
                    labeltext="Username"
                    placeholder="e.g. abc@123"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={
                      errors.hasOwnProperty("username") ? errors.username : ""
                    }
                  />
                  <FormRow
                    type="text"
                    name="phoneNumber"
                    labeltext="Phone Number"
                    placeholder="e.g. 1234567890"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    error={
                      errors.hasOwnProperty("phoneNumber")
                        ? errors.phoneNumber
                        : ""
                    }
                  />
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
                    onClick={registerForm}
                    tabIndex="5"
                  >
                    Sign up
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
export default Register;
