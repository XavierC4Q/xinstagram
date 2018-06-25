const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

function editUser(req, res, next) {

  return db.none(
    `UPDATE users
     SET username=$1, email=$2, profile_pic=$3, phone=$4, private=$5
     WHERE user_id=${req.params.userID};`,
    [
      req.body.username,
      req.body.email, req.body.profile_pic,
      req.body.phone, req.body.private
    ]
  )
  .then(data => {
    res.json("success");
  })
  .catch(error => {
    res.json(error);
  });
}

module.exports = {
  editUser
}
