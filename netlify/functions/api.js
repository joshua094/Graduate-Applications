
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();

// Use CORS to allow requests from your frontend
app.use(cors());
app.use(express.json());

// The router will be mounted at /.netlify/functions/api
const router = express.Router();

router.post('/data', async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key is not configured on the server.' });
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const response = await axios.post(apiUrl, req.body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error proxying API request:', error);
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to fetch data from the external API.',
      details: error.message 
    });
  }
});

// Mount the router under the /api path
app.use('/.netlify/functions/api', router);

// Export the handler for Netlify
module.exports.handler = serverless(app);
