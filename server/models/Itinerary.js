const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Package", // Reference to the Package model
    required: true,
  },
  title: { type: String, required: true },
  dayCount: { type: String },
  stay: { type: String },
  // Add other fields as needed
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;
