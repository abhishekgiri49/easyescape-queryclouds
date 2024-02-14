const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String },
  image: { type: String },
  // Add other fields as needed
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
