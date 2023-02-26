const { rejects } = require("assert");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const { resolve } = require("path");
const PORT = process.env.PORT || 3001;

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "f3K7Ab5nyRS3!",
    database: "employee_db",
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
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add department",
        "Add role",
        "Add employee",
        "Update employee ",
      ],
    },
  ];

  inquirer.prompt(baseQuestion).then((answers) => {
    if (answers.action == "View all departments") {
      return viewDepartments();
    } else if (answers.action == "Add department") {
      return addDepartments();
    } else if (answers.action == "View all roles") {
      return viewRoles();
    } else if (answers.action == "Add role") {
      return addRoles();
    } else if (answers.action == "View all employees") {
      return viewEmployee();
    } else if (answers.action == "Add employee") {
      return addEmployee();
    } else answers.action == "Update employee";
    return updateEmployeeRole();
  });
}

function viewDepartments() {
  const sql = `SELECT id, department_name FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return null;
    }

    console.table(rows);
    initialQuestion();
  });
}

function addDepartments() {
  inquirer
    .prompt([
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
        console.log("deparment added");
        initialQuestion();
      });
    });
}

function viewRoles() {
  const sql = `SELECT title, salary, department_id  FROM job_role`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.table(rows);
    initialQuestion();
  });
}

function addRoles() {
  inquirer
    .prompt([
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
      const params = [answers.job_title, answers.salary, answers.department_id];

      db.query(sql, params, (err) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        console.log("deparment added");
        initialQuestion();
      });
    });
}

function viewEmployee() {
  const sql = `SELECT first_name, last_name, role_id, manager_id  FROM employee`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
      //res.status(500).json({ error: err.message });
      return null;
    }
    console.log(rows)
    //console.table(rows);
    initialQuestion();
    //return rows;
  });
}

function addEmployee() {
  inquirer
    .prompt([
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
      },
    ])
    .then((answers) => {
      const sql = `INSERT INTO employee (first_name, last_name , role_id, manager_id)
      VALUES (?,?,?,?)`;
      const params = [
        answers.first_name,
        answers.last_name,
        answers.role_id,
        answers.manager_id,
      ];

      db.query(sql, params, (err) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        console.log("employee added");
        initialQuestion();
      });
    });
}

function updateEmployeeRole() {
  // first sql statemnt to be executed
  const sql = `SELECT id, first_name, last_name, role_id, manager_id  FROM employee`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
      //res.status(500).json({ error: err.message });
      return null;
    }

    const updateEmployeeRoleQuestion = [
      {
        type: "list",
        name: "update_employee_role",
        message: "Which employee's role would you like to change ?",
        choices: rows,
      },
    ];

    inquirer.prompt(updateEmployeeRoleQuestion).then((employee) => {
      // if (answers.update_employee_role == "??") {
      //   return initialQuestion();
      // }
      //console.log('asnwers is', answer);
      const newRoleQuestion = [
        {
          type: "list",
          name: "newRole",
          message: "Please select the employee's new role.",
          choices: [
            { id: 1, role: "Software engineers"},
            { id: 2, role: "Data engineers"},
          ],
        },
      ]

      inquirer.prompt(newRoleQuestion).then(newRole => {
        // get the
        const params = [ employee.id, newRole.id]
        // sql to pass the update query
        const SQL = `UPDATE employee SET role_id = ? WHERE id = ?`;
        db.query(SQL, params, function(err, results) {
        if (err) {
            console.log(err);
        }

        console.log(results);
      })
      })
    });
  })

initialQuestion();
