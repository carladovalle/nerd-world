/*import cartRepository from "../repositories/cart-repository";
import productsRepository from "@/repositories/products-repository";

import { unauthorizedError } from "../errors/unauthorized-error";

export async function listManyByUserId(userId: number) {
  const cartProducts = await cartRepository.findByUserId(userId);

  return cartProducts;
}

export async function addToCart(userId: number, productId: number, amount: number) {
  await validateProductParams(productId, amount);
  await getOrCreateCart(userId);

  const cart = await cartRepository.findByUserId(userId);
  const cartId = cart.id;

  return cartRepository.addToCart({cartId, productId, amount});
}


async function validateProductParams(productId: number, amount: number) {
  const product = await productsRepository.findById(productId);

  if (!product || product.stock < amount)  throw unauthorizedError();
}

async function getOrCreateCart(userId: number) {
  const cart = await cartRepository.findByUserId(userId);

  if(!cart) {
    await cartRepository.createCart(userId);
  }
}

const cartService = {
  listManyByUserId,
  addToCart
};

export default cartService;*/