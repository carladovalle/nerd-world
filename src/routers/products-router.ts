import { Router } from "express";

import { getProductsByType, getProducts } from "../controllers/products-controller";

const productsRouter = Router();

productsRouter 
.get("/:typeId", getProductsByType)
.get("/", getProducts);

export { productsRouter };