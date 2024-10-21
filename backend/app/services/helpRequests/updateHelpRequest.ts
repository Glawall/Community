import { HelpRequestBody } from "../../db/seeds/data/test/help-requests";
import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";
import * as helpRequestsRepo from "../../repositories/helpRequests";

export const updateHelpRequest = async (
  author_id: number,
  help_request_id: number,
  helpRequestBody: HelpRequestBody
) => {
  const { request } = await helpRequestsRepo.getByHelpRequestId(
    help_request_id
  );

  if (!request || request.length === 0) {
    throw new AppError(errors.HELP_REQUEST_NOT_FOUND, "Help request not found");
  }

  const requester = request[0];
  const requesterUserId = requester.author_id;

  if (requesterUserId !== author_id) {
    throw new AppError(
      errors.AUTHORISATION_ERROR,
      "You are not allowed to update this help request"
    );
  }

  const helpRequest = await helpRequestsRepo.updateHelpRequest(
    author_id,
    help_request_id,
    helpRequestBody
  );

  return helpRequest;
};
