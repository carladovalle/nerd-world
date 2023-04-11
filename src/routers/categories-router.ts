import { Router } from "express";

import { getCategories, getProductsByCategory } from "../controllers/categories-controller";

const categoriesRouter = Router();

categoriesRouter
    .get("/", getCategories)
    .get("/categories/:categoryId", getProductsByCategory)

export { categoriesRouter };