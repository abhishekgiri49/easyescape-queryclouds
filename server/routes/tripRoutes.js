const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middlewares/auth");
const { validateTrip, validate } = require("../validator/trip");
const {
  createCheckoutSession,
  getReturnStatus,
  create,
  getAll,
  getById,
  updateById,
  deleteById,
} = require("../controllers/tripController");
// Create a new trip (requires token validation)
router.post("/", verifyToken, validateTrip, validate, create);

// Get all trip (doesn't requires token validation)
router.get("/", getAll);

// Get a specific  by ID  (doesn't requires token validation)
router.get("/:id", getById);

// Update a  by ID (requires token validation)
router.put("/:id", verifyToken, isAdmin, validateTrip, validate, updateById);

// Delete a  by ID (requires token validation)
router.delete("/:id", verifyToken, deleteById);
/*----------------------------------------------*/
router.post("/create-checkout-session", createCheckoutSession);
router.get("/response/return", getReturnStatus);
module.exports = router;
