import productsRepository from "../repositories/products-repository";

async function getProductsByName(keyword: string) {
  const products = await productsRepository.findByName(keyword);
  
  return products;
}

async function getProductsBySell() {
  const products = await productsRepository.findMany();
  
  return products;
}

async function getProductById(productId: number) {

  const product = await productsRepository.findProductById(productId);
  return product;
}

const productsService = {
  getProductsByName,
  getProductsBySell,
  getProductById
};

export default productsService;