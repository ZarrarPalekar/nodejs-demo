require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./utils/db");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/sample_db";

connectDB(MONGODB_URI);

app.use(authRoutes);
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
