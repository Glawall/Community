import db from "../../connection";
import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";

export const removeHelpOffer = async (
  help_request_id: number,
  helper_id: number
): Promise<void> => {
  const query = `
    DELETE FROM help_offers
    WHERE help_request_id = $1 AND helper_id = $2;
  `;

  const values = [help_request_id, helper_id];

  const { rowCount } = await db.query(query, values);

  if (rowCount === 0) {
    throw new AppError(errors.HELP_OFFER_NOT_FOUND, "Help offer not found");
  }
};
