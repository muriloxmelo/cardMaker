const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

async function connect() {
  await mongoose.connect(
    await mongoose.connect(
      `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0-cardmaker-7355.mpudbxj.mongodb.net/?retryWrites=true&w=majority`
    )
  );
  console.log("Database connected succesfully!");
}

connect().catch((error) => console.log(error));

module.exports = connect;
