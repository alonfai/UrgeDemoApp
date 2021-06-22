/**
 * API Fetching maximum retry attempts on error (starts from 0 attempts)
 */
export const MAX_API_RETRIES = 2;

/**
 * Different possible API Status codes
 */
export const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
