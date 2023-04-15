import { prisma } from "../config/database";
import { Prisma } from "@prisma/client";

async function findByUserId(userId: number) {
  return await prisma.carts.findFirst({
    where: {
      userId,
      status: "RESERVED"
    },
    include: {
      CartProducts: {
        include: {
          Products: true
        }
      }
    }
  });
}

async function createCart(userId: number) {
  return await prisma.carts.create({
    data: {
      userId,
      status: "RESERVED",
    }
  });
}

async function addToCart(data: Prisma.CartProductsUncheckedCreateInput) {
  console.log(data);
  return await prisma.$transaction([
    prisma.products.update({
      where: {
        id: data.productId
      },
      data: {
        stock: {
          decrement: 1
        }
      }
    }),

    prisma.cartProducts.create({ data })
  ]);
}

const cartRepository = {
  findByUserId,
  createCart,
  addToCart
};

export default cartRepository;