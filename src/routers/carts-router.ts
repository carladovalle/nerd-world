import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { listCartProducts, addToCart } from "../controllers/carts-controller";

const cartsRouter = Router();

cartsRouter
  .get("/", listCartProducts)
  .post("/", addToCart)

export { cartsRouter };