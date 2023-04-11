import categoriesService from "../services/categories-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getCategories(req: Request, res: Response) {
  try {
    const categories = await categoriesService.getCategoriesWithTypes();

    return res.status(httpStatus.OK).send(categories);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getProductsByCategory(req: Request, res: Response) {
  const { categoryId } = req.params;
  try {
    const products = await categoriesService.getProductsByCategory(Number(categoryId));

    return res.status(httpStatus.OK).send(products);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}