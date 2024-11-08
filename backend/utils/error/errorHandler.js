const { HttpStatus } = require("../../constants/httpStatus");

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message: err.message || "An unexpected error occurred",
  });
};

module.exports = errorHandler;
