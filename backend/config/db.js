// config/db.js for SQLite
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./todo-app.db');
module.exports = db;
