const mongoose = require("mongoose");

// EMPLOYEE PROFFESIONAL DETAILS
const EmployeeDetailsSchema = new mongoose.Schema(
  {
    employeeCode: {
      type: String,
      unique: true,
      required: [true, "Employee code is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    designation: {
      type: String,
      required: [true, "Designation is required"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
    },
    joiningDate: {
      type: Date,
      required: [true, "Joining date is required"],
    },
    lastWorkingDate: {
      type: Date,
    },
    reportingManager: {
      type: String,
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
      min: [0, "Salary cannot be negative"],
    },
    workStartTime: {
      type: String,
    },
    workEndTime: {
      type: String,
    },
    personalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EmployeePersonalDetails",
    },
    weekOff: {
      type: String,
    },
    dob: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    employeeType: {
      type: String,
    },
    modeOfWork: {
      type: String,
    },
    status: {
      type: String,
      enum: ["partially filled", "active", "inactive"],
      required: true,
      default: "partially filled",
    },
    reasonForInactive: {
      type: String,
    },
  },
  { timestamps: true }
);

// EMPLOYEE PERSONAL DETAILS
const EmployeePersonalDetailsSchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EmployeeDetails",
    },

    employeePhoto: {
      type: String,
    },
    maritalStatus: {
      type: String,
      enum: ["Single", "Married", "Divorced", "Widowed"],
      required: true,
    },
    educationQualifications: [
      {
        degree: { type: String, required: true },
        document: { type: String, required: false },
      },
    ],
    phoneNumber: {
      type: String,
      required: true,
    },
    alternativePhoneNumber: {
      type: String,
    },
    emailOffice: {
      type: String,
      required: true,
    },
    emailPersonal: {
      type: String,
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    aadhaarNumber: {
      type: String,
      unique: true,
      required: true,
    },
    addressPresent: {
      addressLine1: { type: String },
      addressLine2: { type: String },
      city: { type: String },
      district: { type: String },
      state: { type: String },
      country: { type: String },
      zipCode: { type: String },
    },
    addressPermanent: {
      addressLine1: { type: String },
      addressLine2: { type: String },
      city: { type: String },
      district: { type: String },
      state: { type: String },
      country: { type: String },
      zipCode: { type: String },
    },
    accountNumber: {
      type: String,
      required: true,
    },
    ifscCode: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    panNumber: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const EmployeePersonalDetails = mongoose.model(
  "EmployeePersonalDetails",
  EmployeePersonalDetailsSchema
);
const EmployeeDetails = mongoose.model(
  "EmployeeDetails",
  EmployeeDetailsSchema
);

module.exports = { EmployeePersonalDetails, EmployeeDetails };
