import { prisma } from "../config/database";

async function findManyWithTypes() {
  return prisma.categories.findMany({
    include: {
      Types: true
    }
  });
}

async function findByCategory(categoryId: number) {
  return prisma.categories.findUnique({
    where: {
      id: categoryId,
    }
  });
}

const categoryRepository = {
  findManyWithTypes,
  findByCategory
};

export default categoryRepository;