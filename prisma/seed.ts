import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.categories.findMany();
  if (categories.length === 0) {
    await prisma.categories.createMany({
      data: [
        { name: "Vestuário" },
        { name: "Decoração" },
        { name: "Livros" },
        { name: "Presentes" },
      ],
    });
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
})