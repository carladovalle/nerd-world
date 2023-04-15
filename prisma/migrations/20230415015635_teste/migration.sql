/*
  Warnings:

  - You are about to drop the column `created_at` on the `Carts` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Carts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CartProducts" ALTER COLUMN "amount" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Carts" DROP COLUMN "created_at",
DROP COLUMN "updated_at";
