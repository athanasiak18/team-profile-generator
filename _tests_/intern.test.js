const Employee = require('../lib/Employee');
const employee = new Employee('Martin','1','martinbradley@gmail.com','Columbia');

test('enter values', () => {
    expect(employee.name).toBe('Martin');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('martinbradley@gmail.com')
})

test('name function', () => {
    expect(employee.getName()).toBe('Martin');
})

test('Id function', () => {
    expect(employee.getId()).toBe('1');
})

test('Email function', () => {
    expect(employee.getEmail()).toBe('martinbradley@gmail.com');
})
test('University function', () => {
    expect(employee.getUniversity()).toBe('Columbia');
})