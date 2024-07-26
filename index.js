const inquirer = require('inquirer');

const client = require('./db/connection');

const MenuSystem = require('./lib/MenuSystem');

async function showMainMenu() {
    const answerObj = await inquirer.prompt({
        name: 'choice',
        message: 'please pick an option',
        type: 'list',
        choices: ['show all students', 'add course', 'add student']
    });

    switch (answerObj.choice) {
        case 'show all students':
            await MenuSystem.showAllStudents();
            showMainMenu();
            break;
        case 'add course':
            await MenuSystem.showAddCoursePrompt();
            showMainMenu();
            break;
        case 'add student':
            await MenuSystem.showsAddStudentPrompt();
            showMainMenu();
    }
}

async function init() {
    await client.connect();

    console.log('connected\n');

    showMainMenu();
}

init();

// client.connect()
//     .then(async () => {
//         console.log('connected');

//         const answerObj = await inquirer.prompt([
//             {
//                 name: 'first_name',
//                 message: 'Enter first name'
//             },
//             {
//                 name: 'last_name',
//                 message: 'Enter last name'
//             },
//             {
//                 name: 'course_name',
//                 message: 'Enter the course name'
//             }
//         ]);

//         // const data = await client.query('SELECT * FROM students');
//         const sql = `INSERT INTO students(first_name, last_name, course_name) VALUES($1, $2, $3)`;

//         await client.query(sql, [answerObj.first_name, answerObj.last_name, answerObj.course_name]);

//         console.log('student created');
//     });