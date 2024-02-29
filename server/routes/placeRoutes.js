const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middlewares/auth");
const multer = require("multer");
const multerConfig = require("../helper/multerConfig");
const { validatePlace, validate } = require("../middlewares/validator");
const {
  create,
  getAll,
  getItemById,
  updateItemById,
  deleteItemById,
} = require("../controllers/placeController");
const upload = multer({ storage: multerConfig("places") });
// Create a new item (requires token validation)
router.post(
  "/",
  verifyToken,
  isAdmin,
  upload.single("image"),
  validatePlace,
  validate,
  create
);

// Get all items (requires token validation)
router.get("/", getAll);

// Get a specific item by ID  (requires token validation)
router.get("/:id", getItemById);

// Update a item by ID (requires token validation)
router.put(
  "/:id",
  verifyToken,
  isAdmin,
  upload.single("image"),
  validatePlace,
  validate,
  updateItemById
);

// Delete a item by ID (requires token validation)
router.delete("/:id", verifyToken, isAdmin, deleteItemById);

module.exports = router;
