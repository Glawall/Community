import { Request, Response, NextFunction } from "express";
import * as helpRequestsService from "../../services/helpRequests/getByHelpRequestId";
import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";

export const getByHelpRequestId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const help_request_id = Number(req.params.help_request_id);

    if (isNaN(help_request_id)) {
      throw new AppError(
        errors.VALIDATION_ERROR,
        "Invalid help request id provided"
      );
    }

    const helpRequest = await helpRequestsService.getByHelpRequestId(
      help_request_id
    );

    res.status(200).send({ helpRequest });
  } catch (error) {
    next(error);
  }
};
