/*
  Warnings:

  - Made the column `amount` on table `CartProducts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CartProducts" ALTER COLUMN "amount" SET NOT NULL;
