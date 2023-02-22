const mysql = require('mysql2')
const express = require('express')
const inquirer = require('inquirer')
const {query} = require('express')

const PORT = process.env.PORT || 3000
require('console.table')
const app = express();

const connection = mysql.createConnection(
  {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'employee_db',
  },
  console.log(`Connected to the employee_db database.`),
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
        //TODO: ADD function
        allEmployees()
        break

      case 'View All Roles':
        //TODO: ADD function
        break

      case 'View All Employees':
        //TODO: ADD function
        break

      case 'Add a Department':
        //TODO: ADD function
        break

      case 'Add a Role':
        //TODO: ADD function
        break

      case 'Add An Employee':
        //TODO: ADD function
        break

      case 'Update An Employee Role':
        //TODO: ADD function
        break

      case 'Exit':
        //TODO: ADD function
        break
    }
  })
  .catch((err) => {
    if (err) throw err
  })

function allEmployees() {
  var allEmployees = []
  var query =
  connection.query(query, function (err, result) {
    if (err) throw err

    let employeeArray = []
    for (let i = 0; i < result.length; i++) {
      employeeArray = []

      employeeArray.push(result[i].id)
      employeeArray.push(result[i].first_name)
      employeeArray.push(result[i].last_name)
      employeeArray.push(result[i].title)
      employeeArray.push(result[i].salary)
      employeeArray.push(result[i].department_name)

      allEmployees.push(employeeArray)
    }

    
    promptQuit()
  })
}}

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
        connection.end()
      }
    })
}

runApp();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
