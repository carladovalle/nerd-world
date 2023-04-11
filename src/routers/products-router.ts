import { Router } from "express";

import { getProducts, getProductId } from "../controllers/products-controller";

const productsRouter = Router();

productsRouter 
    .get("/", getProducts)
    .get("/:productId", getProductId)

export { productsRouter };