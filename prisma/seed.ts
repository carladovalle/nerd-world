import { PrismaClient, Products, Types, Categories } from "@prisma/client";
const prisma = new PrismaClient();

/* types */

const firstTypeId = "Vestuário";
const secondTypeId = "Decoração";
const thirdTypeId = "Presentes";
const fourthTypeId = "Livros";

/* categories */

const friends = "Friends";
const greys = "Greys";
const gameOfThrones = "Game Of Thrones";
const harryPotter = "Harry Potter"

async function createCategories(): Promise<Categories[]> {

  let categories = await prisma.categories.findMany();

  if (categories.length === 0) {
    await prisma.categories.createMany({
      data: [
        { id: friends, name: "Friends" },
        { id: greys, name: "Greys" },
        { id: gameOfThrones, name: "Game Of Thrones" },
        { id: harryPotter, name: "Harry Potter" },
      ],
    });

    categories = await prisma.categories.findMany();

  }

  return categories;
}

async function createTypes(): Promise<Types[]> {

  let types = await prisma.types.findMany();

  if (types.length === 0) {
    await prisma.types.create({
      data: {
        id: firstTypeId,
        name: "Blusas",
        categoryId: friends
      }
    });
    await prisma.types.create({
      data: {
        id: secondTypeId,
        name: "Caneca",
        categoryId: greys
      }
    });
    await prisma.types.create({
      data: {
        id: thirdTypeId,
        name: "Chaveiro",
        categoryId: harryPotter
      }
    });
    await prisma.types.create({
      data: {
        id: fourthTypeId,
        name: "Livro",
        categoryId: harryPotter
      }
    });

    types = await prisma.types.findMany();
  }

  return types;
  }

  async function createProducts(): Promise<Products[]> {

    let products = await prisma.products.findMany();

  if (products.length === 0) {
    await prisma.products.create({
      data: {
        name: "Blusa",
        image: "https://static3.tcdn.com.br/img/img_prod/906553/camiseta_friends_moldura_nomes_719_1_1018ee6fc7c0c77a9bc0da6003a7a188.jpg",
        description: "Blusa",
        price: 1299,
        stock: 5,
        ProductTypes: {
          productId: "1",
          typeId: firstTypeId
        }
      }
    });

    products = await prisma.products.findMany();
  }

  return products;
}
  
async function main() {
  await createCategories();
  await createTypes();
  await createProducts();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });