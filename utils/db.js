const mongoose = require("mongoose");

const connectDB = async (MONGODB_URI) => {
  try {
    await mongoose.connect(MONGODB_URI, {});
    console.log(`MongoDB connected at ${mongoose.connection.name}`);
  } catch (err) {
    console.error("MongoDB connection error", err);
  }
};

module.exports = connectDB;
