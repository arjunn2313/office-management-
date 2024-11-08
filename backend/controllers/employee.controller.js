const prisma = require("../lib/prisma");

// CREATE INSTANCE FOR NEW EMPLOYEE

exports.createEmployee = async (req, res, next) => {
  try {
    const { email, name } = req.body;

    // Try to create a new employee
    const newUser = await prisma.Employee.create({
      data: {
        email,
        name,
      },
    });

    res.status(200).json({ message: "New Employee created", newUser });
  } catch (error) {
    if (
      error.code === "P2002" &&
      error.meta &&
      error.meta.target.includes("email")
    ) {
      return res.status(400).json({
        message: "Email already exists. Please use a different email.",
      });
    }

    next(error);
  }
};

exports.getAllEmployee = async (req, res, next) => {
  try {
    res.status(200).json("hello");
  } catch (error) {
    next(error);
  }
};
