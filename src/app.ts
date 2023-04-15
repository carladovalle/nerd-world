import "reflect-metadata";
import express, { Express } from "express";
import cors from "cors";

import { connectDb, disconnectDB } from "./config/database";

import {usersRouter} from "./routers/users-router";
import {authenticationRouter} from "./routers/authentication-router";
import { categoriesRouter } from "./routers/categories-router";
import { productsRouter } from "./routers/products-router";
import { cartsRouter } from "./routers/carts-router";
import { paymentRouter } from "./routers/payment-router";

const app = express();
app
  .use(cors())
  .use(express.json())
  .use("/users", usersRouter)
  .use("/users", usersRouter)
  .use("/auth", authenticationRouter)
  .use("/categories", categoriesRouter)
  .use("/products", productsRouter)
  .use("/carts", cartsRouter)
  .use("/payment", paymentRouter)

export async function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;