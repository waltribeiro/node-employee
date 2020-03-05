// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
    constructor (name, email, id) {

        this.name = name;
        this.email = email;
        this.id = id;
    }

}

module.exports = Engineer;