const mysql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');



const PORT = process.env.PORT || 3000
require('console.table')
const app = express();

const db = mysql.createConnection(
  {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'employee_db',
  },
  console.log(`Connected to the books_db database.`),
)

inquirer.prompt([
    {
        type:"list",
        message:"Please select an option.",
        name: 'choicesMain',
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add An Employee", "Update An Employee Role", "Exit"]
    }
]).then((res)=>{
    console.log(res.choicesMain);
    switch(res.choicesMain){
        case "View All Departments":
            //TODO: ADD function
            break;
        
        case "View All Roles":
            //TODO: ADD function
            break;
        
        case "View All Employees":
            //TODO: ADD function
            break;
        
        case "Add a Department":
            //TODO: ADD function
            break;
        
        case "Add a Role":
            //TODO: ADD function
            break;
        
        case "Add An Employee":
            //TODO: ADD function
            break;
        
        case "Update An Employee Role":
            //TODO: ADD function
            break;
        
        case "Exit":
            //TODO: ADD function
            break;
        
    }
}).catch((err)=>{
    if(err)throw err;
});






app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})