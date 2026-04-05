const healthDatabase = require('../data/healthDatabase');

/**
 * Get current health status
 * @returns {Object} Status information
 */
function getHealthStatus() {
  return {
    status: 'operational',
    service: 'Health Assistant Chatbot',
    timestamp: new Date().toISOString(),
    healthTopics: Object.keys(healthDatabase)
  };
}

/**
 * Process health-related query
 * @param {string} userMessage - User's health query
 * @returns {Object} Response from chatbot with structured recommendations
 */
function processHealthQuery(userMessage) {
  const message = userMessage.toLowerCase().trim();

  // Keyword matching for health topics
  for (const [key, healthInfo] of Object.entries(healthDatabase)) {
    if (message.includes(key.toLowerCase())) {
      return {
        success: true,
        topic: healthInfo.topic,
        advice: healthInfo.advice,
        recommendations: healthInfo.recommendations,
        timestamp: new Date().toISOString()
      };
    }
  }

  // Fallback: return general guidance with list of available topics
  return {
    success: true,
    topic: 'Need Clarification',
    advice: 'I appreciate your question. For specific health concerns, please consult a healthcare professional.',
    message: 'Try asking about one of these topics: ' + Object.values(healthDatabase).map(h => h.topic).join(', '),
    recommendations: [
      {
        type: 'step',
        title: 'Available Topics',
        content: Object.values(healthDatabase).map(h => h.topic).join(', ')
      }
    ],
    timestamp: new Date().toISOString()
  };
}

module.exports = {
  getHealthStatus,
  processHealthQuery
};
