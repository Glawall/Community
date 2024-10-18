import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";
import * as usersRepo from "../../repositories/users";

export const getByUserId = async (id: number) => {
  const user = await usersRepo.getByUserId(id);
  if (!user) {
    throw new AppError(
      errors.USER_NOT_FOUND,
      `No user was found with id: ${id}`
    );
  }
  return user;
};
