const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String },
  streetAddress: { type: String },
  postalCode: { type: String },
  city: { type: String },
  country: { type: String },
});
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};
const User = mongoose.model("User", userSchema);

module.exports = User;
