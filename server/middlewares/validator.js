const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const validateRegistration = [
  body("firstName")
    .isLength({ min: 3 })
    .withMessage("First Name must be at least 3 characters long"),
  body("lastName")
    .isLength({ min: 3 })
    .withMessage("Last Name must be at least 3 characters long"),
  body("username")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),
  body("phoneNumber")
    .isLength({ min: 3 })
    .withMessage("Phone number must be at least 3 characters long"),
  body("email")
    .isEmail()
    .custom(async (value) => {
      const existingUser = await User.findByEmail(value);
      if (existingUser) {
        // Will use the below as the error message
        throw new Error("A user already exists with this e-mail address");
      }
    }),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  // Add more validation rules as needed
];

const validateLogin = [
  body("email")
    .isEmail()
    .isLength({ min: 3 })
    .withMessage("email must be at least 3 characters long"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];
const validateChangePassword = [
  body("newPassword")
    .isLength({ min: 6 })
    .withMessage("new password must be at least 3 characters long"),
  body("currentPassword")
    .isLength({ min: 6 })
    .withMessage("Current Password must be at least 6 characters long"),
];
const validateCategory = [
  body("title")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long"),
  body("description")
    .isLength({ min: 6 })
    .withMessage("Description must be at least 6 characters long"),
  body("status").notEmpty().withMessage("Status cannot be unchecked."),
  body("image")
    .optional()
    .notEmpty()
    .withMessage("Please upload image to proceed."),
];

const validatePlace = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),
  body("categoryId")
    .isMongoId()
    .withMessage("Invalid category ID. Please select category"),
  body("status").notEmpty().withMessage("Status cannot be unchecked."),
  body("image")
    .optional()
    .notEmpty()
    .withMessage("Please upload image to proceed."),
];

const validateBlog = [
  body("title")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),
  body("description")
    .isLength({ min: 6 })
    .withMessage("Description must be at least 6 characters long"),
  body("categoryId")
    .isMongoId()
    .withMessage("Invalid category ID. Please select category"),
  body("placeId")
    .isMongoId()
    .withMessage("Invalid place ID. Please select place"),
  body("status").notEmpty().withMessage("Status cannot be unchecked."),
  body("image")
    .optional()
    .notEmpty()
    .withMessage("Please upload image to proceed."),
];
const validateUserUpdate = [
  body("firstName")
    .isLength({ min: 3 })
    .withMessage("First Name must be at least 3 characters long"),
  body("lastName")
    .isLength({ min: 3 })
    .withMessage("Last Name must be at least 3 characters long"),
  body("username")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),
  body("phoneNumber")
    .isLength({ min: 3 })
    .withMessage("Phone number must be at least 3 characters long"),
  body("email")
    .isEmail()
    .custom(async (value, { req }) => {
      const { email } = req.body;
      const existingUser = await User.findByEmail(value);
      if (existingUser && existingUser.email !== email) {
        throw new Error("A user already exists with this e-mail address");
      }
    }),
  body("password")
    .optional()
    .custom((value) => {
      if (!value) {
        // Password is null or empty, so it's valid
        return true;
      } else {
        // Password is not null or empty, validate its length
        return value.length >= 6;
      }
    })
    .withMessage("Password must be at least 6 characters long"),
  // Add more validation rules as needed
];
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ status: 422, message: "error", data: errors.array() });
  }
  next();
};

module.exports = {
  validateRegistration,
  validateLogin,
  validateCategory,
  validatePlace,
  validateBlog,
  validateUserUpdate,
  validateChangePassword,
  validate,
};
