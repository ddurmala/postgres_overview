const { Pool } = require('pg');
const



const localConnection =
{
    user: 'postgres',
    password: 'pass',
    database: 'student_app_db'
}

const renderConnection = {
    connectionString: process.env.DB_URL,
    ssl: {
        rejectUnauthorized: false
    }
}

