const Blog = require("../models/Blog");

// Create a new blog
const create = async (req, res) => {
  try {
    const { title, description, status, categoryId, placeId } = req.body;
    let updateFields = {
      title,
      description,
      category: categoryId,
      place: placeId,
      status,
    };
    if (req.file && req.file.filename) {
      updateFields.image = req.file.filename;
    } else {
      updateFields.image = null;
    }
    const newBlog = new Blog(updateFields);
    const savedBlog = await newBlog.save();
    res.status(201).json({ status: 201, message: "success", data: savedBlog });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Get all blogs
const getAll = async (req, res) => {
  try {
    const blog = await Blog.find().populate(["category", "place"]);
    // Sort by date descending
    res.status(200).json({ status: 201, data: blog, message: "success" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Get a specific blog by ID
const getItemById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate([
      "category",
      "place",
    ]);
    if (!blog)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Blog not found" });
    res.json({ status: 200, data: blog, message: "Blog details" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Update a Item by ID
const updateItemById = async (req, res) => {
  try {
    const { title, description, status, categoryId, placeId } = req.body;
    let updateFields = {
      title,
      description,
      category: categoryId,
      place: placeId,
      status,
    };
    if (req.file && req.file.filename) {
      updateFields.image = req.file.filename;
    }
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true }
    );
    if (!updatedBlog)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Blog not found" });
    res.json({
      status: 200,
      data: updatedBlog,
      message: "Blog updated successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Delete a Item by ID
const deleteItemById = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Blog not found" });
    res.json({ status: 200, data: [], message: "Blog Deleted" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

module.exports = {
  create,
  getAll,
  getItemById,
  updateItemById,
  deleteItemById,
};
