const db = require("../prisma/queries");

exports.getListOfGames = async (req, res) => {
  const gameList = await db.getGameList();

  res.json({ output: gameList });
};

exports.getAllImages = async (req, res) => {
  const images = await db.getGameImages();

  res.json({ output: images });
};

exports.getImage = async (req, res) => {
  const { imageId } = req.params;

  const image = await db.getGameImageById(imageId);
  res.json({ output: image });
};

exports.postImage = async (req, res) => {
  const { name, imageUrl, width, height } = req.body;

  await db.createNewGameImage(name, imageUrl, width, height);
  res.json({ message: "Image Upload Complete" });
};

exports.getImageEntities = async (req, res) => {
  const { imageId } = req.params;

  const entities = await db.getGameImageWithEntities(imageId);
  res.json({ output: entities });
};

exports.postImageEntities = async (req, res) => {
  const { name, imageUrl, box, gameImageId } = req.body;

  await db.createNewEntity(name, imageUrl, box, gameImageId);

  res.json({ message: "Entity Submitted" });
};

exports.getHighscores = async (req, res) => {
  const { gameId } = req.query;

  const highscores = await db.getHighscoresByGameImageId(gameId);
  res.json({ output: highscores });
};

exports.postHighscore = async (req, res) => {
  const { gameId } = req.query;
  const { name, time } = req.body;

  const createdHighScore = await db.createNewHighScore(name, time, gameId);
  res.json({ output: createdHighScore });
};

exports.putHighScore = async (req, res) => {
  const { highscoreId, name } = req.body;

  await db.updateHighScore(highscoreId, name);
  res.json({ message: "Highscore Updated" });
};

exports.deleteHighScore = async (req, res) => {
  const { highscoreId } = req.body;

  await db.deleteHighScore(highscoreId);
  res.json({ message: "Highscore Deleted" });
};
