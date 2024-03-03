const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { saveTokenToDatabase, generateToken } = require("../helper/tokenHelper");
const { sendEmail } = require("../helper/sendMail");
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
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ status: 404, message: "User not found", data: [] });
    }
    const token = generateToken(user._id);
    // Compare passwords
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    try {
      const send_to = email;
      const reply_to = email;
      const subject = "Forgot Password : EASY ESCAPE";
      const message = `
        <h3>Hello Abhishek</h3>
        <p>Your Password  Reset Token is as follows: ${token}</p>
        <a href="http://localhost:8080/password-reset?token=${token}">Click here to reset your password.</a><br/><br/>
        <p>Regards...</p>
        <p>EASY ESCAPE  Team.</p>
    `;

      await sendEmail(subject, message, send_to, reply_to);
      res.status(200).json({ success: 200, message: "Email Sent", data: [] });
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message, data: [] });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: `Internal Server Error : ${error.message}`,
      data: [],
    });
  }
};
module.exports = { registerUser, loginUser, forgotPassword };
