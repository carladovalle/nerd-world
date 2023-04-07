import { Router } from "express";

import { createUserSchema } from "../schemas/users-schemas";
import { validateBody } from "../middlewares/validation-middleware";
import { usersPost } from "../controllers/users-controller";

const usersRouter = Router();

usersRouter.post("/", validateBody(createUserSchema), usersPost);

export { usersRouter };