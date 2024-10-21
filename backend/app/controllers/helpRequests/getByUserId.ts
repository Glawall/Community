import { Request, Response, NextFunction } from "express";
import * as helpRequestsServices from "../../services/helpRequests";
import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";

export const getByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user_id = Number(req.params.user_id);
    if (isNaN(user_id)) {
      throw new AppError(errors.VALIDATION_ERROR, "Invalid user id provided");
    }
    const helpRequests = await helpRequestsServices.getByUserId(user_id);
    res.status(200).send({ helpRequests });
  } catch (error) {
    next(error);
  }
};
