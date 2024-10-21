import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";
import * as helpRequestsRepo from "../../repositories/helpRequests";
import * as userRepo from "../../repositories/users";

export const getByUserId = async (id: number) => {
  const user = await userRepo.getByUserId(id);

  if (!user) {
    throw new AppError(errors.USER_NOT_FOUND, "User not found");
  }

  const helpRequest = await helpRequestsRepo.getByUserId(id);
  if (!helpRequest) {
    throw new AppError(
      errors.HELP_REQUEST_NOT_FOUND,
      `No help request found with id: ${id}`
    );
  }
  return helpRequest;
};
