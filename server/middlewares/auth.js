const User = require("./../models/User");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  const parsedToken = token.slice(7);
  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied. Token not provided." });

  try {
    const decoded = jwt.verify(parsedToken, "runner");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
};
const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== "Admin") {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};
module.exports = { verifyToken, isAdmin };
