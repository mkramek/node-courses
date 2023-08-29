const path = require("node:path");

const getUploadsPath = () => {
  const now = new Date();
  return path.join(
    __dirname,
    "..",
    "uploads",
    now.getFullYear().toString(),
    (now.getMonth() + 1).toString()
  );
};

const getImagesPath = () => {
  return path.join(__dirname, "..", "images");
};

module.exports = {
  UPLOADS_PATH: getUploadsPath(),
  IMAGES_PATH: getImagesPath(),
};
