const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 5050;
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./utils/Error/errorHandler");
// Routes
const Employee = require("./routes/employee.route");
const connectDB = require("./config/db");
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

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

app.listen(PORT, (error) => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});
