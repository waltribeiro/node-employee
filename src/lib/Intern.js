// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern extends Employee {
    constructor (name, email, id) {

        this.name = name;
        this.email = email;
        this.id = id;
    }

}

module.exports = Intern;