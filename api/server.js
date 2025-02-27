const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../projects/projectsRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api', projectsRouter);

module.exports = server;