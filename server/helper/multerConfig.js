const multer = require("multer");
const path = require("path");

const storage = (folder) =>
  multer.diskStorage({
    destination: function (req, file, cb) {
      // Construct the dynamic destination path
      const dynamicPath = path.resolve(
        __dirname,
        `../../frontend/src/assets/uploads/${folder}/`
      );
      cb(null, dynamicPath);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

module.exports = storage;
