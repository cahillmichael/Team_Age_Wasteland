const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Jean Valjean','24601','JVJ@email.com');
    
    expect(employee.name).toBe('Jean Valjean');
    expect(employee.id).toBe('24601');
    expect(employee.email).toBe('JVJ@email.com');
})

test('gets employee name', () => {
    const employee = new Employee('Jean Valjean','24601','JVJ@email.com');

    expect(employee.getName()).toBe('Jean Valjean');
})

test('gets employee ID', () => {
    const employee = new Employee('Jean Valjean','24601','JVJ@email.com');

    expect(employee.getID()).toBe('24601');
})

test('gets employee email', () => {
    const employee = new Employee('Jean Valjean','24601','JVJ@email.com');

    expect(employee.getEmail()).toBe('JVJ@email.com');
})

test('gets employee role', () => {
    const employee = new Employee('Jean Valjean','24601','JVJ@email.com');

    expect(employee.getRole()).toBe('Employee');
})
