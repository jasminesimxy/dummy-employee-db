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


//view departments

  app.get('??', (req, res) => {
    const sql = `SELECT id, department_name AS "??" FROM department`;
    
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

//view roles

  app.get('??', (req, res) => {
    const sql = `SELECT id, title, salary, department_id AS "??" FROM job_role`;
    
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

  //view employees
  app.get('', (req, res) => {
    const sql = `SELECT employee ,first_name, last_name, role_id , manager_id AS "??" FROM employee`;
    
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




// Add a department
app.post('/??', ({ body }, res) => {
    const sql = `INSERT INTO department (id,department_name)
      VALUES (? ,? )`;
    const params = [body.department_name];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });
  
 // Add a job_role
 app.post('/??', ({ body }, res) => {
    const sql = `INSERT INTO job_role (id, title, salary, department_id)
      VALUES (? , ? , ? , ? )`;
    const params = [body.id, body.title, body.salary, body,department_id];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

// Add an employee
app.post('/??', ({ body }, res) => {
    const sql = `INSERT INTO employee (employee, first_name, last_name, role_id, manager_id)
      VALUES (?, ? , ? ,? ,?)`;
    const params = [body.employee, body.first_nam, body.last_name, body.role_id, body.manager_id];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

// update employees's database 
app.put(' ?? ', (req, res) => {
    const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
    const params = [req.body.review, req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Movie not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
  });
