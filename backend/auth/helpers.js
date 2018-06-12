const bcrypt = require("bcryptjs");
const db = require("../database/index");

function comparePass(username, password) {
  console.log(username);
  return bcrypt.compareSync(username, password);
}

function createUser(req) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return db.none(
    "INSERT INTO users (user_id, username, password, email, phone, private) VALUES (DEFAULT, ${username}, ${password}, ${email}, ${phone}, ${private})",
    {
      username: req.body.username,
      password: hash,
      email: req.body.email,
      phone: req.body.phone,
      private: req.body.private
    }
  );
}

function loginRequired(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ status: "Please log in" });
  }
  return next();
}


module.exports = {
  comparePass,
  createUser,
  loginRequired
};
