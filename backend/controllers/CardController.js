const Card = require("../models/Card.js");

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

    const card = new Card({
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
