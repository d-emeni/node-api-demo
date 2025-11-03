const express = require('express');
const cors = require('cors');
const users = require('./data/users');

const app = express();
const PORT = 4000;

app.use(cors());

// Health check
app.get('/', (req, res) => {
  res.send('Hello from backend');
});

// API route
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
