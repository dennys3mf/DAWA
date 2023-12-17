const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10); // hash the password

  const newUser = new User({
    username: username,
    password: hashedPassword,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username }).then((user) => {
    if (!user) res.status(404).json({ error: "No user found" });
    else {
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid)
        return res.status(401).send({ auth: false, token: null });

      const token = jwt.sign({ id: user._id }, "your-secret-key", {
        expiresIn: 86400,
      }); // expires in 24 hours
      res.status(200).send({ auth: true, token: token });
    }
  });
});

module.exports = router;
