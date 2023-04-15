import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { makePayment } from "../controllers/payment-controller";

const paymentRouter = Router();

paymentRouter
  .all("/*", authenticateToken)
  .post("/", makePayment)

export { paymentRouter };