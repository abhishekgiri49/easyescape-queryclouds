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
  getAllByUser,
  updateById,
  deleteById,
  refundPayment,
} = require("../controllers/tripController");
// Create a new trip (requires token validation)
router.post("/", verifyToken, validateTrip, validate, create);

// Get all trip (doesn't requires token validation)
router.get("/", getAll);

// Get a specific  by ID  (does requires token validation)
router.get("/getByUser", verifyToken, getAllByUser);
router.get("/:id", getById);

// Update a  by ID (requires token validation)
router.put("/:id", verifyToken, isAdmin, validateTrip, validate, updateById);

// Delete a  by ID (requires token validation)
router.delete("/:id", verifyToken, deleteById);
/*----------------------------------------------*/
router.post("/create-checkout-session", verifyToken, createCheckoutSession);
router.get("/response/return", verifyToken, getReturnStatus);
router.get("/refund/:id", verifyToken, refundPayment);
module.exports = router;
