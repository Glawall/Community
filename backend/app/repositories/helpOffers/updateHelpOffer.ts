import db from "../../connection";
import { errors } from "../../errors/errors";
import { AppError } from "../../errors/AppError";

export const updateHelpOffer = async (
  help_request_id: number,
  helper_id: number,
  helpOfferBody: any
): Promise<any> => {
  const { status } = helpOfferBody;
  const values = [status, helper_id, help_request_id];

  const query = `
    UPDATE 
        help_offers 
    SET status = $1 
    WHERE helper_id = $2 
    AND help_request_id = $3 
    RETURNING helper_id, help_request_id, status`;

  const { rows } = await db.query(query, values);
  if (rows.length === 0) {
    throw new AppError(
      errors.HELP_OFFER_NOT_FOUND,
      "Help offer not found for this help request and helper ID"
    );
  }

  return rows[0];
};
