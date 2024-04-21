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

module.exports = { getMe };
