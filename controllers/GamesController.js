const db = require("../prisma/queries");

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

  const entities = await db.getEntitiesByGameImageId(imageId);
  res.json({ output: entities });
};

exports.postImageEntities = async (req, res) => {};

exports.getHighscores = async (req, res) => {
  const { imageId } = req.query;

  const highscores = await db.getHighscoresByGameImageId(imageId);
  res.json({ output: highscores });
};

exports.postHighscore = async (req, res) => {
  const { imageId } = req.query;
  const { name, time } = req.body;

  await db.createNewHighScore(name, time, imageId);
  res.json({ message: "Highscore Submitted" });
};
