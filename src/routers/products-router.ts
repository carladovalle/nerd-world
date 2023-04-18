import { Router } from "express";

import { getProducts, getProductId, getProductsByType } from "../controllers/products-controller";

const productsRouter = Router();

productsRouter 
    .get("/", getProducts)
    //.get("product/:productId", getProductId)
    .get("/:typeId", getProductsByType)

export { productsRouter };