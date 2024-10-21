import { Request, Response, NextFunction } from "express";

import * as helpOffersService from "../../services/helpOffers";

import { HelpOffer } from "../../db/seeds/data/test/help-offers";
import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";

export const createHelpOffer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const helper_id: number = Number(req.params.user_id);
    if (isNaN(helper_id)) {
      throw new AppError(errors.VALIDATION_ERROR, "Invalid user id provided");
    }
    const helpOfferBody: HelpOffer = req.body;
    if (!helpOfferBody.help_request_id || !helpOfferBody.status) {
      throw new AppError(errors.VALIDATION_ERROR, "Invalid input");
    }

    const newHelpOffer = await helpOffersService.createHelpOffer(
      helper_id,
      helpOfferBody
    );

    res.status(201).send({ newHelpOffer });
  } catch (error) {
    next(error);
  }
};
