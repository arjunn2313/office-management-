// CREATE INSTANCE FOR NEW EMPLOYEE 
exports.createEmployee = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};


exports.getAllEmployee = async (req, res, next) => {
    try {
        res.status(200).json("hello")
    } catch (error) {
      next(error);
    }
  };
