const express = require("express");
const router = express.Router();

const controller = require("../controllers/GamesController");

router.get("/list", controller.getListOfGames);

router.get("/images", controller.getAllImages);

router.get("/images/:imageId", controller.getImage);

router.post("/images", controller.postImage);

router.get("/images/:imageId/entities", controller.getImageEntities);

router.post("/images/:imageId/entities", controller.postImageEntities);

router.get("/highscores", controller.getHighscores);

router.post("/highscores", controller.postHighscore);

router.put("/highscores", controller.putHighScore);

router.delete("/highscores", controller.deleteHighScore);

module.exports = router;
