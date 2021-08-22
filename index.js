const express = require("express")
const fs = require("fs");
const mysql = require("mysql2");
const { send, allowedNodeEnvironmentFlags, mainModule, title } = require('process');
require('events').EventEmitter.defaultMaxListeners = 20;
const inquirer = require("inquirer");
const consoleTable = require("console.table")


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees_db"
},

console.log("connected to employees_db"))
  
  
 const start = () => {
    inquirer
      .prompt({
        type: "list",
        name: "event",
        message: "Would you like to do?",
        choices: 
        [
          "View All Employees",
          "Add Employee",
          "Update Employee Title",
          "View All Titles",
          "Add Title",
          "View All Departments",
          "Add Department"
          ]
        })
      
      .then(({ event }) => {
        switch (event) {
            
            case "View All Employees":
                    viewEmployees();
                    break;
                
            case "Add Employee":
                    addEmployee();
                    break;

            case "Update Employee Title":
                    updateEmployeeTitle();
                    break;

            case "View All Titles":
                    viewTitle();
                    break;     
                            
            case "Add Title":
                    addTitle();
                    break;

            case "View All Departments":
                    viewDepartment();
                    break;

            case "Add Department":
                    addDepartment();
                    break;
        }
      })
  };

start();

const viewDepartment = () => {
  db.query("SELECT * FROM department", (err, data) => {
      if (err) {
          console.log(err),
              db.end();
      } else {
          console.table(data),
              start();
      }
  });  
};

const viewTitle = () => {
  db.query("SELECT * FROM title", (err, data) => {
      if (err) {
          console.log(err),
              db.end();
      } else {
          console.table(data),
              start();
      }
  }
)}

const addTitle = () => {
    db.query("SELECT * FROM title", (err, data) => {
        if (err) {
            console.log(err);
            db.end();
        } else {
            const addT = data.map(title => {
                return {
                    title: title.title,
                    department: title.department_id,
                    salary: title.salary,
                   
                    value: title.id
                }
    })
    
    inquirer
      .prompt([
          {
           type: "input",
           message: "What is the new title?",
           name: "newTitle"
          },
          {
            type: "input",
            message: "What is the salary?",
            name: "salary"
           },
          {
          type: "list",
          message: "What is the department?",
          name: "newDepartment",
          
          choices: [
          {
            name:"Engineering", value:1
          },
          {
            name: "Finance", value:2
          },
          {
            name: "Legal", value:3
          },
          {
           name:"Sales", value:4
          },
        ]},
    ])
                 
        .then(answers => {
            console.log(answers);
            db.query(`INSERT INTO title (title, salary, department_ID) VALUES (?,?,?)`, 
            [answers.newTitle, answers.salary, answers.newDepartment],
                (err, data) => {
                    if (err) {
                        console.log(err);
                        db.end();
                    } else {
                        console.log("title added!");
                        viewEmployees();
                    }
                
                    })
                })
            }})}

    const viewEmployees = () => {
        db.query("SELECT employee.id, first_name, last_name, title, department, pay, manager_id FROM employee", (err, data) => {
            if (err) {
                console.log(err),
                    db.end()
            } else {
                console.table(data),
                    start();
            }
    })
    }



    const addEmployee = () => {
    db.query("SELECT * FROM employee", (err, data) => {
        if (err) {
            console.log(err);
            db.end();
        } else {
            const addE = data.map(employee => {
                return {
                    first_name: employee.first_name,
                    last_name: employee.last_name,
                    
                    salary: title.salary,
                    manager_id: employee.manager_id,
                    value: employee.id
                }
    })
    inquirer
        .prompt([
            {
            type: "input",
            message: "What is the employee's first name?",
            name: "employeeFirstName"
            },
            {
            type: "input",
            message: "What is the employee's last name?",
            name: "employeelastNameUpdatedTitle"
            },
            {
            type: "list",
            message: "What is the employee's title?",
            name: "employeeTitle",
            choices: [{
                        name:"Lead Engineer", values:1
                    },
                    {
                        name: "Software Engineer", values:2
                    },
                    {
                        name: "Account Manager", values:3
                    },
                    {
                    name:"Accountant", values:4
                    },
                    {
                    name:"Legal Team Lead", values:5
                    },
                    {
                    name:"Lawyer", values:6
                    },
                    {
                    name:"Sales Lead", values:7
                    },
                    {
                    name:"Salesperson", values:8
                    }]
                    },
                    {
                    type: "list",
                    message: "What is the employee's corresponding salary??",
                    name: "employeeSalary",
                    choices: [{
                                name:"150000", values:1
                                },
                                {
                                name: "120000", values:2
                                },
                                {
                                name: "160000", values:3
                                },
                                {
                                name:"125000", values:4
                                },
                                {
                                name:"250000", values:5
                                },
                                {
                                name:"190000", values:6
                                },
                                {
                                name:"100000", values:7
                                },
                                {
                                name:"80000", values:8
                                }]
                                },
                                
                    {
            type: "list",
            message: "Who is the employee's manager?",
            name: "employeeManager",
            choices: [{
                        name: "Tino Ganacias", value: 1
                    },
                    {
                        name: "Terra Luthi", value:2
                    },
                    {
                        name:"Margot Arellano", value:7
                    },
                    {
                        name: "Philip Christofides", value:8
                    },
                    ]
                    },
                ])
                
                .then(answers => {
                    console.log(answers);
                    db.query(`INSERT INTO employee (first_name, last_name, employee.title, employee.pay, manager_id) VALUES (?,?,?,?,?)`, [answers.employeeFirstName, answers.employeelastNameUpdatedTitle, answers.employeeTitle, answers.employeeSalary, answers.employeeManager],
                        (err, data) => {
                            if (err) {
                                console.log(err);
                                db.end();
                            } else {
                                console.log("employee added!");
                                viewEmployees();
                            }
                        
                            })
                        })
                    }})}
                
       











    const updateEmployeeTitle = () => {
    db.query("Select * FROM employee", (err, data) => {
        if (err) {
            console.log(err),
                db.end()
        } else {
            const updateTitle = data.map(employee => {
                return {
                    first_name: employee.first_name,
                    last_name: employee.last_name,
                    title_id: employee.title_id
                }
            })}},
        
        
      inquirer
      .prompt([
          {
              type: "list",
              message: "What is the first name of the employee you want to update?",
              name: "firstNameUpdatedTitle",
              choices: [
                  {
                      name:"Tino"
                  },
                  {
                      name:"Terra"
                  },
                  {
                      name:"Ella"
                  },
                  {
                      name:"Caden"
                  },
                  {
                      name:"Malia"
                  },
                  {
                      name:"Athina"
                  },
                  {
                      name:"Margot"
                  },
                  {
                      name:"Philip"
                  }]
                }, 
                
                {
                type: "list",
                message: "What is the last name of the employee you want to update?",
                name: "lastNameUpdatedTitle",
                choices: [
                    {
                        name:"Ganacias"
                    },
                    {
                        name:"Luthi"
                    },
                    {
                        name:"Luthi"
                    },
                    {
                        name:"Luthi"
                    },
                    {
                        name:"Pinder"
                    },
                    {
                        name:"Blesoff-Ganacias"
                    },
                    {
                        name:"Arellano"
                    },
                    {
                        name:"Christofides"
                    }]
                  },
              {
                type:"list",
                message: "What is their new title?",
                name: "newTitle",
                choices: [
                    {
                        name:"Lead Engineer", values:1
                    },
                    {
                        name: "Software Engineeer", values:2
                    },
                    {
                        name: "Account Manager", values:3
                    },
                    {
                        name:"Accountant", values:4
                    },
                    {
                        name:"Legal Team Lead", values:5
                    },
                    {
                        name: "Lawyer", values:6
                    },
                    {
                        name:"Sales Lead", values:7
                    },
                    {
                        name:"Salesperson", values:8
                    }
                ]},

                {
                    type: "list",
                    message: "What is the employee's corresponding salary??",
                    name: "employeeSalary",
                    choices: [{
                                name:"150000", value:1
                              },
                              {
                                name: "120000", values:2
                              },
                              {
                                name: "160000", values:3
                              },
                              {
                               name:"125000", values:4
                              },
                              {
                               name:"250000", values:5
                              },
                              {
                               name:"190000", values:6
                              },
                              {
                               name:"100000", values:7
                              },
                              {
                               name:"80000", values:8
                              }]
                              },
      
             
             
                    ])               

    .then(answers => {
        db.query(`INSERT INTO employee (first_name, last_name, title, pay) VALUES (?,?,?,?)`, [answers.firstNameUpdatedTitle, answers.lastNameUpdatedTitle, answers.newTitle, answers.employeeSalary],
                  (err, data) => {
                      if (err) {
                          console.log(err);
                          db.end();
                      } else {
                          console.log("title added!");
                          viewEmployees();
                    };
                });
        }))};
        
  
        const addDepartment = () => {
            db.query("SELECT * FROM department", (err, data) => {
                if (err) {
                    console.log(err);
                    db.end();
                } else {
                    const addD = data.map(department => {
                        return {
                            name: department.name,
                           
                            value: department.id
                        }
            })
            inquirer
              .prompt([
                  {
                   type: "input",
                   message: "What is the new department?",
                   name: "newDepartment"
                  },
                  
        
                      ])
                         
                        .then(answers => {
                            console.log(answers);
                            db.query(`INSERT INTO department (name) VALUES (?)`, 
                            [answers.newDepartment],
                                (err, data) => {
                                    if (err) {
                                        console.log(err);
                                        db.end();
                                    } else {
                                        console.log("department added!");
                                        viewDepartment();
                                    }
                                
                                  })
                              })
                          }})}




app.listen(PORT, () => {
  console.log("Listenin to the smoov soundz of the server...")
  });