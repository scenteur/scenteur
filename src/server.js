const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const RAPIDAPI_KEY = 'e0fc009cafmsh9e0b48a371597a9p175552jsn5995efe275d4';
const RAPIDAPI_HOST = 'fragrance-api.p.rapidapi.com';

const FALLBACK_DATA = [
  { id: 1, name: "Bleu de Chanel", brand: { name: "Chanel" }, releasedAt: 1265328000000, popularityScore: 2200, reviewsScoreAvg: 4.6, reviewsCount: 1200, notes: [{id:"citrus",name:"Citrus"},{id:"mint",name:"Mint"},{id:"incense",name:"Incense"}] },
  { id: 2, name: "Sauvage", brand: { name: "Dior" }, releasedAt: 1444262400000, popularityScore: 1144, reviewsScoreAvg: 3.93, reviewsCount: 27, notes: [{id:"bergamot",name:"Bergamot"},{id:"pepper",name:"Pepper"},{id:"ambroxan",name:"Ambroxan"}] },
  { id: 3, name: "Aventus", brand: { name: "Creed" }, releasedAt: 1286496000000, popularityScore: 1270, reviewsScoreAvg: 4.76, reviewsCount: 17, notes: [{id:"pineapple",name:"Pineapple"},{id:"birch",name:"Birch"},{id:"musk",name:"Musk"}] },
  { id: 4, name: "Black Opium", brand: { name: "YSL" }, releasedAt: 1412294400000, popularityScore: 980, reviewsScoreAvg: 4.4, reviewsCount: 320, notes: [{id:"coffee",name:"Coffee"},{id:"vanilla",name:"Vanilla"},{id:"jasmine",name:"Jasmine"}] },
  { id: 5, name: "Layton", brand: { name: "Parfums de Marly" }, releasedAt: 1475884800000, popularityScore: 1607, reviewsScoreAvg: 4.57, reviewsCount: 21, notes: [{id:"apple",name:"Apple"},{id:"vanilla",name:"Vanilla"},{id:"sandalwood",name:"Sandalwood"}] },
];

let cachedData = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 6 * 60 * 60 * 1000;

app.get('/api/fragrances/top', async (req, res) => {
  const now = Date.now();

  if (cachedData && (now - cacheTimestamp) < CACHE_DURATION) {
    return res.json(cachedData);
  }

  try {
    const response = await axios.post(
      'https://fragrance-api.p.rapidapi.com/multi-search',
      { queries: [{ indexUid: 'fragrances', q: '', limit: 100, offset: 0 }] },
      { headers: { 'Content-Type': 'application/json', 'x-rapidapi-key': RAPIDAPI_KEY, 'x-rapidapi-host': RAPIDAPI_HOST } }
    );
    const results = response.data.results?.[0]?.hits || [];

    cachedData = results;
    cacheTimestamp = now;

    res.json(results);
  } catch (error) {
    console.error(error.response?.data || error.message);

    if (cachedData) {
      return res.json(cachedData);
    }

    return res.json(FALLBACK_DATA);
  }
});

app.get('/api/fragrances/search', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.post(
      'https://fragrance-api.p.rapidapi.com/multi-search',
      { queries: [{ indexUid: 'fragrances', q: query || '', limit: 20, offset: 0 }] },
      { headers: { 'Content-Type': 'application/json', 'x-rapidapi-key': RAPIDAPI_KEY, 'x-rapidapi-host': RAPIDAPI_HOST } }
    );
    res.json(response.data.results?.[0]?.hits || []);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Search failed' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Scenteur API running on port ${PORT}`);
});