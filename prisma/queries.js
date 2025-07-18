const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createNewGameImage = async (name, imageUrl, width, height) => {
  await prisma.gameImages.create({
    data: {
      name,
      imageUrl,
      width,
      height,
    },
  });
};

exports.createNewEntity = async (name, imageUrl, box, gameImageId) => {
  gameImageId = parseInt(gameImageId);
  await prisma.entities.create({
    data: {
      name,
      imageUrl,
      box,
      gameImageId,
    },
  });
};

exports.createNewHighScore = async (name, time, gameImageId) => {
  gameImageId = parseInt(gameImageId);
  await prisma.highscores.create({
    data: {
      name,
      time,
      gameImageId,
    },
  });
};

exports.getGameImages = async () => {
  const images = await prisma.gameImages.findMany({});

  return images;
};

exports.getGameImageById = async (id) => {
  id = parseInt(id);
  const image = await prisma.gameImages.findUnique({
    where: {
      id,
    },
  });

  return image;
};

exports.getGameImageWithEntities = async (id) => {
  id = parseInt(id);
  const image = await prisma.gameImages.findUnique({
    where: { id },
    include: {
      Entities: true,
    },
  });

  return image;
};

exports.getEntitiesByGameImageId = async (gameImageId) => {
  gameImageId = parseInt(gameImageId);
  await prisma.entities.findMany({
    where: {
      gameImageId,
    },
  });
};

exports.getHighscoresByGameImageId = async (gameImageId) => {
  gameImageId = parseInt(gameImageId);
  const highscores = await prisma.highscores.findMany({
    where: {
      gameImageId,
    },
  });

  return highscores;
};
