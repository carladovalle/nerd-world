import { prisma } from "../config/database";

async function findById(id: string) {
  return prisma.products.findUnique({
    where: {
      id
    }
  });
}

async function findByType(typeId: string) {
  return prisma.productTypes.findMany({
    where: {
      typeId
    },
    include: {
      Products: true
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

const productsRepository = {
  findById,
  findByType,
  findByName,
  findMany
};

export default productsRepository;