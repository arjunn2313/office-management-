const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Successfully connected to the database!");
  } catch (error) {
    console.error("Database connection failed. Error:", error.message);
  }
};

module.exports = connectDB;
