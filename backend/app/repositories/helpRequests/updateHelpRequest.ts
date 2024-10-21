import db from "../../connection";
import { HelpRequestBody } from "../../db/seeds/data/test/help-requests";
import { getHelpTypeId } from "../../utils/preloadHelpTypes";
import { AppError } from "../../errors/AppError";
import { errors } from "../../errors/errors";

export const updateHelpRequest = async (
  author_id: Number,
  help_request_id: Number,
  helpRequestBody: HelpRequestBody
): Promise<any> => {
  const { title, description, help_type, req_date, status } = helpRequestBody;
  const values = [];
  const updates = [];
  const help_type_id = getHelpTypeId(help_type);

  if (title) {
    updates.push(`title =$${values.push(title)}`);
  }
  if (help_type_id) {
    updates.push(`help_type_id =$${values.push(help_type_id)}`);
  }
  if (description) {
    updates.push(`description =$${values.push(description)}`);
  }
  if (author_id) {
    updates.push(`author_id =$${values.push(author_id)}`);
  }
  if (req_date) {
    updates.push(`req_date =$${values.push(req_date)}`);
  }
  if (status) {
    updates.push(`status =$${values.push(status)}`);
  }

  if (updates.length === 0) {
    throw new AppError(errors.MANDATORY_FIELD_ERROR, "No fields to update");
  }
  const query = `
        UPDATE
            help_requests SET ${updates}
        WHERE
            id = ${help_request_id}
        RETURNING
            id,
            title,
            author_id,
            help_type_id,
            description,
            req_date,
            status,
            created_at`;

  const { rows } = await db.query(query, values);

  return rows[0];
};