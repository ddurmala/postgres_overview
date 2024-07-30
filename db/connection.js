const { Pool } = require('pg');
const is_prod = process.evi.NODE_ENV === 'production';



const localConnection =
{
    user: 'postgres',
    password: 'pass',
    database: 'student_app_db'
}

const renderConnection = {
    connectionString: process.env.DB_URL,
    ssl: {
        rejectUnauthorized: false, //set to false to bypass certificate validation
    }
}

const client = new Pool(is_prod ? renderConnection : localConnection);

module.exports = client;

