const Package = require("../models/Package");
const Place = require("../models/Place");
const Category = require("../models/Category");
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
// Get all packages by filter
const getPackageWithFilters = async (req, res) => {
  try {
    let query = Package.find().populate(["category", "place"]);
    const filters = req.body;
    if (filters.priceRange && filters.priceRange !== "all") {
      let minPrice, maxPrice;

      // Determine the minimum and maximum prices based on the selected range
      switch (filters.priceRange) {
        case "$0-$100":
          minPrice = 0;
          maxPrice = 100;
          break;
        case "$100-$500":
          minPrice = 100;
          maxPrice = 500;
          break;
        case "$500-$1000":
          minPrice = 500;
          maxPrice = 1000;
          break;
        case ">= $1000":
          minPrice = 1000;
          break;
        default:
          break;
      }

      // Construct the query to filter packages within the specified price range
      if (minPrice !== undefined) {
        query = query.where("actualCost");
        if (maxPrice !== undefined) {
          query = query.gte(minPrice).lte(maxPrice);
        } else {
          query = query.gte(minPrice);
        }
      }
    }

    if (filters.destinationFilter) {
      const destination = await Place.findOne({
        country: filters.destinationFilter,
      });
      query = query.where("place").equals(destination._id);
    }

    if (filters.categoryFilter && filters.categoryFilter.length > 0) {
      const categories = await Category.find({
        title: { $in: filters.categoryFilter },
      });
      const categoryIds = categories.map((category) => category._id);
      query = query.where("category").in(categoryIds);
    }

    if (filters.place) {
      const place = await Place.findOne({ name: filters.place });
      query = query.where("place").equals(place._id);
    }

    const packages = await query.exec();
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
  getPackageWithFilters,
};
