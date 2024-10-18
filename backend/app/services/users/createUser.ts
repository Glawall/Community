import * as usersRepo from "../../repositories/users";
import { User } from "../../db/seeds/test/users";

export const createUser = async (userBody: User) => {
  const user = await usersRepo.createUser(userBody);
  return user;
};
