const Intern = require('../lib/Intern.js');

test('create intern object', () => {
    const intern = new Intern('De Niro','2015','deniro@email.com', 'Star Fleet Academy');
    
    expect(intern.name).toBe('De Niro');
    expect(intern.id).toBe('2015');
    expect(intern.email).toBe('deniro@email.com');
    expect(intern.school).toBe('Star Fleet Academy');
})

test('gets intern school', () => {
    const intern = new Intern('De Niro','2015','deniro@email.com', 'Star Fleet Academy');

    expect(intern.getSchool()).toBe('Star Fleet Academy');
})

test('gets intern role', () => {
    const intern = new Intern('De Niro','2015','deniro@email.com', 'Star Fleet Academy');

    expect(intern.getRole()).toBe('Intern');
})