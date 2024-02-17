const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the absolute path to the uploads folder
    const absolutePath = path.resolve(__dirname, '../../public/uploads/');
    cb(null, absolutePath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
