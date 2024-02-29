const Package = require("../models/Package");

// Create a new blog
const create = async (req, res) => {
  try {
    const {
      title,
      content,
      status,
      actualCost,
      discountedCost,
      duration,
      isFlightAvailable,
      categoryId,
      placeId,
    } = req.body;
    let updateFields = {
      title,
      content,
      actualCost,
      discountedCost,
      duration,
      isFlightAvailable,
      category: categoryId,
      place: placeId,
      status,
    };
    if (req.file && req.file.filename) {
      updateFields.image = req.file.filename;
    } else {
      updateFields.image = null;
    }
    const newPackage = new Package(updateFields);
    const savedPackage = await newPackage.save();
    res
      .status(201)
      .json({ status: 201, message: "success", data: savedPackage });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Get all packages
const getAll = async (req, res) => {
  try {
    const packages = await Package.find().populate(["category", "place"]);
    // Sort by date descending
    res.status(200).json({ status: 201, data: packages, message: "success" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Get a specific package by ID
const getById = async (req, res) => {
  try {
    const package = await Package.findById(req.params.id).populate([
      "category",
      "place",
    ]);
    if (!package)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Package not found" });
    res.json({ status: 200, data: package, message: "package details" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Update a Item by ID
const updateById = async (req, res) => {
  try {
    const {
      title,
      content,
      status,
      actualCost,
      discountedCost,
      duration,
      isFlightAvailable,
      categoryId,
      placeId,
    } = req.body;
    let updateFields = {
      title,
      content,
      actualCost,
      discountedCost,
      duration,
      isFlightAvailable,
      category: categoryId,
      place: placeId,
      status,
    };
    if (req.file && req.file.filename) {
      updateFields.image = req.file.filename;
    }
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true }
    );
    if (!updatedPackage)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Package not found" });
    res.json({
      status: 200,
      data: updatedPackage,
      message: "Package updated successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Delete a  by ID
const deleteById = async (req, res) => {
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);
    if (!deletedPackage)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Package not found" });
    res.json({ status: 200, data: [], message: "Package Deleted" });
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
  getById,
  updateById,
  deleteById,
};
