const router = require("express").Router();
const restricted = require("../auth/middleware");

const Users = require("./user-model");

router.get("/users", restricted, (req, res) => {
  Users.find()
    .then(user => res.json(user))
    .catch(err => res.json({ message: "Could not get users" }));
});

module.exports = router;