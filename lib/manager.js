const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, officeId) {
        super(name, id, email)
        this.officeId = officeId;
        this.title = 'Manager';
    }
    getOfficeId() {
        return this.officeId
    }
    getRole() {
        return 'Manager';
    }
} 
module.exports = Manager;