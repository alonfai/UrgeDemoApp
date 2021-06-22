import log from 'loglevel';

log.setDefaultLevel(process.env.NODE_ENV === 'production' ? 'error' : 'trace');

/**
 * Output trace message to console (level '0')
 */
export function trace(...msg: any[]) {
  log.trace(msg);
}

/**
 * Output debug message to console (level '1')
 */
export function debug(...msg: any[]) {
  log.debug(msg);
}

/**
 * Output info message to console (level '2')
 */
export function info(...msg: any[]) {
  log.info(msg);
}

/**
 * Output warn message to console (level '3')
 */
export function warn(...msg: any[]) {
  log.warn(msg);
}

/**
 * Output error message to console (level '4')
 */
export function error(...msg: any[]) {
  log.error(msg);
}

/**
 * disable all logging below the given level
 */
export function setLevel(level: log.LogLevelDesc) {
  log.setLevel(level);
}
