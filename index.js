const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const team =[];

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
                validate: officeNumInput => {
                    if (officeNumInput){
                        return true;
                    } else {
                        console.log('Office number is required.');
                        return false;
                    }
                }
            },
        ])


};

