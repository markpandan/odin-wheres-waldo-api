const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const gamesRoute = require("./routes/GamesRoute");
app.use("/games", gamesRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
  console.log(`Link is http://localhost:${PORT}/`);
});
