const express = require("express");
const router = express.Router();

const cardController = require("../controllers/CardController");

router.post("/", cardController.CARD_CREAT);

module.exports = router;
