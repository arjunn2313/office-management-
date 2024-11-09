const HttpStatus = require("../constants/httpStatus");
const createError = require("../utils/error/createError");

// Helper for pagination and validation
const getPagination = (page, limit, next) => {
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;

  if (isNaN(limitNumber) || limitNumber <= 0) {
    next(createError(HttpStatus.BAD_REQUEST, "Invalid limit value"));
  }

  return {
    skip: (pageNumber - 1) * limitNumber,
    limit: limitNumber,
    page: pageNumber,
  };
};

// Helper to build filter based on query parameters
const getStatusFilter = (status) => {
  const filter = {};
  if (status) {
    filter.status = status;
  }
  return filter;
};

// Helper to build search query based on search fields
const getSearchQuery = (search, fields) => {
  if (!search) return {};
  const searchConditions = fields.map((field) => ({
    [field]: { $regex: search, $options: "i" },
  }));
  return { $or: searchConditions };
};


const getSingleRecord = async (model, id, next) => {
    try {
      const record = await model.findById(id);
      if (!record) {
        return next(createError(HttpStatus.NOT_FOUND, 'Record not found'));
      }
      return record;
    } catch (error) {
      next(error);
    }
  };

module.exports = {
  getPagination,
  getStatusFilter,
  getSearchQuery,
  getSingleRecord
};
