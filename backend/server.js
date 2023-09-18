const express = require("express");
require("dotenv").config();
// require("./db");
const port = process.env.PORT || 3000;

require("./mongoDB/connect.js");
const cors = require("cors"); // Isso vai ser um middleware;
const pictureRouter = require("./routes/picture");

const app = express();
app.use(cors()); // Isso vai ativar o cors para todas as routes.

// Picture Routes
app.use("/pictures", pictureRouter);

//

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from Express" });
});

app.listen(port, () => {
  console.log(`conectado na porta ${port}`);
});
