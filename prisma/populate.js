const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function populate() {
  await prisma.gameImages.create({
    data: {
      name: "Genshin Impact",
      imageUrl:
        "https://res.cloudinary.com/dbgceo61v/image/upload/genshin-impact_xif7io.jpg",
      thumbnailUrl:
        "https://res.cloudinary.com/dbgceo61v/image/upload/genshin-impact-small_iwevgf.jpg",
      width: 8000,
      height: 4499,
      Entities: {
        create: [
          {
            name: "Collei",
            imageUrl:
              "https://res.cloudinary.com/dbgceo61v/image/upload/entity-Collei_edjdg4.webp",
            box: [550, 1328, 880, 1738],
          },
          {
            name: "Albedo",
            imageUrl:
              "https://res.cloudinary.com/dbgceo61v/image/upload/entity-Albedo_rrdgdf.webp",
            box: [5100, 732, 5290, 981],
          },
          {
            name: "Sethos",
            imageUrl:
              "https://res.cloudinary.com/dbgceo61v/image/upload/entity-Sethos_ejeyar.webp",
            box: [7505, 1108, 7725, 1387],
          },
          {
            name: "Lynette",
            imageUrl:
              "https://res.cloudinary.com/dbgceo61v/image/upload/entity-Lynette_y04rl1.webp",
            box: [643, 2820, 1230, 3197],
          },
          {
            name: "Kokomi",
            imageUrl:
              "https://res.cloudinary.com/dbgceo61v/image/upload/entity-Kokomi_wylp1h.webp",
            box: [1717, 1150, 1979, 1471],
          },
        ],
      },
    },
  });

  await prisma.gameImages.create({
    data: {
      name: "Classic Animes",
      imageUrl:
        "https://res.cloudinary.com/dbgceo61v/image/upload/classic-animes_a7bgmv.jpg",
      thumbnailUrl:
        "https://res.cloudinary.com/dbgceo61v/image/upload/classic-animes-small_t8nf9w.jpg",
      width: 700,
      height: 2056,
      Entities: {
        create: [
          {
            name: "Nobita",
            imageUrl:
              "https://res.cloudinary.com/dbgceo61v/image/upload/entity-Nobita_nkppvq.webp",
            box: [478, 1209, 526, 1254],
          },
          {
            name: "Gon",
            imageUrl:
              "https://res.cloudinary.com/dbgceo61v/image/upload/entity-Gon_xemob9.webp",
            box: [367, 318, 421, 391],
          },
          {
            name: "Elric",
            imageUrl:
              "https://res.cloudinary.com/dbgceo61v/image/upload/entity-Elric_dgvisv.webp",
            box: [319, 478, 385, 548],
          },
          {
            name: "Astro Boy",
            imageUrl:
              "https://res.cloudinary.com/dbgceo61v/image/upload/entity-AstroBoy_db0uiq.webp",
            box: [260, 778, 330, 836],
          },
          {
            name: "Pikachu",
            imageUrl:
              "https://res.cloudinary.com/dbgceo61v/image/upload/entity-Pikachu_napxg0.png",
            box: [478, 1445, 521, 1475],
          },
        ],
      },
    },
  });
}

populate();
