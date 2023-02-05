const mysql = require('mysql2')
const inquirer = require('inquirer')
const PORT = process.env.PORT || 3001
require('console.table')

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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})