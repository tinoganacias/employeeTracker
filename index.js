const inquirer = require("inquirer");
const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employees_db"
});

connection.connect(function (err) {
    if (err) throw err;
    stepOne();
  });
  
  
  function stepOne() {
    inquirer
      .prompt({
        type: "list",
        name: "event",
        message: "Would you like to do?",
        choices: [
          "See Employees",
          "See Employees by Department",
          "Add Employee",
          "Delete Employees",
          "Update Employee Role",
          "Add Role",
          "Finish"]
      })
      .then(function ({ event }) {
        switch (event) {
          case "View Employees":
            viewEmployee();  
          case "View Employees by Department":
            viewEmployeeByDepartment();
          case "Add Employee":
            addEmployee();  
          case "Remove Employees":
            removeEmployees();  
          case "Update Employee Role":
            updateEmployeeRole(); 
          case "Add Role":
            addRole();
          case "End":
            connection.end();
            
        }
      });
  }

