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

async function getProductsByType(typeId: number) {
  const response = await productsRepository.findByType(typeId);

  const products = response.map(response => {
    const product = response.Products;
    return product;
  });
  
  return products;
}

const productsService = {
  getProductsByName,
  getProductsBySell,
  getProductById,
  getProductsByType
};

export default productsService;