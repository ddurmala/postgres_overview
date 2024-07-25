const inquirer = require('inquirer');
const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    password: 'pass',
    database: 'students_db'
});

client.connect()
    .then(async () => {
        console.log('connected');

        const answerObj = await inquirer.prompt([
            {
                name: 'first_name',
                message: 'Enter first name'
            },
            {
                name: 'last_name',
                message: 'Enter last name'
            },
            {
                name: 'course_name',
                message: 'Enter the course name'
            }
        ]);

        // const data = await client.query('SELECT * FROM students');
        const sql = `INSERT INTO students(first_name, last_name, course_name) VALUES($1, $2, $3)`;

        await client.query(sql, [answerObj.first_name, answerObj.last_name, answerObj.course_name]);

        console.log('student created');
    });