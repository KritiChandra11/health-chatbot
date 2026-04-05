/**
 * Logging middleware for HTTP requests
 */
function logRequest(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const path = req.path;
  
  console.log(`[${timestamp}] ${method} ${path}`);
  
  next();
}

/**
 * Log error with metadata
 * @param {string} message - Error message
 * @param {Error} error - Error object
 */
function logError(message, error) {
  const timestamp = new Date().toISOString();
  console.error(`[ERROR] [${timestamp}] ${message}:`, error);
}

/**
 * Log info with metadata
 * @param {string} message - Info message
 */
function logInfo(message) {
  const timestamp = new Date().toISOString();
  console.log(`[INFO] [${timestamp}] ${message}`);
}

module.exports = {
  logRequest,
  logError,
  logInfo
};
