import { duplicatedEmailError } from "../errors/duplicate-email-error";
import userRepository from "../repositories/user-repository";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";

export async function createUser({ email, password }: CreateUserParams): Promise<User> {

  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({
    email,
    password: hashedPassword,
  });
}

export async function createAuthUser({ email }: CreateAuthUserParams): Promise<User> {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    return;
  }

  return userRepository.create({
    email
  });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

export type CreateUserParams = Pick<User, "email" | "password">;
export type CreateAuthUserParams = Pick<User, "email">;

const userService = {
  createUser,
  createAuthUser
};

export default userService;