import { prisma } from "../config/database";

async function findManyWithTypes() {
  return prisma.categories.findMany();
}

async function findByCategory(categoryId: number) {
  return prisma.categories.findMany({
    include: {
      Products: true
    }
  });
}

const categoryRepository = {
  findManyWithTypes,
  findByCategory
};

export default categoryRepository;