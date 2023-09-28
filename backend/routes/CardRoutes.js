const express = require("express");
const router = express.Router();
const upload = require("../config/multer.js");
const cardController = require("../controllers/CardController");

router.post("/", upload.single("cardPicture"), cardController.CARD_CREAT);

module.exports = router;
