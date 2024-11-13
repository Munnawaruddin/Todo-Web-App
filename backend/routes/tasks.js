// routes/tasks.js
const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');

const router = express.Router();

// Create Task
router.post('/', auth, async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const newTask = new Task({ title, description, status, userId: req.user.id });
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Other CRUD routes here...

module.exports = router;
