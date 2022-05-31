const Employee = require('../lib/Employee');
const employee = new Employee('Martin','1','martinbradley@gmail.com','martinsgithub');

test('enter values', () => {
    expect(employee.name).toBe('Martin');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('martinbradley@gmail.com')
})

test('name function', () => {
    expect(employee.getName()).toBe('Martin');
})

test('ID function', () => {
    expect(employee.getId()).toBe('1');
})

test('email function', () => {
    expect(employee.getEmail()).toBe('martinbradley@gmail.com');
})
test('GitHub function', () => {
    expect(employee.getGithub()).toBe('martinsgithub');
})