const express = require('express');

const client = require('./db/connection');

const api_routes = require('./routes/api_routes');

const app = express();
const PORT = 3333;


// allow json to be sent thru request
app.use(express.json());

app.use('/api', api_routes);

client.connect()
    .then(() => {
        console.log('db connected');

        app.listen(PORT, () => {
            console.log('express server started on', PORT);
        })
    })