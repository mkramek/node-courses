const mongoose = require("mongoose");
const createError = require("http-errors");
const fs = require("node:fs").promises;
require("dotenv").config();

const express = require("express");
const app = express();
const contactRoutes = require("./routes/contacts.routes");
const authRoutes = require("./routes/auth.routes");
const uploadRoutes = require("./routes/upload.routes");
const config = require("./config/config");

const PORT = process.env.PORT || 4000;

const connection = mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
require("./config/passport");

app.use("/api/v1", uploadRoutes, contactRoutes);
app.use("/api/v1/auth", authRoutes);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  return res
    .status(err.status || 500)
    .json({ message: err.message, status: err.status });
});

const isAccessible = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

const createFolderIsNotExist = async (folder) => {
  if (!(await isAccessible(folder))) {
    await fs.mkdir(folder, {
      recursive: true,
    });
  } else {
    console.log("Directories are already created");
  }
};

connection
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, async () => {
      createFolderIsNotExist(config.UPLOADS_PATH);
      createFolderIsNotExist(config.IMAGES_PATH);
      console.log(`App listens on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Error while establishing connection: [${err}]`);
    process.exit(1);
  });
