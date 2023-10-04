const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

async function connect() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Database connected succesfully!");
}

connect().catch((error) => console.log(error));

module.exports = connect;
