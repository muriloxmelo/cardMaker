const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./mongoDB/connect.js"); // Conectar ao DB;
const port = process.env.PORT || 8080;

const app = express();
app.use(
  cors({
    origin: ["https://card-maker-beta.vercel.app"],
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const cardRouter = require("./routes/CardRoutes.js");
app.use("/api/v1/cards", cardRouter);
//

app.get("/", async (req, res) => {
  res.send("teste maluco");
});

const startServer = async () => {
  app.listen(port, () => {
    console.log(`"server running on port ${port}"`);
  });
};

startServer();
