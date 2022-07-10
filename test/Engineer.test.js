const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Daniel', '1234567', 'danielaliabdulkarim@gmail.com', 'dannyyyspam');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('Daniel');
    expect(engineer.id).toBe('1234567');
    expect(engineer.email).toBe('danielaliabdulkarim@gmail.com');
    expect(engineer.githubUsername).toBe('dannyyyspam');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Daniel');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('1234567');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('danielaliabdulkarim@gmail.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('dannyyyspam');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});