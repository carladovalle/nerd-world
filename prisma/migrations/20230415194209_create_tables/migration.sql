-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('RESERVED', 'PAID');

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "cep" VARCHAR(255) NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "number" VARCHAR(255) NOT NULL,
    "neighborhood" VARCHAR(255) NOT NULL,
    "addressDetail" VARCHAR(255),
    "enrollmentId" INTEGER NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartProducts" (
    "id" SERIAL NOT NULL,
    "cartId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "CartProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "PaymentStatus" NOT NULL,

    CONSTRAINT "Carts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enrollment" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(255) NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "cardIssuer" TEXT NOT NULL,
    "cardLastDigits" TEXT NOT NULL,
    "cartId" INTEGER NOT NULL,
    "enrollmentId" INTEGER NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductTypes" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "ProductTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "price" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Types" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255),
    "createdaAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_token_key" ON "Session"("token");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "Enrollment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CartProducts" ADD CONSTRAINT "CartProducts_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Carts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CartProducts" ADD CONSTRAINT "CartProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Carts" ADD CONSTRAINT "Carts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Carts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "Enrollment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProductTypes" ADD CONSTRAINT "ProductTypes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProductTypes" ADD CONSTRAINT "ProductTypes_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Types" ADD CONSTRAINT "Types_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
