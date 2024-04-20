const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { SALT_VALUE } = require("../utils/constants");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, SALT_VALUE);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
