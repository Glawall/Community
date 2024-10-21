import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";
import * as helpRequestsServices from "../../services/helpRequests";

export const removeHelpRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authUserId = Number(req.header("X-User-ID"));
    const helpRequestId = Number(req.params.help_request_id);

    if (isNaN(helpRequestId) || isNaN(authUserId)) {
      throw new AppError(
        errors.VALIDATION_ERROR,
        "Invalid parameters provided"
      );
    }
    await helpRequestsServices.removeHelpRequest(helpRequestId, authUserId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
