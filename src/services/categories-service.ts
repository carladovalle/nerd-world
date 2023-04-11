import categoryRepository from "../repositories/category-repository";

async function getCategoriesWithTypes() {
  const categories = await categoryRepository.findManyWithTypes();

  return categories;
}

async function getProductsByCategory(categoryId: number) {
  const products = await categoryRepository.findByCategory(categoryId);
  
  return products;
}

const categoriesService = {
  getCategoriesWithTypes,
  getProductsByCategory
};

export default categoriesService;