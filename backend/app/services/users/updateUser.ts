import * as usersRepo from "../../repositories/users";

export const updateUser = async (id: string, updateBody: any) => {
  const user = await usersRepo.updateUser(id, updateBody);
  return user;
};
