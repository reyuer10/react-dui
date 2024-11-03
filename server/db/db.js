const mysql = require("mysql2");
require("dotenv").config();

// credentials for database
const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT,
  connectionLimit: 100,
  enableKeepAlive: true,
  keepAliveInitialDelay: 3 * 1000,
  maxIdle: 0,
  queueLimit: 0,
});

db.getConnection((err, data) => {
  if (err) {
    console.log("can't connect to the database.");
  }

  console.log("connected to the database");
});

module.exports = db;
