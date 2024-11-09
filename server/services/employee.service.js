const bcrypt = require("bcrypt");
const Login = require("../models/auth.schema");
const { EmployeeDetails } = require("../models/employee.schema");

exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

exports.checkUsernameExists = async (username) => {
  return await Login.findOne({ username });
};

exports.saveEmployeeDetails = async (details) => {
  const employee = new EmployeeDetails(details);
  await employee.save();
  return employee;
};

exports.saveLoginDetails = async (username, hashedPassword, employeeId) => {
  const login = new Login({
    username,
    password: hashedPassword,
    employeeId,
  });
  await login.save();
  return login;
};
