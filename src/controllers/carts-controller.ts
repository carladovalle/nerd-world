import cartService from "../services/carts-service";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Response } from "express";
import { CartProducts } from "@prisma/client";
import httpStatus from "http-status";

export async function listCartProducts(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const cartProducts = await cartService.listManyByUserId(userId);

    return res.status(httpStatus.OK).send(cartProducts);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
  }
}

export async function addToCart(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { productId, amount } = req.body as CartProducts;

  try {
    await cartService.addToCart(userId, productId, amount);

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
  }
}