import productsService from "../services/products-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getProducts(req: Request, res: Response) {
  const keyword = req.query.keyword as string;
  
  try {
    if(keyword) {
      const products = await productsService.getProductsByName(keyword);
    
      return res.status(httpStatus.OK).send(products);
    }
    const products = await productsService.getProductsBySell();
   
    return res.status(httpStatus.OK).send(products);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getProductId(req: Request, res: Response) {
  //const { userId } = req;
  const { productId } = req.params;

  try {
    const product = await productsService.getProductById(Number(productId));

    return res.status(httpStatus.OK).send(product);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    if (error.name === "cannotListHotelsError") {
      return res.sendStatus(httpStatus.PAYMENT_REQUIRED);
    }
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function getProductsByType(req: Request, res: Response) {
  const { typeId } = req.params;
  try {
    const products = await productsService.getProductsByType(Number(typeId));

    return res.status(httpStatus.OK).send(products);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}