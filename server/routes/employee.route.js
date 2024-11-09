const router = require("express").Router();
const employee = require("../../backend/controllers/employee.controller");

router.post("/create", employee.createEmployee);
router.get("/", employee.getAllEmployee);

module.exports = router;
