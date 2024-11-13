// models/User.js
const { Sequelize, DataTypes } = require('sequelize');

// Use file-based SQLite database (e.g., 'database.sqlite')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', 
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
