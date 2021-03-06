const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const team =[];

const createHTML = require('./src/createHTML');

//function to gather information on team manager
const initTeam = function() {
    inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: 'Enter the name of the manager.',
                validate: nameInput => {
                    if (nameInput){
                        return true;
                    } else {
                        console.log('Manager name is required.');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: 'Enter employee ID.',
                validate: idInput => {
                    if (idInput){
                        return true;
                    } else {
                        console.log('Employee ID is required.');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: 'Enter employee email address.',
                validate: emailInput => {
                    if (emailInput){
                        return true;
                    } else {
                        console.log('Employee email address is required.');
                        return false;
                    }
                }
            },
	        {
                type: 'text',
                name: 'officeNumber',
                message: 'Enter office number.',
                validate: officeNumberInput => {
                    if (officeNumberInput){
                        return true;
                    } else {
                        console.log('Office number is required.');
                        return false;
                    }
                }
            }
        ])
        //write information to team array and call menu function
        .then(({name, id, email, officeNumber}) => {
            const manager = new Manager(name, id, email, officeNumber);
            team.push(manager);

            menu();
        });
};

//menu function handles user choices, calling addEnginer, addIntern, or completeTeam to generate html
const menu = function() {
    inquirer.prompt({
            type: 'list',
            name: 'menuChoice',
            message: 'Select an option:',
            choices: ['Add an engineer.', 'Add an intern.', 'Complete team.']
        })

        .then(response => {
            if (response.menuChoice === 'Add an engineer.') {
                addEngineer();
            } else if (response.menuChoice === 'Add an intern.') {
                addIntern();
            } else {
		        completeTeam();
            }
        })
};

//gathers engineer information and writes to team array, then call menu
const addEngineer = function() {
    inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: 'Enter the name of this engineer.',
                validate: nameInput => {
                    if (nameInput){
                        return true;
                    } else {
                        console.log('Engineer name is required.');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: 'Enter employee ID.',
                validate: idInput => {
                    if (idInput){
                        return true;
                    } else {
                        console.log('Employee ID is required.');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: 'Enter employee email address.',
                validate: emailInput => {
                    if (emailInput){
                        return true;
                    } else {
                        console.log('Employee email address is required.');
                        return false;
                    }
                }
            },
	        {
                type: 'text',
                name: 'github',
                message: 'Enter Github username for Engineer.',
                validate: githubInput => {
                    if (githubInput){
                        return true;
                    } else {
                        console.log('Github is required.');
                        return false;
                    }
                }
            }
        ])

        .then(({name, id, email, github}) => {
            const engineer = new Engineer(name, id, email, github);
            team.push(engineer);

            menu();
        });
};

//gather intern information and write to team array, then call menu
const addIntern = function() {
    inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: 'Enter the name of this intern.',
                validate: nameInput => {
                    if (nameInput){
                        return true;
                    } else {
                        console.log('Intern name is required.');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: 'Enter intern ID.',
                validate: idInput => {
                    if (idInput){
                        return true;
                    } else {
                        console.log('Intern ID is required.');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: 'Enter intern email address.',
                validate: emailInput => {
                    if (emailInput){
                        return true;
                    } else {
                        console.log('Intern email address is required.');
                        return false;
                    }
                }
            },
	        {
                type: 'text',
                name: 'school',
                message: 'Enter the school this intern attends.',
                validate: schoolInput => {
                    if (schoolInput){
                        return true;
                    } else {
                        console.log('School attended is required.');
                        return false;
                    }
                }
            }
        ])

        .then(({name, id, email, school}) => {
            const intern = new Intern(name, id, email, school);
            team.push(intern);

            menu();
        });
};

//calls createHTML and writes html file to the dist directory
const completeTeam = function() {
    const genPage = createHTML(team);
    
    fs.writeFile('./dist/index.html', genPage, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
}

initTeam();