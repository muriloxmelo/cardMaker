const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@clustermovies0.8von5s6.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("conectado ao db sucessfully");
}

main().catch((err) => console.log(err));

module.exports = main;
