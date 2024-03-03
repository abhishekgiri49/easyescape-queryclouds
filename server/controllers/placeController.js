const Place = require("../models/Place");

// Create a new place
const create = async (req, res) => {
  try {
    const { name, status, categoryId } = req.body;
    let updateFields = {
      name,
      category: categoryId,
      status,
    };
    if (req.file && req.file.filename) {
      updateFields.image = req.file.filename;
    } else {
      updateFields.image = null;
    }
    const newPlace = new Place(updateFields);
    const savedPlace = await newPlace.save();
    res.status(201).json({ status: 201, message: "success", data: savedPlace });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Get all places
const getAll = async (req, res) => {
  try {
    const places = await Place.find().populate("category");
    res.status(200).json({ status: 201, data: places, message: "success" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Get a specific category by ID
const getItemById = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id).populate("category");
    if (!place)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Place not found" });
    res.json({ status: 200, data: category, message: "Place details" });
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
    const { name, status, categoryId } = req.body;
    let updateFields = {
      name,
      category: categoryId,
      status,
    };
    if (req.file && req.file.filename) {
      updateFields.image = req.file.filename;
    } else {
      updateFields.image = null;
    }
    const updatedPlaces = await Place.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true }
    );
    if (!updatedPlaces)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Place not found" });
    res.json({
      status: 200,
      data: updatedPlaces,
      message: "Place updated successfully",
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
    const deletedPlace = await Place.findByIdAndDelete(req.params.id);
    if (!deletedPlace)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Place not found" });
    res.json({ status: 200, data: [], message: "Place Deleted" });
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
