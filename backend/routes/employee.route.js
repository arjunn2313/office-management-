const router = require("express").Router();
const employee = require("../controllers/employee.controller");

router.post("/create", employee.createEmployee);
router.get("/", employee.getAllEmployee);

module.exports = router;
