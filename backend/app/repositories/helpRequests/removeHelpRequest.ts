import db from "../../connection";

export const removeHelpRequest = async (
  help_request_id: number
): Promise<void> => {
  const query = `DELETE from help_requests WHERE id = $1 `;
  const values = [help_request_id];
  await db.query(query, values);
};
