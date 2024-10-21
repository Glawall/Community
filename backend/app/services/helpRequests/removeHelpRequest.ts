import * as helpRequestsRepo from "../../repositories/helpRequests";
import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";

export const removeHelpRequest = async (
  help_request_id: number,
  AuthUserId: number
): Promise<void> => {
  const { request } = await helpRequestsRepo.getByHelpRequestId(
    help_request_id
  );

  if (!request || request.length === 0) {
    throw new AppError(errors.HELP_REQUEST_NOT_FOUND, "Help request not found");
  }

  const requester = request[0];
  const requesterUserId = requester.author_id;

  if (requesterUserId !== AuthUserId) {
    throw new AppError(
      errors.AUTHORISATION_ERROR,
      "You are not allowed to delete this help request"
    );
  }
  await helpRequestsRepo.removeHelpRequest(help_request_id);
};
