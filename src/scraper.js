// Scenteur Price Scraper
// Activate once you have a ScraperAPI key (scraperapi.com, ~$49/mo for 100k requests)
// This script scrapes prices from retailer sites and updates a prices.json file
// Run it on a schedule (e.g. via cron or a Render cron job) every 6 hours

const axios = require('axios');
const fs = require('fs');

const SCRAPER_API_KEY = 'YOUR_SCRAPERAPI_KEY_HERE'; // Add this once you sign up

// Fragrances to track - add more as your catalog grows
const FRAGRANCES_TO_SCRAPE = [
  { name: 'Sauvage', searchTerm: 'Dior Sauvage 100ml EDT' },
  { name: 'Aventus', searchTerm: 'Creed Aventus 100ml' },
  { name: 'Bleu de Chanel', searchTerm: 'Chanel Bleu de Chanel 100ml EDP' },
  // Add more fragrances here as needed
];

// Retailers to scrape - each needs its own selector logic since HTML differs per site
const RETAILERS = [
  {
    name: 'FragranceNet',
    buildUrl: (query) => `https://www.fragrancenet.com/search?q=${encodeURIComponent(query)}`,
    priceSelector: '.product-price', // CSS selector - needs verification per site
  },
  {
    name: 'Jomashop',
    buildUrl: (query) => `https://www.jomashop.com/catalogsearch/result/?q=${encodeURIComponent(query)}`,
    priceSelector: '.price',
  },
  // Add more retailers here following the same pattern
];

async function scrapeUrl(url) {
  try {
    const response = await axios.get('http://api.scraperapi.com', {
      params: {
        api_key: SCRAPER_API_KEY,
        url: url,
        render: false, // set true if site needs JS rendering (costs more credits)
      },
      timeout: 30000,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to scrape ${url}:`, error.message);
    return null;
  }
}

// Basic price extraction using regex - more reliable than CSS selectors
// since scraped HTML structure varies and CSS classes change often
function extractPrice(html) {
  const priceMatch = html.match(/\$(\d+\.\d{2})/);
  return priceMatch ? parseFloat(priceMatch[1]) : null;
}

async function scrapeAllPrices() {
  const results = {};

  for (const fragrance of FRAGRANCES_TO_SCRAPE) {
    results[fragrance.name] = [];

    for (const retailer of RETAILERS) {
      const url = retailer.buildUrl(fragrance.searchTerm);
      console.log(`Scraping ${retailer.name} for ${fragrance.name}...`);

      const html = await scrapeUrl(url);
      if (html) {
        const price = extractPrice(html);
        if (price) {
          results[fragrance.name].push({
            s: retailer.name,
            p: price,
            link: url,
          });
        }
      }

      // Be respectful - wait between requests to avoid hammering sites
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Mark the lowest price as "best"
    if (results[fragrance.name].length > 0) {
      const lowest = results[fragrance.name].reduce((min, p) => p.p < min.p ? p : min);
      lowest.best = true;
    }
  }

  // Save results to a JSON file that the API server can read
  fs.writeFileSync(
    './scraped-prices.json',
    JSON.stringify(results, null, 2)
  );

  console.log('Scraping complete! Results saved to scraped-prices.json');
  return results;
}

// Run the scraper
scrapeAllPrices().catch(console.error);

module.exports = { scrapeAllPrices };
