const db = require("../prisma/queries");

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

  await db.createNewHighScore(name, time, gameId);
  res.json({ message: "Highscore Submitted" });
};
