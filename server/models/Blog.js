const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
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
  title: { type: String, required: true },
  description: { type: String },
  tag:{type:String},
  status: { type: String },
  image: { type: String },
  // Add other fields as needed
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
