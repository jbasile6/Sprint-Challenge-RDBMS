const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());


const db = require('./data/dbConfig');

const port = 5000;

server.listen(port, () => {
    console.log(`\n** API running on http://localhost:${port} **\n`)
})