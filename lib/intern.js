const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, university) {
        super(name, id, email)
        this.university = university;
    }
    getSchool() {
        return this.university
    }
    getRole() {
        return 'Intern';
    }
} 
module.exports = Intern;