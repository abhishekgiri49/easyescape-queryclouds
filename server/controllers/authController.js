const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { saveTokenToDatabase } = require("../helper/tokenHelper");
// Register a new user
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, username, email, password } =
      req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ status: 400, message: "User already exists", data: [] });
    }

    const count = await User.countDocuments();
    let role = "User";
    if (!count) {
      role = "Admin";
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      phoneNumber,
      username,
      email,
      password,
      role,
      password: hashedPassword,
    });
    await newUser.save();

    res
      .status(201)
      .json({ status: 201, message: "User registered successfully", data: [] });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, message: "Internal Server Error", data: [] });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ status: 404, message: "User not found", data: [] });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ status: 401, message: "Invalid credentials", data: [] });
    }

    // Generate a JWT token
    // const token = jwt.sign({ userId: user._id }, "runner", {
    //   expiresIn: "24h",
    // });
    const token = saveTokenToDatabase(user._id);
    console.log(token);
    const result = {
      token: token,
      user: user,
    };
    res.status(200).json({ status: 200, message: "success", data: result });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, message: "Internal Server Error", data: [] });
  }
};

module.exports = { registerUser, loginUser };
