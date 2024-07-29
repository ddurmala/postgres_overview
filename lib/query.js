const client = require('../db/connection');


class Query {
    static async getStudents() {
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

        response.json(data.rows);
    }

    static async getCourse() {
        const sql = 'SELECT * FROM courses';

        const data = await client.query(sql)

        return data.rows;
    }

    static async addCourse(answerObj) {
        const sql = 'INSERT INTO courses (course_name, course_type) VALUES ($1, $2)';

        await client.query(sql, [answerObj.course_name, answerObj.course_type]);

        console.log('course created successfully!\n');
    }

    static async addStudent(formData) {
        const sql = 'INSERT INTO students (first_name, last_name, course_id) VALUES ($1, $2, $3)';

        await client.query(sql, [formData.first_name, formData.last_name, formData.course_id]);

        console.log('student created successfully!\n');
    }
}

module.exports = Query;