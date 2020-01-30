const express = require('express');
const cors = require('cors');
const authRouter = require('./auth/auth-router');
const userRouter = require('./users/user-router');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/user', userRouter);


server.get('/', (req, res ) => {
    res.send(' Api is working ')
});

module.exports = server;