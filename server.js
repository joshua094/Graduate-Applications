const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();


const app = express();
const port = 3000;


app.use(express.json());

app.use(express.static('.'));


app.post('/api/data', async (req, res) => {
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

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});