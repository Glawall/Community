import { Request, Response, NextFunction } from "express";

import * as helpRequestsServices from "../../services/helpRequests";

export const updateHelpRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const AuthUserId = Number(req.header("X-User-ID"));
    const helpRequestBody = req.body;
    const helpRequestId = Number(req.params.help_request_id);

    const updatedHelpRequest = await helpRequestsServices.updateHelpRequest(
      AuthUserId,
      helpRequestId,
      helpRequestBody
    );
    res.status(200).send({ updatedHelpRequest });
  } catch (error) {
    next(error);
  }
};
