const Employee = require('../lib/Employee');
const employee = new Employee('Martin','1','martinbradley@gmail.com','martinsgithub');

test('test for input values', () => {
    expect(employee.name).toBe('Martin');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('martinbradley@gmail.com')
})

test('test getName function', () => {
    expect(employee.getName()).toBe('Martin');
})

test('test getId function', () => {
    expect(employee.getId()).toBe('1');
})

test('test getEmail function', () => {
    expect(employee.getEmail()).toBe('martinbradley@gmail.com');
})
test('test getGitHub function', () => {
    expect(employee.getGithub()).toBe('martinsgithub');
})