const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
  actualCost: { type: String, required: true },
  discountedCost: { type: String },
  duration: { type: String, required: true },
  isFlightAvailable: { type: String },
  status: { type: String },
  travelIncluded: [{ type: String }],
  image: { type: String },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Reference to the Category model
    required: true,
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place", // Reference to the Place model
    required: true,
  },
});

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
