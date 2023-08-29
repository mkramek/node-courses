const path = require("node:path");
const fs = require("node:fs").promises;
const config = require("../config/config");

const uploadFile = async (req, res, next) => {
  const { description } = req.body;
  const { path: temporaryName, originalname } = req.file;
  const fileName = path.join(config.IMAGES_PATH, originalname);
  fs.rename(temporaryName, fileName)
    .then(() => {
      return res.json({
        description,
        message: "Plik załadowany pomyślnie",
        status: 200,
      });
    })
    .catch((err) => {
      fs.unlink(temporaryName)
        .then(() => {
          console.log("Napotkano błąd, plik został usunięty");
          next(err);
        })
        .catch((error) => {
          console.log(error);
          next(error);
        });
    });
};

const test = (req, res) => {
  return res.json({
    status: "alive",
  });
};

module.exports = {
  uploadFile,
  test,
};
