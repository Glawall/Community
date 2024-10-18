// import { Request, Response, NextFunction } from "express";

// import * as userServices from "../../services/users";

// export const removeUser = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { help_request_id } = req.params;
//     await userServices.removeUser(help_request_id);
//     res.status(204).send();
//   } catch (error) {
//     next(error);
//   }
// };

import db from "../../connection";

export const removeUser = async (user_id: any) => {
  const query = `DELETE FROM users WHERE id =$1`;

  const result = await db.query(query, [user_id]);
  return result;
};
