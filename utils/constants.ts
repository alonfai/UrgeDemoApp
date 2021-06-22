/**
 * Options for user pagination
 */
export const TABLE_PAGINATION_OPTIONS = [5, 10, 20, 30, 40, 50];

/**
 * number of results to send on each API call
 */
export const API_LIMIT_PER_REQUEST = 10;

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
