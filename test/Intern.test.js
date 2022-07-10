const Intern = require('../lib/Intern');
const intern = new Intern('Daniel', '1234567', 'danielaliabdulkarim@gmail.com', 'Taxes');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('Daniel');
    expect(intern.id).toBe('1234567');
    expect(intern.email).toBe('danielaliabdulkarim@gmail.com');
    expect(intern.school).toBe('Taxes');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Daniel');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('1234567');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('danielaliabdulkarim@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Taxes');
});