const multer = require("multer");
const path = require("path");

// Define storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, "uploads/images/");
    } else if (file.mimetype === "application/pdf") {
      cb(null, "uploads/documents/");
    } else {
      cb(new Error("Only images and PDFs are allowed"), false);
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

module.exports = upload;
