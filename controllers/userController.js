const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");

const getMe = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  if (!user) {
    throw new Error("Unable to login");
  }
  res.status(201).json(user);
};

const updateUser = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  if (!user) {
    return res.status(403).json({ message: "User not found" });
  }
  const { username } = req.body;
  if (!username) {
    return res.status(403).json({ message: "Username is required" });
  }
  console.log("username: ", username);

  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    { username: username },
    { new: true }
  ).select("-password");

  return res.status(201).json(updatedUser);
};

module.exports = { getMe, updateUser };
