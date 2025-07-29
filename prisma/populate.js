const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function populate() {
  await prisma.gameImages.create({
    data: {
      name: "Genshin Impact",
      imageUrl: "/src/assets/games/1/genshin-impact.jpeg",
      thumbnailUrl: "/src/assets/games/1/genshin-impact-small.jpeg",
      width: 8000,
      height: 4499,
      Entities: {
        create: [
          {
            name: "Collei",
            imageUrl: "/src/assets/games/1/entity-Collei.webp",
            box: [550, 1328, 880, 1738],
          },
          {
            name: "Albedo",
            imageUrl: "/src/assets/games/1/entity-Albedo.webp",
            box: [5100, 732, 5290, 981],
          },
          {
            name: "Sethos",
            imageUrl: "/src/assets/games/1/entity-Sethos.webp",
            box: [7505, 1108, 7725, 1387],
          },
          {
            name: "Lynette",
            imageUrl: "/src/assets/games/1/entity-Lynette.webp",
            box: [643, 2820, 1230, 3197],
          },
          {
            name: "Kokomi",
            imageUrl: "/src/assets/games/1/entity-Kokomi.webp",
            box: [1717, 1150, 1979, 1471],
          },
        ],
      },
    },
  });

  await prisma.gameImages.create({
    data: {
      name: "Classic Animes",
      imageUrl: "/src/assets/games/2/classic-animes.jpg",
      thumbnailUrl: "/src/assets/games/2/classic-animes-small.jpg",
      width: 700,
      height: 2056,
      Entities: {
        create: [
          {
            name: "Nobita",
            imageUrl: "/src/assets/games/2/entity-Nobita.webp",
            box: [478, 1209, 526, 1254],
          },
          {
            name: "Gon",
            imageUrl: "/src/assets/games/2/entity-Gon.webp",
            box: [367, 318, 421, 391],
          },
          {
            name: "Elric",
            imageUrl: "/src/assets/games/2/entity-Elric.webp",
            box: [319, 478, 385, 548],
          },
          {
            name: "Astro Boy",
            imageUrl: "/src/assets/games/2/entity-AstroBoy.webp",
            box: [260, 778, 330, 836],
          },
          {
            name: "Pikachu",
            imageUrl: "/src/assets/games/2/entity-Pikachu.png",
            box: [478, 1445, 521, 1475],
          },
        ],
      },
    },
  });
}

populate();
