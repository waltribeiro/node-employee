//student axios demo is closest "node > activities > #33 activities"

/*
step 0
get any code that was there and put it in your folder
node app.js
the file should run and not get an error

step 1
get test working
"npm run test"

prompt for the manager > get data for manager > store it somewhere > create new manager based on those parameters
are there more employees (intern? engineer? no more?)

step 2
prompt user for input

step 3
create employees

step 4
run render function
*/

const employees = [];
const Employee = require(".lib/Employee.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

console.log("hello")


inquirer.prompt([

{
    // ask manager questions
}.then(function(managerANswers)
const manager = new Manager()

employees.push(manager);

//loop start
let exit = false;
while () {
    inquirer.prompt([
{
    //what type of employee wuestios
    name: name,
    message: list what type of employee.
    [typeofchoices: ["engineer", "intern", "i dont want o add anymore"]

}

    ]).then(function(employeeANser.employeeAnswer) {

        if (employeeANsseer.employeeType === "engineer") {

            //inquirer for engineer
            inquirer.prompt()
        } employees;lse {

            exit = true;
            const html = render(employees)
            console.log(html);
            fs.writeFile()
        }
    }
}

])

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
