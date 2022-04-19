const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a valid password"],
    minlength: [8, "Minimum password length must be 8"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("userecom", UserSchema);

module.exports = User;
