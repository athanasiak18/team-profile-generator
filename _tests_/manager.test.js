const Manager = require('../lib/Manager');
const manager = new Manager('Miranda','002','miranda@gmail.com','2025');
test('test for input values', () => {
    expect(employee.name).toBe('Miranda');
    expect(employee.id).toBe('002');
    expect(employee.email).toBe('miranda@gmail.com')
})

test('name', () => {
    expect(employee.getName()).toBe('Miranda');
})

test('id', () => {
    expect(employee.getId()).toBe('002');
})

test('email', () => {
    expect(employee.getEmail()).toBe('miranda@gmail.com');
})
test('officeid', () => {
    expect(employee.getOfficeId()).toBe('2025');
})