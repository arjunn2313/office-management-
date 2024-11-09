const HttpStatus = require("../constants/httpStatus");
const createError = require("../utils/error/createError");
const employeeService = require("../services/employee.service");
const mongoose = require("mongoose");
const {
  EmployeePersonalDetails,
  EmployeeDetails,
} = require("../models/employee.schema");
const {
  getPagination,
  getStatusFilter,
  getSearchQuery,
  getSingleRecord,
} = require("../services/filter.services");

//CREATE EMPLOYEE INSTANCE
exports.createEmployee = async (req, res, next) => {
  try {
    const { username, password, ...details } = req.body;

    if (await employeeService.checkUsernameExists(username)) {
      return next(
        createError(HttpStatus.BAD_REQUEST, "Username already exists")
      );
    }

    const hashedPassword = await employeeService.hashPassword(password);

    const newEmployee = await employeeService.saveEmployeeDetails(details);
    const newLogin = await employeeService.saveLoginDetails(
      username,
      hashedPassword,
      newEmployee._id
    );

    newEmployee.login = newLogin._id;

    await newEmployee.save();

    res.status(HttpStatus.CREATED).json({
      message: "Employee created successfully",
    });
  } catch (error) {
    next(error);
  }
};

// CREATE EMPLOYEE PERSONAL INFORMATION
exports.createPersonal = async (req, res, next) => {
  try {
    const employeePhotoPath = req.files.employeePhoto
      ? req.files.employeePhoto[0].path
      : null;

    const { educationQualifications, ...details } = req.body;

    const updatedEducationQualifications = educationQualifications.map(
      (qualification, index) => {
        if (req.files.documents && req.files.documents[index]) {
          qualification.document = req.files.documents[index].path;
        }
        return qualification;
      }
    );

    const employee = await EmployeePersonalDetails.create({
      ...details,
      employeePhoto: employeePhotoPath,
      educationQualifications: updatedEducationQualifications,
    });

    await employee.save();
    res
      .status(201)
      .json({ message: "Employee created successfully", employee });
  } catch (error) {
    next(error);
  }
};

// GET ALL
exports.getAllEmployees = async (req, res, next) => {
  try {
    const { page, limit, search, status } = req.query;

    const {
      skip,
      limit: limitNumber,
      page: pageNumber,
    } = getPagination(page, limit, next);

    const statusFilter = getStatusFilter(status);

    const searchQuery = getSearchQuery(search, ["name", "employeeCode"]);

    const employees = await EmployeeDetails.find({
      ...statusFilter,
      ...searchQuery,
    })
      .skip(skip)
      .limit(limitNumber);

    const totalEmployees = await EmployeeDetails.countDocuments({
      ...statusFilter,
      ...searchQuery,
    });

    res.status(HttpStatus.OK).json({
      data: employees,
      total: totalEmployees,
      page: pageNumber,
      totalPages: Math.ceil(totalEmployees / limitNumber),
    });
  } catch (error) {
    next(error);
  }
};

// GET SINGLE
exports.getSingleEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Fetch the employee using the helper function
    const employee = await getSingleRecord(EmployeeDetails, id, next);

    // Send the response if employee exists
    if (employee) {
      res.status(HttpStatus.OK).json(employee);
    }
  } catch (error) {
    next(error);
  }
};
