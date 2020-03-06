const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");
const outputPath = path.resolve(__dirname, "output", "team.html");
const render = require('./lib/htmlRenderer')

const allEmployee = [];
const inquirer = require("inquirer");
const fs = require("fs");

const employeeQuestions = [
    {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Manager", "Intern", "Engineer"]

    },
    {
        type: "input",
        message: "What is your name?",
        name: "name"

    },
    {
        type: "input",
        message: "What is your ID #?",
        name: "id"

    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"

    }
];

const managerQuestions = [
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }
    
];

const internQuestions = [
    {
        type: "input",
        message: "What is your school?",
        name: "school"
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is your GitHub?",
        name: "github"
    }
];

const newTeamMemberQuestions = [
       {
        type: "list",
        message: "Would you like to add more team members?",
        name: "newTeamMember",
        choices:["yes", "no"]
       }
];



    