const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // To load .env file variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('src'));

// API endpoint at the homepage
app.post('/', async (req, res) => {
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
    console.error('Error proxying API request:');
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Data:', error.response.data);
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error', error.message);
    }
    res.status(error.response?.status || 500).json({
      error: 'Failed to fetch data from the external API.',
      details: error.message,
      axiosError: error.response?.data
    });
  }
});

// Serve the HTML file for GET requests
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});