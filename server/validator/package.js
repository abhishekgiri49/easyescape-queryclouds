const { body, validationResult } = require("express-validator");
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ status: 422, message: "error", data: errors.array() });
  }
  next();
};
const validatePackage = [
  body("title")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),
  body("content")
    .isLength({ min: 6 })
    .withMessage("Content must be at least 6 characters long"),
  body("actualCost")
    .isFloat({ gt: 0 })
    .withMessage("Actual Cost must be number and greater than 0"),
  body("discountedCost")
    .isFloat({ gt: 0 })
    .withMessage("Discounted Cost must be number and greater than 0"),
  body("duration")
    .isLength({ min: 3 })
    .withMessage("Duration must be at not more than 10 characters"),
  body("isFlightAvailable")
    .notEmpty()
    .withMessage("this field cannot be unchecked."),
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
module.exports = {
  validatePackage,

  validate,
};
