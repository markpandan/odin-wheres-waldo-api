const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createNewGameImage = async (name, imageUrl, width, height) => {
  await prisma.gameImages.create({
    data: {
      name,
      imageUrl,
      width,
      heigth,
    },
  });
};

exports.createNewEntity = async (name, imageUrl, box, gameImageId) => {
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
  await prisma.highscores.create({
    data: {
      name,
      time,
      gameImageId,
    },
  });
};

exports.getGameImageById = async (id) => {
  await prisma.gameImages.findUnique({
    where: {
      id,
    },
  });
};

exports.getEntitiesByGameImageId = async (gameImageId) => {
  await prisma.entities.findMany({
    where: {
      gameImageId,
    },
  });
};

exports.getHighscoresByGameImageId = async (gameImageId) => {
  await prisma.highscores.findMany({
    where: {
      gameImageId,
    },
  });
};
