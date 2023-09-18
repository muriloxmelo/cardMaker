const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

async function connect() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@clustermovies0.8von5s6.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("Banco de Dados conectado");
}

connect().catch((error) => console.log(error));

module.exports = connect;
