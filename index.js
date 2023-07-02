const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/unix-to-date/:timestamp', (req, res) => {
  const timestamp = parseInt(req.params.timestamp);
  const date = new Date(timestamp * 1000);
  const dateString = date.toISOString().replace('T', '+').split('.')[0]; // Replace 'T' with '+', remove decimal part
  res.json({ date: dateString });
});

app.get('/date-to-unix/:date', (req, res) => {
  const dateString = req.params.date.replace(/\+/g, 'T'); // Replace '+' with 'T'
  const date = new Date(dateString);
  const timestamp = Math.floor(date.getTime() / 1000);
  res.json({ timestamp });
});

app.get('/', (req, res) => {
  const instructions = {
    title: 'Unix Timestamp Converter API',
    description: 'A simple API to convert Unix timestamps to date strings and vice versa.',
    baseUrl: 'https://unix-timestamp-converter.mager92838.repl.co', // Replace with your actual base URL
  };
  res.render('index', { instructions });
});

app.get('/sitemap.xml', (req, res) => {
  const baseUrl = 'https://unix-timestamp-converter.mager92838.repl.co'; // Replace with your actual base URL
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}/</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    </urlset>
  `;
  res.set('Content-Type', 'application/xml');
  res.send(sitemap);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
