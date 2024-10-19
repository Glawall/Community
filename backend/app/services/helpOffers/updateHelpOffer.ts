import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";
import * as helpRequestsRepo from "../../repositories/helpRequests";
import * as helpOffersRepo from "../../repositories/helpOffers";

export const updateHelpOffer = async (
  help_request_id: number,
  helper_id: number,
  AuthUserId: number,
  helpOfferBody: any
) => {
  const { request } = await helpRequestsRepo.getByHelpRequestId(
    help_request_id
  );

  if (!request || request.length === 0) {
    throw new AppError(errors.HELP_REQUEST_NOT_FOUND, "Help request not found");
  }

  const requester = request[0];
  const requesterUserId = requester.author_id;

  if (requesterUserId !== AuthUserId && helper_id !== AuthUserId) {
    throw new AppError(
      errors.AUTHORISATION_ERROR,
      "You are not allowed to update this help offer"
    );
  }

  const updatedHelpOffer = await helpOffersRepo.updateHelpOffer(
    help_request_id,
    helper_id,
    helpOfferBody
  );

  return updatedHelpOffer;
};
