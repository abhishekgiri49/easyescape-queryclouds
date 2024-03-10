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
const validateTrip = [
  body("numberOfPeople")
    .notEmpty()
    .withMessage("Number  of people is required."),
  body("email").notEmpty().withMessage("email is required."),
  body("phone").notEmpty().withMessage("phone is required."),
  body("departureDate").notEmpty().withMessage("Departure date is required."),
  body("returnDate").notEmpty().withMessage("Return date is required."),
  body("packageId")
    .isMongoId()
    .withMessage("Invalid package ID. Please select package"),
  body("userId").isMongoId().withMessage("Invalid user ID. Please select user"),
];
module.exports = {
  validateTrip,
  validate,
};
