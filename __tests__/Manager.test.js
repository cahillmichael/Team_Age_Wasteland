const Manager = require('../lib/Manager.js');

test('creates new manager object', () => {
    const manager = new Manager('Dwight Schrute','1725','dschrute@email.com', '18503');
    
    expect(manager.name).toBe('Dwight Schrute');
    expect(manager.id).toBe('1725');
    expect(manager.email).toBe('dschrute@email.com');
    expect(manager.officeNumber).toBe('18503');
})

test('gets manager role', () => {
    const manager = new Manager('Dwight Schrute','1725','dschrute@email.com', '18503');

    expect(manager.getRole()).toBe('Manager');
})