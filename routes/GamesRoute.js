const express = require("express");
const router = express.Router();

const controller = require("../controllers/GamesController");

router.get("/images/:imageId", controller.getImage);

router.post("/images", controller.postImage);

router.get("/images/:imageId/entities", controller.getImageEntities);

router.post("/images/:imageId/entities", controller.postImageEntities);

router.get("/highscores", controller.getHighscores);

router.post("/highscores", controller.postHighscore);

module.exports = router;
