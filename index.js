const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeam = require("./src/template")
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "teamgenerator.html");

teamArray = [];

function promptUser() {

    function createTeam () {
        inquirer.prompt([
            {
                type: "list",
                name: "addEmployee",
                message: "Which position would you like to add?",
                choices: ["Manager", "Engineer", "Intern", "No additional team members required"]
            }
        ])
        .then(function(userInput) {
            switch(userInput.addEmployee) {
                case "Manager":
                    addManager();
                    break;
                
                case "Engineer":
                    addEngineer();
                    break;
                
                case "Intern":
                    addIntern();
                    break;
                
                default:
                    htmlGenerator();
            }
        })
    }

    function addManager() {
        inquirer.prompt ([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?"
            },

            {
                type: "input",
                name: "managerId",
                message: "What is the manager's employee ID number?"
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?"
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?"
            }
        ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam();
        });
    }

    function addEngineer () {
        inquirer.prompt ([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?"
            },

            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's employee ID number?"
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email address?"
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's GitHub username?"
            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            createTeam();
        });
    }

    function addIntern () {
        inquirer.prompt ([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?"
            },

            {
                type: "input",
                name: "internId",
                message: "What is the intern's employee ID number?"
            },

            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email address?"
            },

            {
                type: "input",
                name: "internSchool",
                message: "What school does the intern attend?"
            }
        ])
        .then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            createTeam();
        });
    }

    function htmlGenerator () {
        fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
        console.log("Your team has been created!")
    }

    createTeam();
}

promptUser();
