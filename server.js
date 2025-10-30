const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000; // Change port to 4000 to avoid conflict

app.use(cors());

const users = [
  { id: 1, name: 'Ada Lovelace', email: 'ada@example.com' },
  { id: 2, name: 'Alan Turing', email: 'alan@example.com' },
];

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