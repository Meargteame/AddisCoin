const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 5000;

// Initialize the SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Could not connect to database:', err);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Middleware
app.use(express.json());

// API Route for getting user portfolio (example)
app.get('/api/portfolio', (req, res) => {
  db.all('SELECT * FROM portfolio', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ portfolio: rows });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
