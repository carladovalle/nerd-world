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
          price: 89,
          stock: 10,
          categoryId: categories[0].id
        },
      });
      await prisma.products.create({
        data: {
          name: "Combo O Hobbit",
          image: "https://nerdstore.com.br/wp-content/uploads/2023/03/vitrine-kits-o-hobbit-2023-02-nerdstore.jpg.webp",
          description: " Edição Exclusiva com Capa de Tecido",
          price: 299,
          stock: 10,
          categoryId: categories[3].id
        },
      });
      await prisma.products.create({
        data: {
          name: "Luminária Super Mario",
          image: "https://nerdstore.com.br/wp-content/uploads/2020/03/luminaria-mario-02.jpg.webp",
          description: "Mini Bloco Interrogação",
          price: 119,
          stock: 10,
          categoryId: categories[1].id
        },
      });
      await prisma.products.create({
        data: {
          name: "Garrafa Hogwarts",
          image: "https://nerdstore.com.br/wp-content/uploads/2020/11/garrafa-alumni-harry-potter-01.jpg.webp",
          description: "Harry Potter",
          price: 64,
          stock: 10,
          categoryId: categories[2].id
        },
      });
      await prisma.products.create({
        data: {
          name: "Caneca Friends Central Perk",
          image: "https://nerdstore.com.br/wp-content/uploads/2022/08/caneca-coador-friends-central-perk-01-800x800.jpg",
          description: "Com coador",
          price: 229,
          stock: 10,
          categoryId: categories[2].id
        },
      });
      await prisma.products.create({
        data: {
          name: "T-shirt Friends",
          image: "https://m.media-amazon.com/images/I/31AJz7bMptL._AC_.jpg",
          description: " Camiseta 100% algodão penteado 30.01 - Qualidade Premium",
          price: 89,
          stock: 10,
          categoryId: categories[0].id
        },
      });
      await prisma.products.create({
        data: {
          name: "Combo O Hobbit",
          image: "https://nerdstore.com.br/wp-content/uploads/2023/03/vitrine-kits-o-hobbit-2023-02-nerdstore.jpg.webp",
          description: " Edição Exclusiva com Capa de Tecido",
          price: 299,
          stock: 10,
          categoryId: categories[3].id
        },
      });
      await prisma.products.create({
        data: {
          name: "Luminária Super Mario",
          image: "https://nerdstore.com.br/wp-content/uploads/2020/03/luminaria-mario-02.jpg.webp",
          description: "Mini Bloco Interrogação",
          price: 119,
          stock: 10,
          categoryId: categories[1].id
        },
      });
      await prisma.products.create({
        data: {
          name: "Garrafa Hogwarts",
          image: "https://nerdstore.com.br/wp-content/uploads/2020/11/garrafa-alumni-harry-potter-01.jpg.webp",
          description: "Harry Potter",
          price: 64,
          stock: 10,
          categoryId: categories[2].id
        },
      });
      await prisma.products.create({
        data: {
          name: "Caneca Friends Central Perk",
          image: "https://nerdstore.com.br/wp-content/uploads/2022/08/caneca-coador-friends-central-perk-01-800x800.jpg",
          description: "Com coador",
          price: 229,
          stock: 10,
          categoryId: categories[2].id
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