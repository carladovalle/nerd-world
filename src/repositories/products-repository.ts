import { prisma } from "../config/database";

async function findById(id: number) {
  return prisma.products.findUnique({
    where: {
      id
    }
  });
}

async function findByName(keyword: string) {
  return prisma.products.findMany({
    where: {
      name: {
        contains: keyword
      }
    }
  })
}

async function findMany() {
  return prisma.products.findMany()
}

async function findProductById(productId: number) {
  return prisma.products.findFirst({
    where: {
      id: productId,
    }
  });
}

const productsRepository = {
  findById,
  findByName,
  findMany,
  findProductById
};

export default productsRepository;