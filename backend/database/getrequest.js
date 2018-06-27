const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

function logout(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

function getLoggedInUser(req, res, next) {
  db.any(
      `SELECT user_id, username, email, phone, profile_pic, private
          FROM users
          WHERE user_id=$1`,
      [req.user.user_id]
    )
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
}

function getSingleUser(req, res, next) {
  db.any(
    `SELECT username, email, phone, profile_pic, private
      FROM users
      WHERE user_id=$1`,
      [req.params.user_id]
  )
  .then(data => {
    res.json(data);
  })
  .catch(error => {
    res.json(error);
  });
}

function getAllUsers(req, res, next) {
  db.any(
      `SELECT user_id, username, email, phone, profile_pic, private FROM users`
    )
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
}

function getUserPhotos(req, res, next) {
  db.any(
    `SELECT url, photo_id FROM photos WHERE user_id=$1`,
    [req.params.user_id]
  )
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.json(error)
  })
}

function getPhotoLikes(req, res, next) {
  db.any(
    `SELECT photos.photo_id, COUNT(photo_likes.user_id) AS user_likes
        FROM photos JOIN photo_likes ON (photos.photo_id = photo_likes.photo_id)
        WHERE photos.photo_id=$1`,
        [req.params.photo_id]
  )
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.json(error)
  })
}

function getFollows(req, res, next) {
  db.any(
    `SELECT username, profile_pic, email, phone, users.user_id, follows_user
        FROM users
        JOIN follows ON (users.user_id = follows_user)
        WHERE follows.user_id=$1`,
        [req.params.user_id]
  )
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.json(error)
  })
}

function getFollowers(req, res, next) {
  db.any(
    `SELECT username, profile_pic, email, phone, users.user_id, follows_user
        FROM users
        JOIN follows ON (users.user_id = follows.user_id)
        WHERE follows_user=$1`,
        [req.params.user_id]
  )
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.json(error)
  })
}

module.exports = {
  logout,
  getSingleUser,
  getLoggedInUser,
  getAllUsers,
  getUserPhotos,
  getPhotoLikes,
  getFollows,
  getFollowers
}
