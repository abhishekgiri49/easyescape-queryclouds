const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");
const {
  validateRegistration,
  validateLogin,
  validate,
} = require("../middlewares/validator");

// Registration route
router.post("/register", validateRegistration, validate, registerUser);

// Login route
router.post("/login", validateLogin, validate, loginUser);

//forgot password
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
module.exports = router;
