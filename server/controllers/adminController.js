const User = require("../models/User");
const bcrypt = require("bcryptjs");
// Create a new user
const create = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, username, email, password } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      phoneNumber,
      username,
      email,
      password: hashedPassword,
      role: "Admin",
    });
    const savedUser = await newUser.save();
    res.status(201).json({ status: 201, message: "success", data: savedUser });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Get all users
const getAll = async (req, res) => {
  try {
    const users = await User.find({ role: "Admin" });
    res.status(200).json({ status: 200, data: users, message: "success" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Get a specific user by ID
const getById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: "req.params.id", role: "Admin" });
    if (!user)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "User not found" });
    res.json({ status: 200, data: user, message: "User details" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Update a user by ID
const updateById = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, username, email, password } =
      req.body;

    let updateFields = {
      firstName,
      lastName,
      phoneNumber,
      username,
      email,
    };

    // Check if password is provided and not empty
    if (password !== undefined && password !== "") {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateFields.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true }
    );

    if (!updatedUser)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "User not found" });
    res.json({
      status: 200,
      data: updatedUser,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Delete a user by ID
const deleteById = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({
      _id: req.params.id,
      role: "Admin",
    });
    if (!deletedUser)
      res
        .status(500)
        .json({ status: 500, data: [], message: "Internal Server Error" });
    res.json({ status: 200, data: [], message: "User Deleted" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};
const changePassword = async (req, res) => {
  try {
    const { userId, currentPassword, newPassword } = req.body;

    // Fetch user from database
    const user = await User.findById(userId);
    // Check if user exists
    if (!user) {
      res
        .status(404)
        .json({ status: 404, data: [], message: "Internal Server Error" });
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!isPasswordValid) {
      res.status(401).json({
        status: 401,
        data: [],
        message: "Current password is incorrect",
      });
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password in the database
    user.password = hashedNewPassword;
    await user.save();

    // Password changed successfully
    res.json({
      status: 200,
      data: [],
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};
module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
  changePassword,
};
