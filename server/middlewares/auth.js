const User = require("./../models/User");
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied. Token not provided." });

  try {
    const decoded = jwt.verify(token, "runner");
    const user = await User.findOne({
      _id: decoded.userId,
    });

    req.token = token;
    req.user = user;
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
