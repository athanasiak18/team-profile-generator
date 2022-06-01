const Manager = require('../lib/Manager');
const manager = new Manager('Miranda','2','mirandapriestly@gmail.com','2025');

test('enter values', () => {
    expect(employee.name).toBe('Miranda');
    expect(employee.id).toBe('2');
    expect(employee.email).toBe('mirandapriestly@gmail.com')
})

test('name function', () => {
    expect(employee.getName()).toBe('Miranda');
})

test('Id function', () => {
    expect(employee.getId()).toBe('2');
})

test('Email function', () => {
    expect(employee.getEmail()).toBe('mirandapriestly@gmail.com');
})
test('Office number function', () => {
    expect(employee.getOfficeId()).toBe('2025');
})