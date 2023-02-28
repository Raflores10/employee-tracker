const db = require("./config/connection");
const inquirer = require("inquirer");
const PORT = process.env.PORT || 3001;

// Creating connection.


// Creating function for promt to get user input.
function start() {
    inquirer.prompt ({
        name:"choices",
        type:"list",
        message:"What would you like to do?:",
        choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Quit"

        ]
    })
    .then (function (answer) {
        switch(answer.choices) {
            case "View All Employees":
                viewEmployees();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Update Employee Role":
                updateRole();
                break;
            case "View All Roles":
                viewRoles();
                break;
            case "Add Role":
                addRoles();
                 break;
            case "View All Departments":
                 viewDepartments();
                 break;
            case "Add Department":
                 addDepartment();
                 break;
            case "Quit":
                console.log('Goodbye!');
                return process.exit(1);
        }
    })
};

// Creating individual functions for each option.
function viewEmployees(){
    console.log("view all")
    db.query(`SELECT * FROM employee`, (err,data) => {
        if (err) {
            throw err
        } else {
            console.table(data);
            start()
        }
    });

};

function addEmployee(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Employee's First Name",
            name: "firstName",   
        },
        {
            type: "input",
            message: "Enter Employee's Last Name",
            name: "lastName",   
        },
        {
            type: "input",
            message: "Enter Employee's Role",
            name: "role",   
        },
    ]) .then ((ans) => {
        db.query(`INSERT INTO employee SET ?`,
        {
            first_name: ans.firstName,
            last_name: ans.lastName,
            role_id: ans.role,
    
        },
        function (err) {
            if (err) {
                throw err;
            }
            console.log("Updated!")
            start()
        })
        })
};
function updateRole() {
    console.log("updateRole")
    inquirer.prompt([
        {
            type: "list",
            message: "",
            name: "back",
            choices: ["Back"]
        }
        ]) .then ((ans) => {
            start();
        })
};

function viewRoles() {
    db.query(`SELECT * FROM roles`, (err,data) => {
        if (err) {
            throw err
        } else {
            console.table(data);
            start()
        }
    });
};

function addRoles() {
    console.log("test")
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Role",
            name: "title",   
        },
        {
            type: "input",
            message: "Enter salary for this role",
            name: "salary",   
        },
        {
            type: "input",
            message: "Enter roles department",
            name: "department",   
        },
    ]) .then ((ans) => {
        db.query(`INSERT INTO roles SET ?`,
        {
            title: ans.title,
            salary: ans.salary,
            department_id: ans.department,
    
        },
        function (err) {
            if (err) {
                throw err;
            }
            console.log("Updated!");
            start()
        })
        })
};



function viewDepartments(){
    console.log("view all")
    db.query(`SELECT * FROM department`, (err,data) => {
        if (err) {
            throw err
        } else {
            console.table(data);
            start()
        }
    });

};

function addDepartment(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter department name",
            name: "departmentName",   
        },
    ]) .then ((ans) => {
        db.query(`INSERT INTO department SET ?`,
        {
            department_name: ans.departmentName,
        },
        function (err) {
            if (err) {
                throw err;
            }
            console.log("Updated!")
            start()
        })
        })
};






start();