import { singInPost, authSingInPost, signOut } from "../controllers/authentication-controller";
import { validateBody } from "../middlewares/validation-middleware";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { signInSchema, authSignInSchema } from "../schemas/authentication-schemas";
import { Router } from "express";

const authenticationRouter = Router();

authenticationRouter
    .post("/sign-in", validateBody(signInSchema), singInPost)
    .post("/auth-sign-in", validateBody(authSignInSchema), authSingInPost)
    .delete("/sign-out", authenticateToken, signOut);
  
export { authenticationRouter };