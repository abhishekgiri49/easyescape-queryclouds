const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Reference to the Category model
    required: true,
  },
  name: { type: String, required: true },
  country: { type: String },
  status: { type: String },
  image: { type: String },
  // Add other fields as needed
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
