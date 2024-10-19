import * as helpOffersRepo from "../../repositories/helpOffers";

import { HelpOffer } from "../../db/seeds/test/help-offers";
import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";

export const createHelpOffer = async (
  helper_id: number,
  helpOfferBody: HelpOffer
) => {
  const newHelpOffer = await helpOffersRepo.createHelpOffer(
    helper_id,
    helpOfferBody
  );
  if (!newHelpOffer) {
    throw new AppError(
      errors.REPOSITORY_ERROR,
      `Error occurred while creating help offer: ${helper_id}`
    );
  }

  return newHelpOffer;
};
