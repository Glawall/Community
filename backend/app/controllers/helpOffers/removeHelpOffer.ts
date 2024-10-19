import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";
import * as helpOffersServices from "../../services/helpOffers/removeHelpOffer";

export const removeHelpOffer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authUserId = Number(req.header("X-User-ID"));
    const helperId = Number(req.params.helper_id);
    const helpRequestId = Number(req.params.help_request_id);

    if (isNaN(helpRequestId) || isNaN(helperId) || isNaN(authUserId)) {
      throw new AppError(
        errors.VALIDATION_ERROR,
        "Invalid parameters provided"
      );
    }
    await helpOffersServices.removeHelpOffer(
      helpRequestId,
      helperId,
      authUserId
    );
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
