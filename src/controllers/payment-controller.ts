import paymentService from "../services/payment-service";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Response } from "express";

import httpStatus from "http-status";

export async function makePayment(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    await paymentService.processPayment(userId, req.body);

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
  }
}