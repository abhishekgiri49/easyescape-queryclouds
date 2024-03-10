const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Package", // Reference to the Package model
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  bookingDate: { type: Date, default: Date.now },
  numberOfPeople: Number,
  totalAmount: Number,
  grossAmount: Number,
  totalTax: Number,
  email: String,
  phone: String,
  bookingStatus: String,
  specialRequest: String,
  departureDate: Date,
  returnDate: Date,
  paymentMethod: String,
  paymentStatus: String,
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
