const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone_number: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String },
  street_address: { type: String },
  postal_code: { type: String },
  city: { type: String },
  country: { type: String },
});
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};
const User = mongoose.model("User", userSchema);

module.exports = User;
