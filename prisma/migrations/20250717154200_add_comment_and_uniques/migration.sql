/*
  Warnings:

  - A unique constraint covering the columns `[imageUrl]` on the table `Entities` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Entities_imageUrl_key" ON "Entities"("imageUrl");
