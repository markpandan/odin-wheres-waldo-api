/*
  Warnings:

  - The primary key for the `GameImages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `GameImages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[name]` on the table `Highscores` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `gameImageId` on the `Entities` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `gameImageId` on the `Highscores` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Entities" DROP CONSTRAINT "Entities_gameImageId_fkey";

-- DropForeignKey
ALTER TABLE "Highscores" DROP CONSTRAINT "Highscores_gameImageId_fkey";

-- AlterTable
ALTER TABLE "Entities" DROP COLUMN "gameImageId",
ADD COLUMN     "gameImageId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "GameImages" DROP CONSTRAINT "GameImages_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "GameImages_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Highscores" DROP COLUMN "gameImageId",
ADD COLUMN     "gameImageId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Highscores_name_key" ON "Highscores"("name");

-- AddForeignKey
ALTER TABLE "Entities" ADD CONSTRAINT "Entities_gameImageId_fkey" FOREIGN KEY ("gameImageId") REFERENCES "GameImages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Highscores" ADD CONSTRAINT "Highscores_gameImageId_fkey" FOREIGN KEY ("gameImageId") REFERENCES "GameImages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
