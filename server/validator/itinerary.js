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
const validateItinerary = [
  body("dayCount").notEmpty().withMessage("Number  of day is required."),
  body("title").notEmpty().withMessage("Title is required."),
  body("stay").notEmpty().withMessage("Stay is required."),
  body("packageId")
    .isMongoId()
    .withMessage("Invalid package ID. Please select package"),
];
module.exports = {
  validateItinerary,
  validate,
};
