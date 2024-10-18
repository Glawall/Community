export const errors = {
  AUTHORISATION_ERROR: {
    statusCode: 401,
    message: "User is not authorised",
  },
  VALIDATION_ERROR: {
    statusCode: 400,
    message: "Invalid input provided",
  },
  MANDATORY_FIELD_ERROR: {
    statusCode: 400,
    message: "Mandatory fields required",
  },
  REPOSITORY_ERROR: {
    statusCode: 500,
    message: "Internal server error",
  },
  USER_NOT_FOUND: {
    statusCode: 404,
    message: "User was not found",
  },
  HELP_REQUEST_NOT_FOUND: {
    statusCode: 404,
    message: "Help request was not found",
  },
  HELP_OFFER_NOT_FOUND: {
    statusCode: 404,
    message: "Help offer was not found",
  },
};
