
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
          choices:
          [ 
            "View all departments", 
            "View all roles" ,
            "View all employees", 
            "Add department",
            "Add role", 
            "Add employee", 
            "Update employee"
          ],
        },
      ];

      inquirer
    .prompt(baseQuestion)
    .then((answers) => {
      if (answers.action == "View all departments") {
        return viewDepartments();
      } else if (answers.action == "Add department") {
        return addDepartments();
      }
        else if (answers.action == "View all roles") {
        return viewRoles();
      } else if (answers.action == "Add role") {
        return addRoles();
      } 
      else if  (answers.action == "View all employees") {
        return viewEmployee();
      } else if (answers.action == "Add employee") {
        return addEmployee();
     } else (answers.action == "Update employee") {
        return updateEmployee();
     }
});
}


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
    
    db.query(sql, params, (err) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      console.log ("deparment added")
      initialQuestion();
      });
    })
}



function viewRoles() {
    const sql = `SELECT title, salary, department_id  FROM job_role`;
    
    db.query(sql, (err, rows) => {
        if (err) {
          res.status(500).json({ error: err.message });
           return;
        }
        console.table (rows)
        initialQuestion();
      });
}


function addRoles() {
    inquirer.
    prompt([
        {
          type: "input",
          name: "job_title",
          message: "What is your role's name?",
        },

        {
          type: "input",
          name: "salary",
          message: "What is your salary?",
        },

        {
            type: "input",
            name: "department_id",
            message: "What is your department id?",
          },

      ])
    .then((answers) => {

        const sql = `INSERT INTO job_role (title, salary, department_id)
      VALUES (?,?,?)`;
    const params = [answers.job_title, answers.salary,answers.department_id];
    
    db.query(sql, params, (err) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      console.log ("deparment added")
      initialQuestion();
      });
    })
}


function viewEmployee() {
    const sql = `SELECT first_name, last_name, role_id,manager_id  FROM employee`;
    
    db.query(sql, (err, rows) => {
        if (err) {
          res.status(500).json({ error: err.message });
           return;
        }
        console.table (rows)
        initialQuestion();
      });
}


function addEmployee() {
    inquirer.
    prompt([
        {
          type: "input",
          name: "first_name",
          message: "What is your first name?",
        },

        {
          type: "input",
          name: "last_name",
          message: "What is your last name?",
        },

        {
            type: "input",
            name: "role_id",
            message: "What is your role id?",
          },
          {
            type: "input",
            name: "manager_id",
            message: "What is your manager id?",
          }

      ])
    .then((answers) => {

        const sql = `INSERT INTO employee (first_name, last_name , role_id, manager_id)
      VALUES (?,?,?,?)`;
    const params = [answers.first_name, answers.last_name, answers.role_id, answers.manager_id];
    
    db.query(sql, params, (err) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      console.log ("employee added")
      initialQuestion();
      });
    })
}


function updateEmployee() {
    
    inquirer.
    prompt([
        {
          type: "input",
          name: "first_name",
          message: "What is your first name?",
        },

        {
          type: "input",
          name: "last_name",
          message: "What is your last name?",
        },

        {
            type: "input",
            name: "role_id",
            message: "What is your role id?",
          },
          {
            type: "input",
            name: "manager_id",
            message: "What is your manager id?",
          }

      ])
    .then((answers) => {


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
    


//   // first prompt - whats the emolpyee id  (employee_id)
//   // second prompt - whats the new value you want to add (new ) role-id



initialQuestion()
