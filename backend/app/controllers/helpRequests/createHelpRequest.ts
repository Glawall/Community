import { Request, Response, NextFunction } from "express";

import * as helpRequestsService from "../../services/helpRequests/createHelpRequest";
import { HelpRequestBody } from "../../db/seeds/data/test/help-requests";
import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";

export const createHelpRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const author_id = Number(req.header("X-User-ID"));

    if (isNaN(author_id)) {
      throw new AppError(errors.VALIDATION_ERROR, "Invalid user id provided");
    }
    if (!author_id) {
      throw new AppError(errors.AUTHORISATION_ERROR, "Authorisation failed");
    }

    const helpRequestBody: HelpRequestBody = req.body;
    const newHelpRequest = await helpRequestsService.createHelpRequest(
      author_id,
      helpRequestBody
    );
    res.status(201).send({ newHelpRequest });
  } catch (error) {
    next(error);
  }
};
