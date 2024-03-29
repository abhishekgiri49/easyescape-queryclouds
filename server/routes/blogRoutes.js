const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middlewares/auth");
const multer = require("multer");
const multerConfig = require("../helper/multerConfig");

const upload = multer({ storage: multerConfig("blogs") });
const { validateBlog, validate } = require("../middlewares/validator");
const {
  create,
  getAll,
  getAllByFilters,
  getItemById,
  updateItemById,
  deleteItemById,
} = require("../controllers/blogController");

// Create a new item (requires token validation)
router.post(
  "/",
  verifyToken,
  isAdmin,
  upload.single("image"),
  validateBlog,
  validate,
  create
);

// Get all items
router.get("/", getAll);
// Get all items with filtering
router.post("/filter", getAllByFilters);
// Get a specific item by ID
router.get("/:id", getItemById);

// Update a item by ID (requires token validation)
router.put(
  "/:id",
  verifyToken,
  isAdmin,
  upload.single("image"),
  validateBlog,
  validate,
  updateItemById
);

// Delete a item by ID (requires token validation)
router.delete("/:id", verifyToken, deleteItemById);

module.exports = router;
