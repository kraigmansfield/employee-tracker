const mysql = require('mysql2')
const express = require('express')
const inquirer = require('inquirer')

const PORT = process.env.PORT || 3000
const consoleTable = require('console.table')
const app = express();

const db = mysql.createConnection(
  {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'employee_db',
  },
)
function runApp() {
inquirer
  .prompt([
    {
      type: 'list',
      message: 'Please select an option.',
      name: 'choicesMain',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add a Department',
        'Add a Role',
        'Add An Employee',
        'Update An Employee Role',
        'Exit',
      ],
    },
  ])
  .then((res) => {
    console.log(res.choicesMain)
    switch (res.choicesMain) {
      case 'View All Departments':
        allDepartments();
        break

      case 'View All Roles':
        allRoles();
        break

      case 'View All Employees':
        allEmployees();
        
        break

      case 'Add a Department':
        //TODO: ADD function
        break

      case 'Add a Role':
        
        
        break

      case 'Add An Employee':
        //TODO: ADD function
        break

      case 'Update An Employee Role':
        //TODO: ADD function
        break

      case 'Exit':
        promptQuit();
        break
    }
  })
  .catch((err) => {
    if (err) throw err
  })

function allEmployees() {
  console.log("All Employees");
  let query = `SELECT employee.id, first_name, last_name, title, salary, department_name 
  FROM employee 
  JOIN roles 
  ON (roles_id = roles.id) 
  JOIN department ON (department.id = roles.department_id)`;
  db.query(query, function (err,res) {
    if (err) throw err;
    let employeeArray = [];
    res.forEach(employee => employeeArray.push(employee));
    console.table(employeeArray);
    runApp();
  })
}}

function allDepartments() {
  console.log("All Departments");
  let query = `SELECT * FROM department`;
  db.query(query, function (err,res) {
    if (err) throw err;
    let departmentArray = [];
    res.forEach(department => departmentArray.push(department));
    console.table(departmentArray);
    runApp();
  })
}

function allRoles() {
  console.log("All Roles");
  let query = `SELECT id,title,salary FROM roles`;
  db.query(query, function (err,res) {
    if (err) throw err;
    let rolesArray = [];
    res.forEach(roles => rolesArray.push(roles));
    console.table(rolesArray);
    runApp();
  })
}


function promptQuit() {
  inquirer
    .prompt({
      type: 'list',
      name: 'promptQuit',
      message: 'Would you like to quit this application or run again?',
      choices: ['Run Again', 'Quit Application'],
    })
    .then(function (answer) {
      if (answer.promptQuit === 'Run Again') {
        runApp();
      } else {
        db.end();
      }
    })
}

runApp();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
