const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');


const Users = require('../users/user-model');

function makeToken(user) {
    // make a "payload" object
    const payload = {
      sub: user.id,
      username: user.username,
    };
    // make an "options" object (exp)
    const options = {
      expiresIn: '1d',
    };
    // use the lib to make the token
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET || 'thesecret',
      options,
    );
    return token;
  }

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = router;