const { writeFile, copyFile } = require('./src/utils/generate-site');
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
const manager = require('./lib/manager');
const intern = require('./lib/intern');
const engineer = require('./lib/engineer');
const employee = require('./lib/employee')

const employess = [];

function initApp() {
  //startHtml();
  addMember();
}


function addMember() {
  inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Enter employees name'
    },
    {
      name: 'role',
      type: 'list',
      message: 'Select employees role',
      choices: ['Engineer','Intern','Manager'],
    },
    {
      name: 'id',
      type: 'input',
      message: 'Enter employees id',
    },
    {
      name: 'email',
      type: 'input',
      message: 'Enter employees email'
    }
  ])
  .then(function({name, role, id, email}) {
      let roleInfo = '';
      if (role === 'Engineer') {
          roleInfo = 'GitHub username';
      } else if (role === 'Intern') {
          roleInfo = 'school name';
      } else {
          roleInfo = 'office phone number';
      }
      inquirer.prompt([{
          message: `Enter team member's ${roleInfo}`,
          name: "roleInfo"
      },
      {
        name: 'moreMembers',
        type: 'confirm',
        message: 'Would you like to add more team members?',
        choices: ["yes","no"],   
      }])
      .then(function({roleInfo, moreMembers}) {
          let newMember;
          if (role === 'Engineer') {
              newMember = new Engineer(name, id, email, roleInfo);
          } else if (role === 'Intern') {
              newMember = new Intern(name, id, email, roleInfo);
          } else {
              newMember = new Manager(name, id, email, roleInfo);
          }
          employees.push(newMember);
          addHtml(newMember)
          .then(function() {
              if (moreMembers === "yes") {
                  addMember();
              } else {
                  finishHtml();
              }
          });
          
      });
  });
}

initApp();