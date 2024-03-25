const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middlewares/auth");
const { validateItinerary, validate } = require("../validator/itinerary");
const {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
} = require("../controllers/itineraryController");
// Create a new trip (requires token validation)
router.post("/", verifyToken, validateItinerary, validate, create);

// Get all trip (doesn't requires token validation)
router.get("/", getAll);

// Get a specific  by ID  (doesn't requires token validation)
router.get("/:id", getById);

// Update a  by ID (requires token validation)
router.put(
  "/:id",
  verifyToken,
  isAdmin,
  validateItinerary,
  validate,
  updateById
);

// Delete a  by ID (requires token validation)
router.delete("/:id", verifyToken, deleteById);

module.exports = router;
