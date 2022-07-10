const Manager = require('../lib/Manager');
const manager = new Manager('Daniel', '1234567', 'danielaliabdulkarim@gmail.com', '123');

test('test if we can get the constructor values for the employee object', () => {
    expect(manager.name).toBe('Daniel');
    expect(manager.id).toBe('1234567');
    expect(manager.email).toBe('danielaliabdulkarim@gmail.com');
    expect(manager.officeNumber).toBe('123');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Daniel');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('1234567');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('danielaliabdulkarim@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('123');
});