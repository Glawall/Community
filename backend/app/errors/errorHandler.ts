// errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError";
import getHttpError from "./getHttpError";

const errorHandler = (
  appErr: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (appErr instanceof AppError) {
    const httpError = getHttpError(appErr);

    res
      .status(httpError.statusCode)
      .send({ error: { message: httpError.message } });
  } else {
    console.error("CRITICAL ERROR:", appErr);
    res.status(500).send({ error: { code: 500, msg: "Critical Error!" } });
    if (process.env.NODE_ENV !== "production") {
      throw appErr;
    }
  }
};

export default errorHandler;
