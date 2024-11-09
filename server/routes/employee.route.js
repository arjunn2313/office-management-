const router = require("express").Router();
const employee = require("../controllers/employee.controller");
const upload = require("../config/multer");

router.get("/", employee.getAllEmployees);
router.get("/:id", employee.getSingleEmployee);
router.post("/", employee.createEmployee);
router.post(
  "/personal",
  upload.fields([
    { name: "employeePhoto", maxCount: 1 },
    { name: "documents", maxCount: 2 },
  ]),
  employee.createPersonal
);

module.exports = router;
