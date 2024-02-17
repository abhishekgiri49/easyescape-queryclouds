const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const Config = require("./config/config.js");
// Middleware

app.use(bodyParser.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

const DB_URL = Config.database_url;

// MongoDB connection
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/public/auth", authRoutes);

const categoryRoutes = require("./routes/categoryRoutes.js");
app.use("/api/secured/categories", categoryRoutes);

// Start server
const PORT = Config.port || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
