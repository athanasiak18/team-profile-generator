const Employee = require('../lib/Employee');
const employee = new Employee('Martin','001','martin@gmail.com');

test('values', () => {
    expect(employee.name).toBe('Martin');
    expect(employee.id).toBe('001');
    expect(employee.email).toBe('martin@gmail.com')
})

test('name', () => {
    expect(employee.getName()).toBe('Martin');
})

test('id', () => {
    expect(employee.getId()).toBe('001');
})

test('email', () => {
    expect(employee.getEmail()).toBe('martin@gmail.com');
})