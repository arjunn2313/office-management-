const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
  {
    username: { type: String, required: true,unique:true},
    password: { type: String, required: true },
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EmployeeDetails",
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "employee"],
      default: "employee",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Login", loginSchema);
