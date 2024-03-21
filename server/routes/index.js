const express = require("express");
const router = express.Router();

// Import route files
const authRoutes = require("./authRoutes");
const categoryRoutes = require("./categoryRoutes");
const placeRoutes = require("./placeRoutes");
const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");
const blogRoutes = require("./blogRoutes");
const packageRoutes = require("./packageRoutes");
const tripRoutes = require("./tripRoutes");
const itineraryRoutes = require("./itineraryRoutes");
// Mount routes
router.use("/api/public/auth", authRoutes);
router.use("/api/secured/categories", categoryRoutes);
router.use("/api/secured/places", placeRoutes);
router.use("/api/secured/admin", adminRoutes);
router.use("/api/secured/user", userRoutes);
router.use("/api/secured/blogs", blogRoutes);
router.use("/api/secured/packages", packageRoutes);
router.use("/api/secured/trip", tripRoutes);
router.use("/api/secured/itinerary", itineraryRoutes);
module.exports = router;
