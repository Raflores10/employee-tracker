const mysql = require("mysql2")

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'Rafjr11!',
      database: 'team_db'
    },
    console.log(`Connected to the team_db database.`)
  );

  module.exports = db