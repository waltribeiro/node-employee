// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = "Employee";
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;