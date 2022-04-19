const config = require("config");

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // get token from header
  const token = req.header("x-auth-token");

  // check token exist
  if (!token) {
    return res.status(401).json({ msg: "No token exist, auth denied" });
  }

  try {
    // verify token
    const decoded = jwt.verify(token, config.get("jwtsecret"));

    // add user from payload

    req.user = decoded;
  } catch (error) {
    res.status(400).json({ msg: "Token is not valid" });
  }
};

module.exports = auth;
