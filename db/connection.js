const { Sequelize } = require('sequelize');

const client = new Sequelize(
    'student_app_db', // database name
    'postgres', //username
    'pass', { //password
    host: 'localhost', //type of database
    // logging: false // turn off sql code logging
    dialect: 'postgres'
}
);

module.exports = client;


// const is_prod = process.env.NODE_ENV === 'production';



// const localConnection =
// {
//     user: 'postgres',
//     password: 'pass',
//     database: 'student_app_db'
// }

// const renderConnection = {
//     connectionString: process.env.DB_URL,
//     ssl: {
//         rejectUnauthorized: false
//     }
// }

// const connectObj = is_prod ? renderConnection : localConnection;

