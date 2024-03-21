const Itinerary = require("../models/Itinerary");
const Package = require("../models/Package");

// Create a new itinerary
const create = async (req, res) => {
  try {
    const { packageId, title, dayCount, stay } = req.body;
    const newItinerary = new Itinerary({
      package: packageId,
      title,
      dayCount,
      stay,
    });
    const savedItinerary = await newItinerary.save();
    res
      .status(201)
      .json({ status: 201, message: "success", data: savedItinerary });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Get all itineraries
const getAll = async (req, res) => {
  try {
    const itineraries = await Itinerary.find().populate("package");
    res
      .status(200)
      .json({ status: 200, data: itineraries, message: "success" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Get a specific itinerary by ID
const getById = async (req, res) => {
  try {
    const itinerary = await Itinerary.find({
      package: req.params.id,
    })
      .populate("package")
      .sort({ dayCount: 1 });

    if (!itinerary)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Itinerary not found" });
    res.json({ status: 200, data: itinerary, message: "Itinerary details" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Update an itinerary by ID
const updateById = async (req, res) => {
  try {
    const { packageId, title, dayCount, stay } = req.body;
    const updatedItinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      { package: packageId, title, dayCount, stay },
      { new: true }
    );
    if (!updatedItinerary)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Itinerary not found" });
    res.json({
      status: 200,
      data: updatedItinerary,
      message: "Itinerary updated successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Delete an itinerary by ID
const deleteById = async (req, res) => {
  try {
    const deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
    if (!deletedItinerary)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Itinerary not found" });
    res.json({ status: 200, data: [], message: "Itinerary Deleted" });
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
