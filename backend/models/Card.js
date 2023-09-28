const mongoose = require("mongoose");

const Card = new mongoose.Schema({
  name: { type: String, required: true },
  cardType: { type: String, required: true },
  attribute: { type: String, required: true },
  monsterType: { type: String },
  monsterLevel: { type: String },
  monsterAtk: { type: Number },
  monsterDef: { type: Number },
  description: { type: String, required: true },
  src: { type: String, required: true },
});

const CardSchema = mongoose.model("Card", Card);

module.exports = CardSchema;
