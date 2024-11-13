// backend/index.js

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = 5000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Enable CORS for frontend requests
app.use(cors());

// Example route for testing the backend
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});



app.use('/api', authRoutes);

// Your API route for tasks (example)
app.get('/api/tasks', (req, res) => {
  const tasks = [
    { id: 1, task: 'Do the dishes', status: 'pending' },
    { id: 2, task: 'Write code', status: 'in progress' }
  ];
  res.json(tasks);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
