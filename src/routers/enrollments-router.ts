/*import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { validateBody } from "../middlewares/validation-middleware";
import { getEnrollmentByUser, postCreateOrUpdateEnrollment, getAddressFromCEP } from "../controllers/enrollments-controller";
import { createEnrollmentSchema } from "../schemas/enrollments-schemas";

const enrollmentsRouter = Router();

enrollmentsRouter
  .get("/cep", getAddressFromCEP)
  .all("/*", authenticateToken)
  .get("/", getEnrollmentByUser)
  .post("/", validateBody(createEnrollmentSchema), postCreateOrUpdateEnrollment);

export { enrollmentsRouter };*/