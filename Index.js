const sql = require("mysql2");
const inquirer = require("inquirer");
const PORT = process.env.PORT || 3001;

// Creating connection.
// const db = sql.createConnection(
//     {
//         host:"localhost",
//         user:"root",
//         password:"",
//         database:"team_db"
//     },
//     console.log(`Connected to the team_db database.`)
// ); 

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
        switch(answer.action) {
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
            case "Add Roles":
                addRoles();
                 break;
            case "View All Departments":
                 viewDepartments();
                 break;
            case "Add Department":
                 addDepartment();
                 break;
            default:
                console.log("Goodbye!")
        }
    })
};

// Creating individual functions for each option.
function viewEmployees(){
    db.query(`SELECT * FROM employee`, (err,data) => {
        if (err) {
            throw err
        } else {
            console.table(data);
        }
    });

    inquirer.prompt([
        {
            type: "list",
            message: "Go Back",
            name: "return",
            choices: ["Go Back"]
        }
    ]) .then ((ans) =>{
        start();
    })
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
        })
        console.log("Updated!")
        inquirer.prompt([
            {
                type: "list",
                message: "Go Back",
                name: "return",
                choices: ["Go Back"]
            }
        ]) .then ((ans) =>{
            start();
        })
    })
};
function updateRole() {
    console.log("updateRole")
    inquirer.prompt ([
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

start();