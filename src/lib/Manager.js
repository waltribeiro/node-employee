// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
    constructor (name, email, id) {

        this.name = name;
        this.email = email;
        this.id = id;
    }

}

module.exports = Manager;