const multer = require("multer");

// da acesso as pastas do servidor;
const path = require("path");

// "configuracao" de como vai salvar as imgs
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/src/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

module.exports = upload;
