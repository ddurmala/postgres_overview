const router = require('express').Router();

const client = require('../db/connection');

// GET route to send all students

router.get('/students', async (request, response) => {
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
})

module.exports = router;
