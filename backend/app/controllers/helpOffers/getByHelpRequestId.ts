import { Request, Response, NextFunction } from "express";

import * as helpOffersService from "../../services/helpOffers/getByHelpRequestId";
import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";

export const getByHelpRequestId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const help_request_id = Number(req.params.help_request_id);
  try {
    if (isNaN(help_request_id)) {
      throw new AppError(
        errors.VALIDATION_ERROR,
        "Invalid help request id provided"
      );
    }
    const helpOffers = await helpOffersService.getByHelpRequestId(
      help_request_id
    );
    res.status(200).send({ helpOffers });
  } catch (error) {
    next(error);
  }
};
