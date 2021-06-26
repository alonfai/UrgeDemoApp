/**
 * Development environment
 */
export const IsDebug = process.env.NODE_ENV === 'development';

/**
 * Production enviornment
 */
export const IsProduction = process.env.NODE_ENV === 'production';

/**
 * API Domain URL
 */
export const API_DOAMIN = process.env.NEXT_PUBLIC_API_DOMAIN;

/**
 * API Fetching maximum retry attempts on error (starts from 0 attempts), defaults to 2 retries
 */
export const MAX_API_RETRIES = (process.env.NEXT_PUBLIC_MAX_RETRIES as number | undefined) ?? 2;

/**
 * cache timeout for each product inside the cache (defaults to 300000 ms)
 */
export const CACHE_TIMEOUT =
  (process.env.NEXT_PUBLIC_CACHE_TIMEOUT as number | undefined) ?? 300000;

/**
 * Different possible API Status codes
 */
export const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
