const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// Fragrance search endpoint
app.get('/api/fragrances/search', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(`https://api.fragrantica.com/search?q=${query}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Search failed' });
  }
});

// Top fragrances endpoint
app.get('/api/fragrances/top', async (req, res) => {
  try {
    const topFragrances = [
      { id: 1, name: "Bleu de Chanel", brand: "Chanel", year: 2010, gender: "mens", category: "designer", notes: { top: ["Citrus", "Mint", "Pink Pepper"], middle: ["Ginger", "Nutmeg", "Jasmine"], base: ["Incense", "Vetiver", "White Musk"] } },
      { id: 2, name: "Sauvage", brand: "Dior", year: 2015, gender: "mens", category: "designer", notes: { top: ["Calabrian Bergamot", "Pepper"], middle: ["Sichuan Pepper", "Lavender", "Pink Pepper"], base: ["Ambroxan", "Cedar", "Labdanum"] } },
      { id: 3, name: "Black Opium", brand: "YSL", year: 2014, gender: "womens", category: "designer", notes: { top: ["Pink Pepper", "Orange Blossom", "Pear"], middle: ["Coffee", "Jasmine"], base: ["White Musk", "Patchouli", "Vanilla"] } },
      { id: 4, name: "Baccarat Rouge 540", brand: "Maison Francis Kurkdjian", year: 2015, gender: "unisex", category: "niche", notes: { top: ["Saffron", "Jasmine"], middle: ["Amberwood", "Ambergris"], base: ["Fir Resin", "Cedar"] } },
      { id: 5, name: "Good Girl", brand: "Carolina Herrera", year: 2016, gender: "womens", category: "designer", notes: { top: ["Almond", "Coffee"], middle: ["Tuberose", "Jasmine Sambac"], base: ["Tonka Bean", "Cocoa", "Sandalwood"] } },
      { id: 6, name: "Aventus", brand: "Creed", year: 2010, gender: "mens", category: "niche", notes: { top: ["Pineapple", "Bergamot", "Apple", "Blackcurrant"], middle: ["Birch", "Patchouli", "Rose", "Jasmine"], base: ["Musk", "Oakmoss", "Ambergris", "Vanilla"] } },
      { id: 7, name: "La Vie Est Belle", brand: "Lancôme", year: 2012, gender: "womens", category: "designer", notes: { top: ["Blackcurrant", "Pear"], middle: ["Iris", "Jasmine", "Orange Blossom"], base: ["Praline", "Vanilla", "Patchouli", "Sandalwood"] } },
      { id: 8, name: "Ombre Leather", brand: "Tom Ford", year: 2018, gender: "unisex", category: "niche", notes: { top: ["Cardamom"], middle: ["Leather", "Jasmine Sambac", "Vetiver"], base: ["Amber", "White Musk", "Moss"] } },
      { id: 9, name: "Flowerbomb", brand: "Viktor & Rolf", year: 2005, gender: "womens", category: "designer", notes: { top: ["Tea", "Bergamot", "Osmanthus"], middle: ["Jasmine", "Freesia", "Orchid", "Rose"], base: ["Patchouli", "Musk"] } },
      { id: 10, name: "Y Eau de Parfum", brand: "Yves Saint Laurent", year: 2018, gender: "mens", category: "designer", notes: { top: ["Ginger", "Bergamot"], middle: ["Geranium", "Sage"], base: ["Tonka Bean", "Cedarwood", "Ambergris"] } },
      { id: 11, name: "Acqua di Giò", brand: "Giorgio Armani", year: 1996, gender: "mens", category: "designer", notes: { top: ["Calabrian Bergamot", "Neroli", "Green Tangerine"], middle: ["Rosemary", "Jasmine", "Persimmon"], base: ["White Musk", "Cedarwood", "Amber"] } },
      { id: 12, name: "Chance Eau Tendre", brand: "Chanel", year: 2010, gender: "womens", category: "designer", notes: { top: ["Grapefruit", "Quince"], middle: ["Hyacinth", "Jasmine"], base: ["White Musk", "Iris", "Vetiver"] } },
      { id: 13, name: "Light Blue", brand: "Dolce & Gabbana", year: 2001, gender: "womens", category: "designer", notes: { top: ["Sicilian Lemon", "Apple", "Cedar", "Bellflower"], middle: ["Bamboo", "Jasmine", "White Rose"], base: ["Cedar", "Musk", "Amber"] } },
      { id: 14, name: "1 Million", brand: "Paco Rabanne", year: 2008, gender: "mens", category: "designer", notes: { top: ["Grapefruit", "Mint", "Blood Mandarin"], middle: ["Rose", "Cinnamon", "Spices"], base: ["Leather", "Amber", "Patchouli", "Woody Notes"] } },
      { id: 15, name: "Mon Guerlain", brand: "Guerlain", year: 2017, gender: "womens", category: "designer", notes: { top: ["Bergamot", "Lavender"], middle: ["Jasmine Sambac", "Prune"], base: ["Sandalwood", "Vanilla", "Coumarin"] } },
    ];
    res.json(topFragrances);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch fragrances' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Scenteur API running on port ${PORT}`);
});