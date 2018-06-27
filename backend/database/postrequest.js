const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

function registerUser(req, res, next) {
  return authHelpers
    .createUser(req)
    .then(response => {
      console.log('this is the register', req.body)
      passport.authenticate("local", (err, user, info) => {
        if (user) {
          res.status(200).json({
            status: "success",
            data: user,
            message: "Registered one user"
          });
        }
      })(req, res, next);
    })
    .catch(err => {
      res.status(500).json({
        error: err,
        detail: err.detail
      });
    });
}

function loginUser(req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log(err);
      res.status(500).send("error while trying to log in");
    } else if (!user) {
      res.status(401).send("invalid username/password");
    } else if (user) {
      req.logIn(user, function(err) {
        if (err) {
          res.status(500).send("error");
        } else {
          res.status(200).send(user);
        }
      });
    }
  })(req, res, next);
}

function postPhoto(req, res, next) {
  return db.one(
    "INSERT INTO photos (user_id, url)" + "VALUES (${user_id}, ${url})" + "RETURNING user_id, photo_id",
    {
      user_id: req.user.user_id,
      url: req.body.url
    }
  )
  .then(data => {
    res.json({ photo_id: data.photo_id })
  })
  .catch(error => {
    res.json(error)
  })
}

function folllowUser(req, res, next) {
  return db.one(
    "INSERT INTO follows (user_id, follows_user) VALUES (${user_id}, ${follows_user})",
    {
      user_id: req.body.user_id,
      follows_user: req.body.follows_user
    }
  )
  .then(data => {
    res.json("success")
  })
  .catch(error => {
    res.json(error)
  })
}

module.exports = {
  loginUser,
  registerUser,
  postPhoto,
  folllowUser
}
