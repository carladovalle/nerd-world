import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {

    let categories = await prisma.categories.findMany();
    if (categories.length === 0) {
      await prisma.categories.create({
        data: {name: "Vestuario"},
      });
      await prisma.categories.create({
        data: {name: "Decoração"},
      });
      await prisma.categories.create({
        data: {name: "Presentes",},
      });
      await prisma.categories.create({
        data: {name: "Livros",},
      });
      categories = await prisma.categories.findMany();
    }

    let products = await prisma.products.findMany();
    if (products.length === 0) {
      await prisma.products.create({
        data: {
          name: "T-shirt Friends",
          image: "https://m.media-amazon.com/images/I/31AJz7bMptL._AC_.jpg",
          description: " Camiseta 100% algodão penteado 30.01 - Qualidade Premium",
          price: 120,
          stock: 10,
          categoryId: categories[0].id
        },
      });
      products = await prisma.products.findMany();
    }

  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();