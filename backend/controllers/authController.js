const bcrypt = require('bcrypt'); // For hashing passwords
const User = require('../models/User');

// Signup Controller
const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await User.create({ username, password: hashedPassword });

    res.status(201).json({ id: newUser.id, username: newUser.username });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Failed to sign up' });
  }
};

module.exports = { signup };
