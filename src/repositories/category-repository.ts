import { prisma } from "../config/database";

async function findManyWithTypes() {
  return prisma.categories.findMany({
    include: {
      Types: true
    }
  });
}

const categoryRepository = {
  findManyWithTypes
};

export default categoryRepository;