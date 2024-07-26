const inquirer = require('inquirer');
const client = require('../db/connection');
const Query = require('./Query');
// const { addListener } = require('process');
// const { default: Choices } = require('inquirer/lib/objects/choices');

require('console.table');

class MenuSystem {
    static async showAllStudents() {
        const sql = `
    SELECT
    students.id AS student_id,
    CONCAT(students.first_name, ' ', students.last_name) AS full_name,
    courses.id AS course_id,
    course_name,
    course_type,
    groups.id AS group_id,
    group_name,
    group_leaders.first_name AS group_leader
    FROM students
        JOIN courses
            ON students.course_id = courses.id
        LEFT JOIN groups
        ON students.group_id = groups.id
        LEFT JOIN students AS group_leaders
        ON students.group_leader_id = group_leaders.id
    ORDER BY student_id
        `;

        const data = await client.query(sql);

        console.table(data.rows);
    }

    static async showAddCoursePrompt() {
        console.log('\nPlease enter the course information\n');

        const answerObj = await inquirer.prompt([
            {
                name: 'course_name',
                message: 'enter the course name'
            },
            {
                name: 'course_type',
                message: 'enter course type'
            }
        ]);

        await Query.addCourse(answerObj);
    }

    static async showsAddStudentPrompt() {
        // grab the courses
        const { rows: courses } = await client.query('SELECT * FROM courses');

        // show question prompts
        const answerObj = await inquirer.prompt([
            {
                name: 'first_name',
                message: 'enter students first name'
            },
            {
                name: 'last_name',
                message: 'enter students last name'
            },
            {
                name: 'course_id',
                type: 'list',
                message: 'Select the course student is enrolled: ',
                choices: courses.map(courseObj => {
                    return {
                        name: courseObj.course_name,
                        value: courseObj.id
                    }
                })
            }
        ])

        // call addStudent method
        await Query.addStudent(answerObj);
    }

}

module.exports = MenuSystem;