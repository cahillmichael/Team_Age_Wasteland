const Engineer = require('../lib/Engineer.js');

test('creates engineer object', () => {
    const engineer = new Engineer('Doc Brown','1.21','DrB@email.com', '88mph@github.com');
    
    expect(engineer.name).toBe('Doc Brown');
    expect(engineer.id).toBe('1.21');
    expect(engineer.email).toBe('DrB@email.com');
    expect(engineer.github).toBe('88mph@github.com');
})

test('gets engineer Role', () => {
    const engineer = new Engineer('Doc Brown','1.21','DrB@email.com', '88mph@github.com');

    expect(engineer.getRole()).toBe('Engineer');
})

test('gets engineer github', () => {
    const engineer = new Engineer('Doc Brown','1.21','DrB@email.com', '88mph@github.com');

    expect(engineer.getGithub()).toBe('88mph@github.com');
})
