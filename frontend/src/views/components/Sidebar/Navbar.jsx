import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import avatar from "../../../assets/images/avatar.svg";
import { useDashboardContext } from "../../pages/layouts/DashboardLayout";
import { ChangePassword } from "../../../views";

import { Alert } from "../../components";
import { AdminService } from "../../../repositories";
const Navbar = () => {
  const { user, logoutUser } = useDashboardContext();
  const [show, setShow] = useState(null);
  const [errors, setErrors] = useState({});
  const handleOpenModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };
  const handleModalSubmit = (formData) => {
    formData.userId = user._id;
    // If not in edit mode, create new admin
    AdminService.updatePassword(formData)
      .then(() => {
        setErrors({});
        handleCloseModal();
        Alert("success", `Password has been changed  successfully.`);
        logoutUser();
        // Optionally, you can redirect or perform other actions after successful addition
      })
      .catch((error) => {
        console.log(error);
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
      Alert("error", `Error performing. Please try again.`);
    }
  };
  return (
    <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow">
      <div className="navbar-container d-flex content">
        <div className="bookmark-wrapper d-flex align-items-center">
          <ul className="nav navbar-nav d-xl-none">
            <li className="nav-item">
              <a className="nav-link menu-toggle" href="#">
                <FaAlignJustify />
              </a>
            </li>
          </ul>
        </div>
        <ul className="nav navbar-nav align-items-center ms-auto">
          <li className="nav-item dropdown dropdown-user">
            <a
              className="nav-link dropdown-toggle dropdown-user-link"
              id="dropdown-user"
              href="#"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="user-nav d-sm-flex d-none">
                <span className="user-name fw-bolder">
                  {user.firstName + " " + user.lastName}
                </span>
                <span className="user-status">Admin</span>
              </div>
              <span className="avatar">
                <img
                  className="round"
                  src={avatar}
                  alt="avatar"
                  height="40"
                  width="40"
                />
                <span className="avatar-status-online"></span>
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdown-user"
            >
              <span className="dropdown-item" onClick={handleOpenModal}>
                <RiLockPasswordLine className="me-50" /> Change Password
              </span>

              <span className="dropdown-item" onClick={logoutUser}>
                <IoMdLogOut className="me-50" /> Logout
              </span>
            </div>
          </li>
        </ul>
      </div>
      <ChangePassword
        onClose={handleCloseModal}
        onSubmit={handleModalSubmit}
        errors={errors}
        show={show}
      />
    </nav>
  );
};

export default Navbar;
