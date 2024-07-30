const { Pool } = require('pg');
const is_prod = process.evi.NODE_ENV === 'production';



const localConnection =
{
    user: 'postgres',
    password: 'pass',
    database: 'student_app_db'
}

const renderConnection = {
    host: 'dpg-cqk2v7iju9rs738fqseg-a',
    user: 'dana',
    password: '8CHAUD75J3U7v9GdRZlOurjG4bOJoLd6',
    database: 'testing_db_awtm'
}

const client = new Pool(is_prod ? renderConnection : localConnection);

module.exports = client;

