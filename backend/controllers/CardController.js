const Cards = require("../models/Card.js");

exports.CARD_CREAT = async (req, res) => {
  try {
    const {
      name,
      cardType,
      attribute,
      monsterType,
      monsterLevel,
      monsterAtk,
      monsterDef,
      description,
      src,
    } = req.body;

    const card = new Cards({
      name,
      cardType,
      attribute,
      monsterType,
      monsterAtk,
      monsterDef,
      monsterLevel,
      description,
      src,
    });

    // const decodedImage = Buffer.from(src, "base64");
    await card.save();

    res.json({ card, status: "Card Saved!" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.GET_CARDS = async (req, res) => {
  try {
    const cards = await Cards.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.GET_CARDS_by_ID = async (req, res) => {
  try {
    const id = req.params.id;
    const card = await Cards.findById(id);
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.DELETE_CARDS_by_ID = async (req, res) => {
  try {
    const id = req.params.id;
    await Cards.findByIdAndDelete(id);
    res
      .status(200)
      .json({ status: "ok", message: "card deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
