const express = require("express");
const router = express.Router();
const multer = require("multer");
const config = require("../config/config");
const uploadController = require("../controllers/upload.controller");

const upload = multer({
  dest: config.UPLOADS_PATH,
});

router.post("/upload", upload.single("file"), uploadController.uploadFile);

module.exports = router;
