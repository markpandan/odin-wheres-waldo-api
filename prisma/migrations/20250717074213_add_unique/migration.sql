/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `GameImages` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "GameImages_name_key" ON "GameImages"("name");
