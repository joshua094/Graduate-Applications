// Import required packages
const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
// Serve your static files (like index.html)
app.use(express.static('.'));

// Create a proxy endpoint for the Google Generative AI API
app.post('/api/data', async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key is not configured on the server.' });
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    // Make a POST request to the external API with the body from the frontend
    const response = await axios.post(apiUrl, req.body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Send the data from the external API back to your frontend
    res.json(response.data);
  } catch (error) {
    console.error('Error proxying API request:', error);
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to fetch data from the external API.',
      details: error.message 
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});