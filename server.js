const express = require('express');

const cors = require('cors');

const client = require('./db/connection')

const api_routes = require('./routes/api_routes');

const app = express();

const PORT = 3333;


// allow json to be sent thru request
app.use(express.json());

app.use(cors());

app.use('/api', api_routes);

// if u do not set force back to false it will delete all of your tables when the file runs
client.sync({ force: false })
    .then(() => {
        console.log('db connected');

        app.listen(PORT, () => {
            console.log('express server started on', PORT);
        })
    })