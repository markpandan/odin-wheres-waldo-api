const express = require("express");
const router = express.Router();

const controller = require("../controllers/GamesController");

router.get("/images/:imageId", controller.getImage);

router.get("/images/:imageId/entities", controller.getImageEntities);

router.get("/highscores", controller.getHighscores);

router.post("/highscores", controller.postHighscore);

module.exports = router;
