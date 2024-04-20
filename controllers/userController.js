const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");

const getMe = async (req, res) => {
  res.send(req.user);
};

module.exports = { getMe };
