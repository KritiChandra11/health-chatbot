const express = require('express');
const healthRoutes = require('./routes/health');
const { logRequest } = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3002;
const path = require('path');

// Middleware
app.use(express.json());
app.use(logRequest);

// Serve static files
app.use(express.static(path.join(__dirname)));

// Routes
app.use('/api/health', healthRoutes);

// Serve index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});