const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 5050;
const bodyParser = require("body-parser");
const errorHandler = require("./utils/Error/errorHandler");
// Routes
const Employee = require("./routes/employee.route");
app.use(express.static(path.join(__dirname, "public")));

// MIDDILEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "welcome.html"));
});
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/employee", Employee);

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});
