
const inquirer = require('inquirer');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'f3K7Ab5nyRS3!',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

//prompt first question
  function initialQuestion() {
    const baseQuestion = [
        {
          type: "list",
          name: "action",
          message: "What would you like to do ?",
          choices: ["View All Employee", "View All Departments", "View All Roles" , "Add Departments", "Add Roles", "Add Roles", "Update Employee", "No"],
        },
      ];

      inquirer
    .prompt(baseQuestion)
    .then((answers) => {
      if (answers.action == "View All Departments") {
        return viewDepartments();
      } else if (answers.action == "Add Departments") {
        return addDepartments();
      } 
    });
  }
//view departments

function viewDepartments() {
    const sql = `SELECT id, department_name FROM department`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      console.table (rows)
      initialQuestion();
    });
    
}

initialQuestion();
//add departments
function addDepartments() {

    inquirer.
    prompt([
        {
          type: "input",
          name: "department_name",
          message: "What is your department's name?",
        },
      ])
    .then((answers) => {

        const sql = `INSERT INTO department (department_name)
      VALUES (?)`;
    const params = [answers.department_name];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      console.log ("deparment added")
      initialQuestion();
      });
    
    })

    
}

// //view roles

//   app.get('??', (req, res) => {
//     const sql = `SELECT id, title, salary, department_id  FROM job_role`;
    
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//          return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });

//   //view employees
//   app.get('', (req, res) => {
//     const sql = `SELECT employee ,first_name, last_name, role_id , manager_id FROM employee`;
    
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//          return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });




  
//  // Add a job_role
//  app.post('/??', ({ body }, res) => {
//     const sql = `INSERT INTO job_role (id, title, salary, department_id)
//       VALUES (? , ? , ? , ? )`;
//     const params = [body.id, body.title, body.salary, body,department_id];
    
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: body
//       });
//     });
//   });

// // Add an employee
// app.post('/??', ({ body }, res) => {
//     const sql = `INSERT INTO employee (employee, first_name, last_name, role_id, manager_id)
//       VALUES (?, ? , ? ,? ,?)`;
//     const params = [body.employee, body.first_nam, body.last_name, body.role_id, body.manager_id];
    
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: body
//       });
//     });
//   });

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
//   });


//   // first prompt - whats the emolpyee id  (employee_id)
//   // second prompt - whats the new value you want to add (new ) role-id



