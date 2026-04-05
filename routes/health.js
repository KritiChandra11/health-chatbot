const express = require('express');
const router = express.Router();
const healthService = require('../services/healthService');

/**
 * GET /api/health/status
 * Test route to check API health
 */
router.get('/status', (req, res) => {
  try {
    const status = healthService.getHealthStatus();
    res.json(status);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to get health status',
      message: error.message
    });
  }
});

/**
 * POST /api/health/chat
 * Main chatbot endpoint
 */
router.post('/chat', (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: 'Message is required',
        message: 'Please provide a health-related query'
      });
    }

    const response = healthService.processHealthQuery(message);
    res.json(response);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to process chat message',
      message: error.message
    });
  }
});

module.exports = router;
