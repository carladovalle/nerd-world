/*
  Warnings:

  - The primary key for the `Categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Categories` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `CartProducts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Carts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Types` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CartProducts" DROP CONSTRAINT "CartProducts_cartId_fkey";

-- DropForeignKey
ALTER TABLE "CartProducts" DROP CONSTRAINT "CartProducts_productId_fkey";

-- DropForeignKey
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_cartId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTypes" DROP CONSTRAINT "ProductTypes_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTypes" DROP CONSTRAINT "ProductTypes_typeId_fkey";

-- DropForeignKey
ALTER TABLE "Types" DROP CONSTRAINT "Types_categoryId_fkey";

-- DropIndex
DROP INDEX "Categories_name_key";

-- DropIndex
DROP INDEX "Products_name_key";

-- AlterTable
ALTER TABLE "Categories" DROP CONSTRAINT "Categories_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Categories_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Products" DROP CONSTRAINT "Products_pkey",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "CartProducts";

-- DropTable
DROP TABLE "Carts";

-- DropTable
DROP TABLE "Payments";

-- DropTable
DROP TABLE "ProductTypes";

-- DropTable
DROP TABLE "Types";

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
