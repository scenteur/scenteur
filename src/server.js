const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const RAPIDAPI_KEY = 'e0fc009cafmsh9e0b48a371597a9p175552jsn5995efe275d4';
const RAPIDAPI_HOST = 'fragrance-api.p.rapidapi.com';

app.get('/api/fragrances/search', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.post(
      'https://fragrance-api.p.rapidapi.com/multi-search',
      { queries: [{ indexUid: 'fragrances', q: query || '', limit: 100, offset: 0 }] },
      { headers: { 'Content-Type': 'application/json', 'x-rapidapi-key': RAPIDAPI_KEY, 'x-rapidapi-host': RAPIDAPI_HOST } }
    );
    res.json(response.data.results?.[0]?.hits || []);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Search failed' });
  }
});

app.get('/api/fragrances/top', async (req, res) => {
  try {
    const response = await axios.post(
      'https://fragrance-api.p.rapidapi.com/multi-search',
      { queries: [{ indexUid: 'fragrances', q: '', limit: 100, offset: 0 }] },
      { headers: { 'Content-Type': 'application/json', 'x-rapidapi-key': RAPIDAPI_KEY, 'x-rapidapi-host': RAPIDAPI_HOST } }
    );
    res.json(response.data.results?.[0]?.hits || []);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch fragrances' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Scenteur API running on port ${PORT}`);
});
