const inquirer = require("inquirer");
const path = require('path');
const generateProfile = require('./generateProfile');
const Manager = require('./lib:/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const fs = require('fs');
const employees = [];


function firstPrompt() {
inquirer
  .prompt([
    {
        type:'list',
        name:'employeeRole',
        message: "What is the role?",
        choices: ['Manager', 'Engineer', 'Intern', 'Exit']
    }
  ])
  .then((employeeRole) => {
    console.log(employeeRole)
    switch(employeeRole.employeeRole) {
        case 'Manager':
        createManager()
            break
        case 'Engineer':
        createEngineer()
        break
        case 'Intern':
            createIntern()
            break
        default:
          exit();
          break
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    }

    });
}

createManager = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email:',
      },
      {
        type:'number',
        name:'id',
        message:'ID'
      },
      {
        type:'number',
        name:'officeId',
        message:'Office ID'
      },
    ]).then(answers => {
      console.log(answers);
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeId);
      employees.push(manager);
      firstPrompt();
    })
}

createEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email:',
    },
    {
      type:'number',
      name:'id',
      message:'ID number'
    },
    {
      type: 'input',
      name: 'github',
      message: 'GitHub User name:'
    }
  ]).then(answers => {
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    employees.push(engineer);
    firstPrompt();
  })
}

createIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name:'
    },
    {
      type:'number',
      name:'id',
      message:'ID number'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email:',
    },
    {
      type: 'input',
      name: 'university',
      message: 'University:'
    }
  ]).then(answers => {
    console.log(answers);
    const intern = new Intern(answers.name, answers.id, answers.email, answers.university);
    employees.push(intern);
    firstPrompt();
  })
}

function exit() {
  console.log('goodbye');
  fs.writeFile('index.html', generateProfile(employees), (error) => {
    if(error) throw error;
  }) 
}

firstPrompt();
