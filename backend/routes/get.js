var express = require('express');
var router = express.Router();
var db = require('../database/getrequest');
const { loginRequired } = require("../auth/helpers");

router.get('/logout', loginRequired, db.logout)
router.get('/user', loginRequired, db.getLoggedInUser)
router.get('/singleuser/:user_id', db.getSingleUser)
router.get('/allusers', db.getAllUsers)
router.get('/getuserphotos/:user_id', db.getUserPhotos)
router.get('/allfollows/:user_id', db.getFollows)
router.get('/allfollowers/:user_id', db.getFollowers)


module.exports = router;
