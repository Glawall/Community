import { Response, Request, NextFunction } from "express";
import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";

import * as usersRepo from "../../repositories/users";

export const removeUser = async (user_id: number | string) => {
  const { rowCount, rows } = await usersRepo.removeUser(user_id);
  if (rowCount === 0 || rows[0]) {
    throw new AppError(
      errors.HELP_REQUEST_NOT_FOUND,
      `No help request found with ${user_id}`
    );
  }
  return rows;
};
