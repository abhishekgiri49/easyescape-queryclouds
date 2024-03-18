const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middlewares/auth");
const multer = require("multer");
const multerConfig = require("../helper/multerConfig");

const upload = multer({ storage: multerConfig("packages") });
const { validatePackage, validate } = require("../validator/package");
const {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
  getPackageWithFilters,
} = require("../controllers/packageController");

// Create a new  (requires token validation)
router.post(
  "/",
  verifyToken,
  isAdmin,
  upload.single("image"),
  validatePackage,
  validate,
  create
);

// Get all s (doesn't requires token validation)
router.get("/", getAll);

// Get a specific  by ID  (doesn't requires token validation)
router.get("/:id", getById);

// Update a  by ID (requires token validation)
router.put(
  "/:id",
  verifyToken,
  isAdmin,
  upload.single("image"),
  validatePackage,
  validate,
  updateById
);

// Delete a  by ID (requires token validation)
router.delete("/:id", verifyToken, deleteById);
router.post("/search", getPackageWithFilters);
module.exports = router;
