// In your controller (e.g., helpOffersController.ts)
import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";
import * as helpOffersService from "../../services/helpOffers";

export const updateHelpOffer = async (
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

    const updatedHelpOffer = await helpOffersService.updateHelpOffer(
      helpRequestId,
      helperId,
      authUserId,
      req.body
    );

    res.status(200).send({ updatedHelpOffer });
  } catch (error) {
    next(error);
  }
};
