const express = require("express");
const router = express.Router();

const cardController = require("../controllers/CardController");

router.post("/", cardController.CARD_CREAT);
router.get("/", cardController.GET_CARDS);
router.get("/:id", cardController.GET_CARDS_by_ID);
module.exports = router;
