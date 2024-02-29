const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middlewares/auth");

const {
  validateRegistration,
  validateUserUpdate,
  validate,
} = require("../middlewares/validator");
const {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
} = require("../controllers/userController");

// Create a new  (requires token validation)
router.post("/", verifyToken, isAdmin, validateRegistration, validate, create);

// Get all s (requires token validation)
router.get("/", verifyToken, isAdmin, getAll);

// Get a specific  by ID  (requires token validation)
router.get("/:id", verifyToken, isAdmin, getById);

// Update a  by ID (requires token validation)
router.put(
  "/:id",
  verifyToken,
  isAdmin,
  validateUserUpdate,
  validate,
  updateById
);

// Delete a  by ID (requires token validation)
router.delete("/:id", verifyToken, isAdmin, deleteById);

module.exports = router;
