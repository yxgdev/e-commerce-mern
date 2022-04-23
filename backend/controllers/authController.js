const User = require("../models/User");
const config = require("config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = (req, res) => {
  const { name, email, password } = req.body;

  //   ensuring values exist
  if (!name || !email || !password) {
    res.status(400).json({ msg: "Please enter name, email and password" });
  }

  //   checking if user exist
  User.findOne({ email: email }).then(
    (user) => user && res.status(400).json({ msg: "User already exist" })
  );

  const newUser = new User({ name, email, password });

  //   create salt and hash

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      //   set password to hashed password
      newUser.password = hash;
      newUser
        .save() // save to mongo
        .then((user) => {
          // sign payload jwt
          jwt.sign(
            { id: user._id },
            config.get("jwtsecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              // return token and json object of user
              res.json({
                token,
                user: {
                  id: user._id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        });
    });
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // checking input exists
  if (!email || !password) {
    res.status(400).json({ msg: "Please enter email and password" });
  }

  // checking if user exist or not
  User.findOne({ email: email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

      jwt.sign(
        { id: user._id },
        config.get("jwtsecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });

  //   Validate password if user exist
};

module.exports = { signUp, login };
