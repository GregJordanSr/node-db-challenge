const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../projects/projectsRouter.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);

module.exports = server;