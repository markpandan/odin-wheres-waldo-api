-- CreateTable
CREATE TABLE "GameImages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "heigth" INTEGER NOT NULL,

    CONSTRAINT "GameImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "box" INTEGER[],
    "gameImageId" TEXT NOT NULL,

    CONSTRAINT "Entities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Highscores" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "gameImageId" TEXT NOT NULL,

    CONSTRAINT "Highscores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Entities" ADD CONSTRAINT "Entities_gameImageId_fkey" FOREIGN KEY ("gameImageId") REFERENCES "GameImages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Highscores" ADD CONSTRAINT "Highscores_gameImageId_fkey" FOREIGN KEY ("gameImageId") REFERENCES "GameImages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
