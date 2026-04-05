# Health Assistant Chatbot

A clean and modular Node.js Express API for a health assistant chatbot.

## Project Structure

```
health-chatbot/
├── data/           # JSON datasets (symptoms, health info)
├── services/       # Business logic layer
├── routes/         # API route handlers
├── utils/          # Helper functions (logger, validators, etc.)
├── index.js        # Main server entry point
├── package.json    # Dependencies and scripts
└── README.md       # This file
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server (development with auto-reload):
```bash
npm run dev
```

Or start in production mode:
```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### Health Check
- **GET** `/` - Server status

### Health API
- **GET** `/api/health/status` - Check API health and available topics
- **POST** `/api/health/chat` - Send a health query

**Example Chat Request:**
```bash
curl -X POST http://localhost:3001/api/health/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "I have a headache"}'
```

## Features

- Clean modular architecture
- Express.js server with middleware
- Request logging utility
- JSON-based symptom database
- Error handling middleware
- RESTful API design

## Development

To add new health topics:
1. Update `/data/symptoms.json` with new topics
2. The service will automatically recognize them in queries

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- User authentication
- Advanced NLP for better query matching
- History and user profiles
- Integration with health APIs
## Screenshots

![Home](assets/home.jpeg)

![Result](assets/result.jpeg)
