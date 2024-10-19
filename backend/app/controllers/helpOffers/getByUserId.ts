import { Request, Response, NextFunction } from "express";

import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";
import * as usersService from "../../services/users";
import * as helpOffersService from "../../services/helpOffers/getByUserId";

export const getByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user_id = Number(req.params.user_id);
  try {
    if (isNaN(user_id)) {
      throw new AppError(errors.VALIDATION_ERROR, "Invalid user id provided");
    }
    await usersService.getByUserId(user_id);

    const userHelpOffers = await helpOffersService.getByUserId(user_id);
    res.status(200).send({ userHelpOffers });
  } catch (error) {
    next(error);
  }
};
