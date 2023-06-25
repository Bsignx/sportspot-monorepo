/*
  Warnings:

  - You are about to drop the column `image` on the `Spot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Spot" DROP COLUMN "image",
ADD COLUMN     "images" TEXT[] DEFAULT ARRAY[]::TEXT[];
