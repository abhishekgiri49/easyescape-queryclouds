const jwt = require("jsonwebtoken");
const Token = require("../models/Token");
const Config = require("./../config/config.js");
// Function to generate a token
const generateToken = (userId) => {
  const secretKey = Config.JWT_SECRET || "runner"; // Replace with your secret key

  const payload = {
    userId,
  };

  const options = {
    expiresIn: "1d", // Token expires in 1 day
  };
  return jwt.sign(payload, secretKey, options);
};

// Save the token to the database
const saveTokenToDatabase = (userId) => {
  const token = generateToken(userId);

  try {
    Token.create({
      userId,
      token,
    });
    return token;
  } catch (error) {
    console.error("Error saving token to the database:", error);
  }
};
module.exports = { saveTokenToDatabase, generateToken };
