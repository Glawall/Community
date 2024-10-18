import { Request, Response, NextFunction } from "express";
import * as userServices from "../../services/users";

export const removeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user_id } = req.params;
    await userServices.removeUser(user_id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
