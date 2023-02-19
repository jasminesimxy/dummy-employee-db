const express = require('express');

const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );


  //view departments,roles,employees

  app.get('/api/movies', (req, res) => {
    const sql = `SELECT id, movie_name AS title FROM movies`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });