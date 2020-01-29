const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../secret');
const Users = require('../users/user-model');

const restrictedPath = (req, res, next) => {
    const token = req.headers.authorization;


    if(token) {
        jwt.verify(
            toke,
            secrets.jwtSecrets,
             (error, decodedToken) => {
                 if (error) {
                     res.status(400).json({message: 'there is a problem'});

                 } else {
                     req.decodedJwt = decodedToken;
                     next();
                 }
             });
    } else {
        res.status(400).json({message: 'problem with token'});
    }
};

module.exports = restrictedPath;